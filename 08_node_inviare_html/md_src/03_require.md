# Require

Nella lezione precedente abbiamo visto come installare un modulo aggiuntivo (path). Vediamo ora come utilizzarlo.

Di solito, per poter utilizzare un modulo, bisogna importarlo mediante la funzione require().

require() importa il modulo e restituisce qualcosa (è una funzione!). Cosa restituisce dipende dal modulo in questione.
Può essere un valore, un oggetto, un'altra funzione.

Nota: in JavaScript le funzioni sono oggetti a tutti gli effetti. Di conseguenza una funzione può accettare
una funzione come parametro e può restituire una funzione al termine del lavoro. Vedremo esempi di
situazioni del genere più avanti.

## Esempio d'uso di path

Utilizziamo require('path') per importare il modulo suddetto. In questo caso, require() restituisce un oggetto che
andremo a memorizzare in una variabile (chiamata anch'essa path!).

```js
// index.js

// importa il modulo path
// e memorizza l'oggetto restituito da require()
const path = require('path');

// l'oggetto path contiene al suo interno il metodo join() che serve a
// creare percorsi unendo i nomi delle sottocartelle con l'opportuno
// separatore ('/' per Linux e '\' per Windows)

// crea il percorso dir/subdir e lo stampa
console.log( path.join('dir', 'subdir') );
```

### Esecuzione

```bash
$ node index.js
dir/subdir
```
