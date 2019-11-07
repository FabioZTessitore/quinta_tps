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