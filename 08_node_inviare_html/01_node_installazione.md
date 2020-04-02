# Installazione di NodeJS

Se utilizziamo la pennetta USB creata a lezione con sistema operativo Linux, NodeJS e NPM sono già presenti.

Se, invece, utilizziamo Windows dobbiamo effettuare l'installazione. Si veda, ad esempio, il video all'indirizzo
https://www.youtube.com/watch?v=VR6lMnD-X70#action=share

## Test dell'installazione

Per verificare che l'installazione sia andata a buon fine proviamo ad invocare i comandi node e npm chiedendo la versione installata:

```bash
$ node -v
...
$ npm -v
...
```

## Hello World!

Il primo programma non può che essere il classico Hello, World!

Crea una directory chiamata hello e al suo interno crea un file hello.js

> hello.js
```js
console.log('Hello, World!');
```

Da terminale mandiamo in esecuzione:

```bash
$ node hello.js
Hello, World!
```

L'oggetto console permette di stampare stringhe sul terminale tramite il metodo log().

È normalmente presente all'interno del browser e, in quel caso, permette di stampare sulla console del browser stesso.

È presente anche in NodeJS per mantenere uniformità nel linguaggio.