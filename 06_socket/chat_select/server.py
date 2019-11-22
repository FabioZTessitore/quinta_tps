# server.py

import socket
import select

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

server.bind( ('', 9000) )

server.listen(5)

inputs = [ server ]
outputs = [ ]

messages = [ ]

while True:
    readeable, writable, exceptional = select.select(inputs, outputs, inputs)

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
        else:
            data = s.recv(1024)
            if data:
                # ci sono dati da leggere da parte di un client
                messages.append(data)
                print(str(data, 'utf-8'))
                
            else:
                # non ci sono dati da leggere
                
                # Smette di monitorare la connessione e di inviare dati
                if s in outputs:
                    outputs.remove(s)
                inputs.remove(s)
                s.close()
    
    for s in writable:
        # invia tutti i messaggi a tutti i socket
        for message in messages:
            s.send(message)
        
    messages = []
    
    for s in exceptional:
        # Smette di monitorare la connessione e di inviare dati
        inputs.remove(s)
        if s in outputs:
            outputs.remove(s)
        s.close()
