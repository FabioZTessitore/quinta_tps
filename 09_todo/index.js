// index.js

// todo list

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({ extended: false }) );

app.get('/', function (req, res) {
    res.render('index', {
        todos: todos
    });
});

app.post('/todo-create', function (req, res) {
    create(req.body.todotext);
    res.redirect('/');
});

app.post('/toggle', function (req, res) {
    toggleDone(parseInt(req.body.id));
    res.redirect('/');
});

app.post('/clear', function (req, res) {
    deleteDones();
    res.redirect('/');
});

app.use(function (req, res) {
    res.sendFile(
        path.join(__dirname, 'public', '404.html')
    );
});

let todos = [
    { id: 1, text: 'Learning Node', done: false },
    { id: 2, text: 'Learning Express', done: false },
    { id: 3, text: 'Learning Socket.io', done: false },
];
let nextId = 4;

const create = function (text) {
    const todo = {
        id: nextId,
        text: text,
        done: false
    };
    nextId++;

    todos.push(todo);
};

const selectById = function (id) {
    return todos.find(function (todo) {
        return todo.id === id;
    });
};

const selectByStatus = function (done) {
    return todos.filter(function (todo) {
        return  todo.done === done;
    });
};

const toggleDone = function (id) {
    const todo = selectById(id);
    todo.done = !todo.done;
};

const deleteDones = function () {
    todos = selectByStatus(false);
};

app.listen(3000);