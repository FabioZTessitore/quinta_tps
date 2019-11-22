# client.py

import socket
from threading import Thread

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect( ('127.0.0.1', 9000) )

done = False

def messageReceived():
    global done

    while True:
        data = s.recv(1000)
        data = str(data, 'utf-8')
        print(data)

        if data == 'end':
            done = True
            print('Press Enter to exit')
            break

receive = Thread(target=messageReceived)
receive.start()

# inizio chat
while True:
    msg = input()
    msg = bytes(msg, 'utf-8')

    if not done:
        s.send( msg )
    else:
        break

print('program terminated')
s.close()