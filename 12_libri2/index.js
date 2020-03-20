const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

const db = new sqlite3.Database('libri.db', function () {
    app.listen(3000);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded( { extended: false } ) );

app.get('/', function (req, res) {
    res.sendFile(
        path.join(__dirname, 'public', 'index.html')
    );
});

app.get('/autori', function (req, res) {
    const sql = "SELECT * FROM autori ORDER BY cognome;";
    db.all(sql, function (err, rows) {
        res.render('autori', {
            autori: rows
        });
    });
});

app.post('/nuovo-autore', function (req, res) {
    const sql = "INSERT INTO autori (nome, cognome) VALUES (?, ?);";
    db.run(sql, [req.body.nome, req.body.cognome], function () {
        res.redirect('/autori');
    });
});

app.get('/autore/:id/edit', function (req, res) {
    const sql = "SELECT * FROM autori WHERE id=?;";
    db.get(sql, [req.params.id], function (err, row) {
        res.render('autore', {
            autore: row
        });
    });
});

app.post('/edit-autore', function (req, res) {
    const sql = "UPDATE autori SET nome=?, cognome=? WHERE id=?;";
    db.run(sql, [req.body.nome, req.body.cognome, req.body.id], function () {
        res.redirect('/autori');
    });
});

app.get('/libri', function (req, res) {
    const sql_libri = "SELECT libri.id, libri.titolo, group_concat(autori.cognome) as autori FROM libri LEFT JOIN autori_libri ON libri.id=autori_libri.id_libro LEFT JOIN autori ON autori_libri.id_autore=autori.id GROUP BY libri.id ORDER BY libri.titolo;";
    db.all(sql_libri, function (err, libri) {
        res.render('libri', {
            libri: libri
        });
    });
});

app.post('/nuovo-libro', function (req, res) {
    const sql = "INSERT INTO libri (titolo) VALUES (?);";
    db.run(sql, [req.body.titolo], function () {
        res.redirect('/libri');
    });
});

app.get('/libro/:id/edit', function (req, res) {
    const sql_libri = "SELECT libri.id, libri.titolo, group_concat(autori.cognome) as autori FROM libri left join autori_libri on libri.id=autori_libri.id_libro left join autori on autori.id=autori_libri.id_autore WHERE libri.id=? group by libri.id;";
    const sql_libro_autori = "SELECT autori.id, autori.cognome, autori.nome FROM autori INNER JOIN autori_libri ON autori.id=autori_libri.id_autore INNER JOIN libri ON libri.id=autori_libri.id_libro WHERE libri.id=?;";
    const sql_autori = "SELECT * FROM autori ORDER BY cognome;";
    db.all(sql_autori, function (err, autori) {
        db.get(sql_libri, [req.params.id], function (err, libro) {
            db.all(sql_libro_autori, [req.params.id], function (err, autori_libro) {
                res.render('libro', {
                    autori: autori,
                    libro: libro,
                    autori_libro: autori_libro
                });
            })
        });
    });
});

app.post('/edit-libro', function (req, res) {
    const sql = "UPDATE libri SET titolo=? WHERE id=?;";
    db.run(sql, [req.body.titolo, req.body.id], function () {
        res.redirect('/libri');
    });
});

app.post('/add-libro-autore', function (req, res) {
    const idAutore = req.body.id_autore;
    if (idAutore <= 0) return;

    const sql = "INSERT INTO autori_libri (id_autore, id_libro) values (?, ?);";
    db.run(sql, [idAutore, req.body.id_libro], function () {
        res.redirect('/libro/'+req.body.id_libro+'/edit');
    });
});

app.post('/remove-libro-autore', function (req, res) {
    const idAutore = req.body.id_autore;
    if (idAutore <= 0) return;

    const sql = "DELETE FROM autori_libri WHERE id_autore=? AND id_libro=?;";
    db.run(sql, [idAutore, req.body.id_libro], function () {
        res.redirect('/libro/'+req.body.id_libro+'/edit');
    });
});

app.post('/delete-libro', function (req, res) {
    const sql = "DELETE FROM libri WHERE id=?;";
    db.run(sql, [req.body.id], function () {
        res.redirect('/libri');
    });
});

app.use(function (req, res) {
    res.status(404).sendFile(
        path.join(__dirname, 'public', '404.html')
    );
});
