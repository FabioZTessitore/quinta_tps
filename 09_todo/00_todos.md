# L'applicazione todos

Vogliamo sviluppare un'applicazione Web che ci permetta di tenere traccia delle cose da fare (`todo`). Per questa prima applicazione i dati non saranno memorizzati in un database, ma verranno mantenuti direttamente in memoria dal server.

L'applicazione sarà formata da una sola pagina in cui compare la lista dei `todo`,
il form per l'inserimento di un nuovo `todo`, i pulsanti per segnare come fatto un elemento e per eliminare tutti quelli completati.

Cerchiamo quindi di suddividere il lavoro in compiti da portare a termine:

1. Creare un modello dei dati (la lista dei `todos`)
2. Pubblicare i dati sulla pagina (creazione di un template)
3. Gestire l'inserimento di un nuovo dato (creazione del form e gestione dei dati lato server)
4. Modificare un singolo dato (segnare come "fatto" o come "da fare" un singolo `todo`)
5. Eliminare tanti elementi dalla lista (tutti i `todo` completati)

<div style="page-break-after: always;"></div>

## 1 Modello per i dati

L'elemento `todo` sarà composto da:

1. un identificativo univoco - id: int
2. il testo che descrive l'azione - text: String
3. il valore booleano che indica se l'azione è compiuta o meno - done: Boolean

```js
// un todo di esempio
{
    id: 1,
    text: 'Pizza con gli amici',
    done: false
}
```

I vari elementi `todo` saranno raccolti in una lista. Inoltre bisogna tenere traccia del prossimo `id` da utilizzare quando si inserirà un altro elemento (nota: questa operazione è gestita automaticamente dai dbms, ma in questo caso dobbiamo implementarla da soli):

```js
// una lista di todo
const todos = [
    {
        id: 1,
        text: 'Pizza con gli amici',
        done: false
    },

    {
        id: 2,
        text: 'Imparare ad accendere il PC',
        done: false
    },

    {
        id: 3,
        text: 'Imparare a spegnere il PC',
        done: false
    }
];

// il prossimo elemento avra' questo id
const nextId = 4;
```