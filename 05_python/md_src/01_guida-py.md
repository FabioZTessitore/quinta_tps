# Breve guida al linguaggio Python (v. 3)

### Output di una stringa

```py
print("Hello World")
```

### Creazione e uso di variabili

```py
# le variabili non vanno dichiarate
nome = 'Pippo'
```

### Input di una stringa

```py
nome = input('Come ti chiami? ')
```

### Input di un intero

```py
# input() restituisce sempre una stringa
# ma possiamo convertirla con un cast
voto = input('Inserisci voto: ')
voto = int(voto)
```

### La libreria matematica

Per utilizzare le funzioni della libreria matematica bisogna importarla
mediante parola chiave `import`.

```py
import math

rad2 = math.sqrt(2)
```

### Esecuzione condizionale

```py
# *) la condizione non va inserita tra parentesi
# *) I blocchi di codice sono individuati
#     mediante indentazione
voto = 30

if voto < 17:
  print("Bocciato")
elif voto < 25:
  print("Potevi fare di meglio")
else:
  print("Congratulazioni")
```

### Ciclo while

```py
i = 0

while i < 10:
  print i
  i += 1
```

### Le tuple

Una tupla è un raggruppamento **immutabile** di variabili o valori,
anche di tipi diversi, delimitati da parentesi tonde:

```py
nome = 'Pippo'
cognome = 'De Pippis'
indirizzo = 'via Dei Paperi'

# una tupla raggruppa in un unico valore
record = (nome, cognome, indirizzo)
```

**Nota**: le tuple possono essere utilizzate per raggruppare
valori da passare ad una funzione (es. `coordinate = (2, 5)`)
oppure per fare in modo che una funzione restituisca più valori
contemporaneamente.

Per accedere ai valori presenti in una tupla si può utilizzare
la classica notazione dei vettori:

```py
indirizzo = record[2]
```

oppure si può esplodere nei suoi componenti:

```py
nome, cognome, indirizzo = record
```

Non è possibile modificare il valore di uno degli elementi
di una tupla:

```py
record[1] = 'De Paperis'    # ERRORE, le tuple sono immutabili
```

ma è possibile costruirne una nuova a partire da una data:

```py
nuovo_record = record[0] + ('De Paperis', ) + record[2]
```

**Nota**: `('De Paperis', )` è una tupla costituita da un solo elemento

### Le liste

Le liste sono raggruppamenti di valori di qualsiasi tipo racchiusi tra
parentesi quadre. A differenza delle tuple sono modificabili.

```py
voti = [6, 6.5, '7-']

# aggiunge un elemento ad una lista
voti.append(9)

# elimina un elemento da una lista
del voti[1]

# modifica un elemento di una lista
voti[0] = 4
```

### Il ciclo for

Il ciclo for è concepito per iterare sugli elementi di una lista e non su un
indice.

```py
voti = [3, 7, 4, 2]

for voto in voti:
  print voto
```

Può essere utilizzato per contare in congiunzione alla funzione `range()`:

```py
for i in range(5):
  print i

# stampa
# 0
# 1
# 2
# 3
# 4
```

**Nota**: `range()` accetta anche altri parametri: il valore di partenza,
il valore di arrivo (escluso) e il passo. Es. i numeri dispari
compresi tra 13 e 30: `range(13, 30, 2)`.

### Generazione di numeri pseudocasuali

Il modulo `random` offre diverse funzioni per la generazione di numeri pseudocasuali
o per l'estrazione di elementi da un insieme dato.

```py
import random

# estrae un intero compreso tra 7 e 17 (escluso)
num = random.randrange(7, 17)

# estrae un elemento tra quelli presenti nella lista
seme = random.choice(['cuori', 'quadri', 'fiori', 'picche'])
```

### La definizione di funzioni

Per definire una funzione si usa la parola chiave `def`. Non esiste il
prototipo di funzione.

```py
# funzione che somma due interi, oppure due float,
# oppure che concatena due stringhe, oppure due tuple
# oppure due liste
def somma(a, b):
  return a+b
```

### La creazione di classi

```py
class Articolo:
  # i membri delle classi sono tutti public

  # non potendo definire le variabili
  # non esiste una lista di variabili membro

  # il costruttore ha un nome speciale __init__
  def __init__(self, titolo, testo):
    # qui possiamo definire le variabili membro,
    # che saranno componenti di self
    self.titolo = titolo
    self.testo = testo


  # altre funzioni membro

  def getTitolo(self):
    return self.titolo

  def getTesto(self):
    return self.testo
```

Un articolo si potrà creare con:

```py
articolo = Articolo('Titolo', 'Testo')
```

Tutte le funzioni membro accettano come primo parametro un riferimento
esplicito all'oggetto che si sta creando (equivalente al `this` del C++).
Questo perché, quando si crea un Articolo, oppure si richiama una funzione
membro, dietro le quinte viene effettuata un'operazione di chiamata di
funzione che il Python vuole mantenere esplicita.

```py
# scriviamo
articolo = Articolo('Titolo', 'Testo')

# ma dietro le quinte avviene
# una chiamata ad Articolo.__init__()
# Articolo.__init__(articolo, 'Titolo', 'Testo')
```
