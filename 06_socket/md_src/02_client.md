# Creazione di un client TCP/IPv4

Un client deve effettuare le seguenti operazioni:

1. Creazione del socket
2. Connessione al server
3. Invio (`send`) di dati al server
4. Ricezione (`recv`) della risposta del server
5. Chiusura della connessione

```py
import socket

# 1 Creazione del socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 2 Connessione al server
s.connect( ('indirizzo IP', porta) )

# 3 Invio di dati al server
# I caratteri da inviare vanno preventivamente convertiti di byte
s.send( bytes('hello', 'utf-8') )

# 4 Ricezione dei dati dal server
data = s.recv(1000)             # dimensione massima (in byte) che possono essere letti
data = str(data, 'utf-8')       # converte i byte in string

# 5 Chiusura della connessione
s.close()

# Stampa la risposta del server
print(data)
```