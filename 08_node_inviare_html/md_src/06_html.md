# Inviare pagine HTML

Come risposta alla richiesta del client, invece di inviare una semplice stringa di testo, possiamo inviare una pagina HTML,
così da sfruttare appieno le caratteristiche del client (il browser).

Al posto del metodo `send()` utilizzeremo `sendFile()`. Tale funzione vuole come
argomento il percorso assoluto del file da inviare, ma questa caratteristica pone
un problema: che succede se la directory in cui si trova il nostro progetto viene
spostata? Tale spostamento, d'altra parte, è inevitabile se vogliamo pubblicare
la nostra applicazione su un server remoto.

NodeJS ci viene in soccorso definendo la variabile `__dirname`. Essa conserva proprio il percorso della directory attuale.

Immaginando di creare una sottodirectory `public` per i nostri file HTML e ricordandoci di utilizzare `path`
per costruire il percorso in maniera indipendente dal sistema operativo:

```js
...
    // invia il file ./public/index.html
    res.sendFile( path.join(__dirname, 'public', 'index.html') );
...
```

## Esempio completo

```js
// index.js

const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
    // invia il file ./public/index.html
    res.sendFile( path.join(__dirname, 'public', 'index.html') );
});

app.use(function (req, res) {
    res.status(404);
    res.send('Page Not Found');
});

app.listen(3000);
```