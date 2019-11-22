# NodeJS

## Il modulo Express

```sh
$ npm install express
```

```js
// index.js

const express = require('express');

const app = express();

app.listen(3000);
```

## Rispondere a richieste GET

```js
// index.js

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.listen(3000);
```

## Gestire richieste 404

```js
// index.js

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.use(function (req, res) {
    res.status(404);
    res.send('Page Not Found');
});

app.listen(3000);
```

## Inviare pagine HTML

```js
// index.js

const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
    res.sendFile( path.join(__dirname, 'public', 'index.html') );
});

app.use(function (req, res) {
    res.status(404);
    res.send('Page Not Found');
});

app.listen(3000);
```