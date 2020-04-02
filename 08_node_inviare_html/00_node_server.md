# Il modello client server

Il modello client server è uno dei più utilizzati per la creazione di applicazioni di rete.

Si basa sul concetto di richiesta-risposta. Un programma, il client, effettua una richiesta ad un altro programma, il server.
Quest'ultimo elabora la richiesta e fornisce una risposta, che il client provvederà ad elaborare per mostrare informazioni all'utente.

## Le applicazioni Web

Le applicazioni Web sono applicazioni di rete, basate sul modello client server, che fanno uso del protocollo HTTP.

Tradizionalmente le informazioni sono trasferite sotto forma di pagine HTML.

Per i nostri scopi utilizzeremo come client il browser. Per il server esistono varie possibilità. Una di queste è quella di
utilizzare qualcosa di già fatto (ad esempio Apache), oppure possiamo costruire la nostra applicazione server da zero.

Quest'ultima strada, anche se in apparenza più complessa, è quella che ci offre la possibilità di capire i dettagli
del funzionamento della nostra applicazione e ci permetterà in seguito una maggiore flessibilità e anche di superare
i limiti del modello client server basato sul concetto di richiesta-risposta. A tal proposito ci viene incontro
l'ambiente di esecuzione NodeJS.

### JavaScript e NodeJS

JavaScript è un linguaggio di programmazione utilizzato tradizionalmente all'interno del browser per rendere le pagine HTML
interattive.

Da qualche anno a questa parte, lo sviluppo di NodeJS ha permesso di portare codice JavaScript al di fuori del browser.
NodeJS è infatti un ambiente di esecuzione per questo linguaggio, scelto per la sua flessibilità, per la sua espressività,
e, non ultimo, perché già noto agli sviluppatori che si occupano di pagine Web interattive.

Grazie a NodeJS possiamo scrivere il nostro server personalizzato senza essere costretti ad imparare due linguaggi di programmazione diversi,
uno per il client e uno per il server. Utilizzeremo JavaScript da entrambe le parti.

#### NPM

NodeJS è un ambiente minimale, permette di far girare codice JavaScript e fornisce pochi, ma fondamentali, elementi per poter
costruire applicazioni di rete. Per rendere il lavoro del programmatore più semplice, sono stati sviluppati tanti moduli
riuniti in un ecosistema fruibile attraverso il Node Package Manager, NPM.