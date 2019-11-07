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