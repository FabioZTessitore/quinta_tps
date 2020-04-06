// index.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// modello dati
let todos = [
    { id: 1, text: 'Learning Node', done: false },
    { id: 2, text: 'Learning Express', done: false },
    { id: 3, text: 'Learning Socket.io', done: false },
];
let nextId = 4;

// configurazione ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// lettura del corpo delle richieste POST
app.use( bodyParser.urlencoded({ extended: false }) );

// Home Page
app.get('/', function (req, res) {
    res.render('index', {
        todos: todos
    });
});

// Creazione di un nuovo todo
app.post('/todos', function (req, res) {
    const todo = {
        id: nextId,
        text: req.body.text,
        done: false
    };
    nextId++;

    todos.push(todo);

    res.redirect('/');
});

// Todo: Fatto / Non Fatto
app.post('/todos/toggle', function (req, res) {
    const id = parseInt(req.body.id);

    const todo = todos.find(function (todo) {
        return todo.id === id;
    });
    if (todo) {
        todo.done = !todo.done;
    }

    res.redirect('/');
});

// Elimina tutti i todo completati
app.post('/todos/delete', function (req, res) {
    todos = todos.filter(function (todo) {
        return  todo.done === false;
    });
    
    res.redirect('/');
});

// 404
app.use(function (req, res) {
    res.sendFile(
        path.join(__dirname, 'public', '404.html')
    );
});

app.listen(3000);