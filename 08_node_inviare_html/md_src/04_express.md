# Express

Express è un piccolo framework basato su NodeJS che semplifica di molto la scrittura di server Web.

## Installazione e test del modulo Express

Una volta creata la directory per il nostro progetto ed aver inizializzato il sistema NPM come visto in precedenza,
possiamo installare Express:

```bash
$ npm install express
```

E quindi passiamo al codice:

```js
// index.js

// importiamo il modulo con require()
const express = require('express');

// require('express') restituisce una funzione
// (in particolare un costruttore).
// Di conseguenza possiamo invocare express() e costruire il nostro
// oggetto applicazione
const app = express();

// come ultima operazione mettiamo l'applicazione in ascolto
// scegliendo anche la porta. 
app.listen(3000);
```

<div style="page-break-after: always;"></div>

## Rispondere a richieste GET

L'applicazione che stiamo creando è un server Web e quindi sarà oggetto di richieste da parte del client (il browser).

Quando tramite browser inseriamo l'indirizzo del nostro server verrà lanciata una richiesta di tipo GET (protocollo HTTP)
all'indirizzo '/' (la radice dell'applicazione).

Express ci permette di scrivere il codice da eseguire per gestire questa richiesta in maniera estremamente
espressiva tramite un'istruzione del tipo `app.get(URL, AZIONE)`.

URL sarà '/'.

AZIONE sarà la funzione che dovrà essere eseguita per gestire la richiesta.
Per essere una funzione valida deve accettare due parametri: un oggetto richiesta (request) e un oggetto risposta (response):

```js
function (req, res) {
    // gestire la richiesta qui

    // req contiene i parametri della richiesta

    // res permette di fornire una risposta al client
}
```

Mettendo insieme:

```js
// index.js

// importa express
const express = require('express');

// crea l'app
const app = express();

// gestiore di richieste GET su '/'
app.get('/', function (req, res) {
    // invia una stringa di saluto al client
    res.send('Hello, World!');
});

// infine mette l'app in ascolto su porta 3000
app.listen(3000);
```
