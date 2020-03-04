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
    const sql_libri = "SELECT libri.id, libri.titolo, autori.cognome FROM libri LEFT JOIN autori ON libri.id_autore=autori.id ORDER BY titolo;";
    const sql_autori = "SELECT * FROM autori ORDER BY cognome;";
    db.all(sql_autori, function (err, autori) {
        db.all(sql_libri, function (err, libri) {
            res.render('libri', {
                autori: autori,
                libri: libri
            });
        });
    });
});

app.post('/nuovo-libro', function (req, res) {
    const sql = "INSERT INTO libri (titolo, id_autore) VALUES (?, ?);";
    db.run(sql, [req.body.titolo, req.body.autore], function () {
        res.redirect('/libri');
    });
});

app.get('/libro/:id/edit', function (req, res) {
    const sql_libri = "SELECT * FROM libri WHERE id=?;";
    const sql_autori = "SELECT * FROM autori ORDER BY cognome;";
    db.all(sql_autori, function (err, autori) {
        db.get(sql_libri, [req.params.id], function (err, libro) {
            res.render('libro', {
                autori: autori,
                libro: libro
            });
        });
    });
});

app.post('/edit-libro', function (req, res) {
    const sql = "UPDATE libri SET titolo=?, id_autore=? WHERE id=?;";
    db.run(sql, [req.body.titolo, req.body.autore, req.body.id], function () {
        res.redirect('/libri');
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
