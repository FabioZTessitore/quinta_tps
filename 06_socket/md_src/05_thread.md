# Creazione di un thread

```py
from threading import Thread
import time

# una variabile accessibile anche dal thread
test_value = 0

# funzione che verra' eseguita in un thread
def countdown(start):
    global test_value
    
    n = start
    while n > 0:
        print('test_value is:', test_value)
        print(n)
        n -= 1
        test_value += 1
        time.sleep(1)

print('Creazione di un thread')
t = Thread(target=countdown, args=(10,))

test_value = 42
print('Modifica della variabile di test a', test_value)

print('Thread start ...')
t.start()

print('Waiting for thread end ...')
t.join()

print('Done')
```