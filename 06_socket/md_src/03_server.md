# Creazione di un server TCP/IPv4

Un server deve effettuare le seguenti operazioni:

1. Creazione del socket
2. Associazione di una porta su cui rimanere in ascolto
3. Specificare la lunghezza della coda di attesa
4. Girare in loop infinito
   1. Restare in ascolto per eventuali connessioni
   2. Ricezione (`recv`) della richiesta del client
   3. Invio (`send`) della risposta al client
   4. Chiusura della connessione

```py
import socket

# 1 Creazione del socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 2 Associazione della porta
s.bind( ('', 9000) )

# 3 Specificare la lunghezza della coda di attesa
s.listen(5)

# 4 Girare in loop infinito
while True:
    # 1 Restare in ascolto per eventuali connessioni
    c, a = accept()
    print('Connessione da', a)

    # 2 Ricezione (`recv`) della richiesta del client
    data = c.recv(1000)
    data = str(data, 'utf-8')

    # 3 Invio (`send`) della risposta al client
    risposta = 'bye'
    if data == 'hi':
        risposta = 'hello'
    elif data == 'ciao':
        risposta = 'ciao'
    c.send( bytes(risposta, 'utf-8') )

    # 4 Chiusura della connessione
    c.close()
```
