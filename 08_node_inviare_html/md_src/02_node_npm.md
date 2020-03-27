# NPM, Node Package Manager

NPM permette di installare i moduli di cui abbiamo bisogno per portare a termine il nostro lavoro.

## Inizializzare un progetto

Prima di installare qualsiasi pacchetto, è necessario un passaggio di inizializzazione.

All'interno della directory del progetto diamo il comando:

```bash
$ npm init
```

Verranno poste una serie di domande e basterà accettare le risposte predefinite premendo INVIO.

In alternativa possiamo digitare:

```bash
$ npm init -y
```

L'opzione -y risponderà automaticamente si (yes).


### package.json

Al termine dell'inizializzazione verrà creato un file package.json contenente le informazioni riguardanti il progetto.
Non va assolutamente cancellato, ma può essere modificato secondo le nostre necessità.

## Installare un pacchetto

Immaginiamo di voler installare il modulo path.

path serve a creare dei percorsi a partire dai nomi delle directory, ad esempio 'documenti/progetti/test' a partire
da 'documenti', 'progetti' e 'test'. È interessante perché utilizza il separatore corretto in base al sistema
operativo in uso. Su una macchina Windows avrebbe restituito 'documenti\progetti\test' (slash inverso).

```bash
$ npm install path
```

Al termine dell'installazione sarà stata creata una sottodirectory chiamata node_modules. Al suo interno troveremo
il modulo installato più eventuali sue dipendenze.

<div style="page-break-after: always;"></div>

Inoltre sarà stato modificato il file package.json. Ora path si trova tra le dipendenze del nostro progetto:

```js
...
  "dependencies": {
    "path": "^0.12.7"
  }
...
```

Un esempio d'uso del modulo path è presente nella prossima lezione.