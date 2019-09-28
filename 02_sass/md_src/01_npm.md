### Lezione N6

# NPM e SASS

Sass (Syntactically Awesome StyleSheets) è un'estensione del linguaggio CSS che permette,
tra le altre cose, di utilizzare variabili, di creare funzioni e di organizzare il foglio di stile in più file.

Per poterlo utilizzare abbiamo bisogno di un modulo (`node-sass`) e di uno strumento che ci permetta di installare
e gestire moduli: `npm`.

## Creazione di un progetto

Innanzitutto bisogna creare una directory di lavoro e inizializzare il sistema di gestione dei pacchetti `npm`.

```bash
$ npm init -y
```

A questo punto possiamo installare il modulo che si occupa di generare i file CSS a partire dai file Sass.

```bash
$ npm install node-sass
```

## Creazione di uno script per la generazione dei file CSS

L'inizializzazione del progetto ha creato un file `package.json` all'interno della nostra directory di lavoro.
In questo file ci sono informazioni riguardanti il progetto stesso e tra queste troviamo anche una lista di script.

Aggiungiamo il comando per la generazione del file CSS.

```json
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile:sass": "node-sass main.scss style.css"
},
...
```

Una volta creato un file `main.scss` possiamo effettuare la compilazione.

```scss
// main.scss
body {
    background-color: red;
}
```

```bash
$ npm run compile:sass
```

### Automatizzare la compilazione

Il parametro `-w` permette di compilare automaticamente il foglio di stile quando avvengono modifiche ai file `scss`.

```json
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile:sass": "node-sass main.scss style.css -w"
},
...
```