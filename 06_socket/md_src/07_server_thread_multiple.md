# Gestione dei client attraverso thread multipli

```py
# server.py

import socket
from threading import Thread

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

s.bind( ('', 9000) )

s.listen(5)

clients_list = []

def listenToClient(c):
    global clients_list

    while True:
        data = c.recv(1000)
        data_str = str(data, 'utf-8')
        print(data_str)
        
        if data_str == 'end':
            print('sending end of communication')
            c.send(bytes('end', 'utf-8'))
            c.close()
            clients_list.remove(c)
            break
        else:
            for client in clients_list:
                if client != c:
                    client.send(data)

            


while True:
    c, a = s.accept()
    print('Connessione da', a)

    clients_list.append(c)

    t = Thread(target=listenToClient, args=(c,))
    t.start()
```