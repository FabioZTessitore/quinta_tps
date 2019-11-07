# server.py

import socket
import time
from threading import Thread

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind( ('', 9000) )

s.listen(5)

clients_list = []

def handleClients():
    global clients_list

    while True:
        print('Clients List is:', clients_list)
        time.sleep(2)

t = Thread(target=handleClients)
t.start()

while True:
    c, a = s.accept()
    print('Connessione da', a)

    clients_list.append(c)