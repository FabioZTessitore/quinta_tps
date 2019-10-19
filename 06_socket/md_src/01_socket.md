# I Socket

## Creazione di un socket

```py
import socket

s = socket.socket(
    # ADDRESS_FAMILY,
    # SOCKET_TYPE
)
```

### Address Family

```py
socket.AF_INET      # IPv4
socket.AF_INET6     # IPv6
```

### Socket Types

```py
socket.SOCK_STREAM  # TCP, stream
socket.SOCK_DGRAM   # UDP, datagram
```

### Esempio di creazione di un socket TCP/IPv4

```py
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```