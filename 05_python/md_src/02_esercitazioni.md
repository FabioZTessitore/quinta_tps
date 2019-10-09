# Esercitazioni Linguaggio Python

### Programma **Nome**

Chiede il nome all'utente e lo stampa

```py
# print("Come ti chiami?")
# nome = input()
nome = input("Come ti chiami?")

print(nome)
```


### Programma **Quadrato**

Chiede un numero intero e ne stampa il quadrato

```py
x = input("Inserisci un numero: ")
x = int(x)

x2 = x**2   # x2 = x * x

print(x2)
```


### Programma **Radice**

Chiede un numero intero e ne stampa la radice quadrata

```py
import math

x = input("Inserisci un numero: ")
x = int(x)

result = math.sqrt(x)

print(result)
```


### Programma **Scelta**

Stampa un menu e in base alla scelta effettuata dall'utente calcola il quadrato o la radice del numero intero inserito

```py
import math

print("Scegli\n")
print("1 - Quadrato")
print("2 - Radice")
choice = input()
choice = int(choice)

x = input("Inserisci un numero: ")
x = int(x)

if choice == 1:
    result = x**2
    print(result)
elif choice == 2:
    result = math.sqrt(x)
    print(result)
else:
    print("Scelta non valida")
```

### Programma **Funzioni**

Riscrivere **Scelta** utilizzando delle funzioni per il calcolo del quadrato e della radice

```py
import math

def quadrato(x):
    return x**2

def radice(x):
    return math.sqrt(x)

print("Scegli\n")
print("1 - Quadrato")
print("2 - Radice")
choice = input()
choice = int(choice)

x = input("Inserisci un numero: ")
x = int(x)

if choice == 1:
    result = quadrato(x)
    print(result)
elif choice == 2:
    result = radice(x)
    print(result)
else:
    print("Scelta non valida")
```

### Programma **Dado**

Lancia un dado a sei facce

```py
import random

faccia = random.randrange(1, 7)

print(faccia)
```


### Programma **Dadi**

Lancia un dado a sei facce 1000 volte e conta le occorrenze del 6

```py
import random

N = 1000

occorrenze_6 = 0

i = 0
while i < N:
    faccia = random.randrange(1, 7)

    if faccia == 6:
        occorrenze_6 += 1

    i += 1

print(occorrenze_6)
```
