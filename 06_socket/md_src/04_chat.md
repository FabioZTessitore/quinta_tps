# Creazione di una chat client/server

Creare una chat client/server

Suggerimento: il server dopo aver accettato una connessione inizia una chat
con quel client. Nel frattempo non può accettare altre connessioni.

```py
# client.py

import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect( ('127.0.0.1', 9000) )

# inizio chat
while True:
    msg = input('>>> ')
    msg = bytes(msg, 'utf-8')
    s.send( msg )

    data = s.recv(1000)
    data = str(data, 'utf-8')       # converte i byte in string
    print( data )

    if data == 'end':
        break

s.close()
```

```py
# server.py

import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind( ('', 9000) )

s.listen(5)

while True:
    c, a = s.accept()
    print('Connessione da', a)

    # inizio chat
    while True:
        data = c.recv(1000)
        data = str(data, 'utf-8')
        print( data )

        # se il client chiede la chiusura
        if data == 'end':
            c.send( bytes('end', 'utf-8') )
            c.close()
            break

        msg = input('>>> ')
        c.send( bytes(msg, 'utf-8') )
        # se il server chiede la chiusura
        if msg == 'end':
            c.close()
            break


    # 4 Chiusura della connessione
    c.close()
```