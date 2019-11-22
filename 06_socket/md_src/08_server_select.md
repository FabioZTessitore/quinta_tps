# Gestione dei socket mediante select

Il modulo `select` fornisce accesso ad alcune funzioni del sistema operativo che permettono il monitoraggio delle risorse.

Il particolare utilizzeremo la funzione `select.select()` per monitorare lo stato dei socket, evitando di utilizzare i thread, e capire quando sono pronti alla lettura, alla scrittura e i casi di errore. Grazie a `select()` possiamo monitorare più connessioni contemporaneamente ed in maniera efficiente perché il monitoraggio avviene a livello di sistema operativo.

La funzione `select()` accetta tre liste di contenenti canali di comunicazione da monitorare. La prima lista contiene i canali da monitorare per dati in entrata; la seconda per i canali di uscita; la terza per quelli per cui potrebbe esserci qualche errore.

Nota: saranno i canali di input ad essere monitorati per eventuali errori.

```py
# esempio di utilizzo della funzione select()
inputs = [ server ]
outputs = [ ]

readeable, writable, exceptional = select.select(inputs, outputs, inputs)
```

Le tre liste restituite da `select()` sono sottoinsiemi delle liste passate come parametri. In particolare: `readeable` contiene i socket da cui stiamo ricevendo dati; `writable` sono i socket su cui è possibile scrivere; `exceptional` sono i socket per cui si è verificata un errore.

## Lettura dei dati

Per quanto riguarda i socket presenti nella lista `readeable` possono aversi tre casi.

### Primo caso: il socket è il server

Significa che il server è pronto ad accettare una connessione. La nuova connessione verrà aggiunta alla lista dei socket di input da monitorare.

```py
for s in readeable:
    if s is server:
        # quando il server e' pronto alla lettura significa che
        # e' pronto ad accettare una nuova connessione
        client, address = s.accept()
        client.setblocking(0)

        # inizia a monitorare la nuova connessione
        inputs.append(client)

        # aggiungi il nuovo client alla lista
        # dei socket pronti per l'invio dei messaggi
        outputs.append(client)
```

### Secondo caso: il socket è un client che ha inviato dati

```py
    else:
        data = s.recv(1024)
        if data:
            # ci sono dati da leggere
            print(str(data, 'utf-8'))
```

### Terzo caso: il socket è un client e non ci sono dati

Se non ci sono dati, il client si è disconnesso

```py
        else:
            # non ci sono dati da leggere
            
            # Smette di monitorare la connessione e di inviare dati
            if s in outputs:
                outputs.remove(s)
            inputs.remove(s)
            s.close()
```