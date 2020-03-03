// index.js

// todo list

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({ extended: false }) );

const db = new sqlite3.Database('todos.db', function (err) {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the todos database.');
    app.listen(3000);
});

app.get('/', function (req, res) {
    const sql = "SELECT * FROM Todos;";
    db.all(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        res.render('index', {
            todos: rows
        });
    });
});

app.post('/todo-create', function (req, res) {
    const sql = "INSERT INTO Todos (text) VALUES (?);";
    db.run(sql, [req.body.todotext], function () {
        res.redirect('/');
    });
});

app.post('/toggle', function (req, res) {
    const sql = "UPDATE Todos SET done = NOT done WHERE id=?;"
    db.run(sql, [parseInt(req.body.id)], function () {
        res.redirect('/');
    });
});

app.post('/clear', function (req, res) {
    const sql = "DELETE FROM Todos WHERE done=1;";
    db.run(sql, function () {
        res.redirect('/');
    });
});

app.use(function (req, res) {
    res.sendFile(
        path.join(__dirname, 'public', '404.html')
    );
});

process.stdin.resume(); //so the program will not close instantly

function exitHandler() {
    console.log('exiting ...');
    db.close(function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
        process.exit();
    });
}

// do something when app is closing
process.on('exit', exitHandler);

// catches ctrl+c event
process.on('SIGINT', exitHandler);

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);

// catches uncaught exceptions
process.on('uncaughtException', exitHandler);