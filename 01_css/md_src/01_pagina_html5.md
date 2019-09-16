### Lezione N1

# Creare una pagina Html5

HTML sta per Hyper Text Markup Language. Non è un linguaggio di programmazione, ma un linguaggio di markup (di marcatura, inteso in senso tipografico). Ci consente di creare pagine Web mediante l'utilizzo di marcatori per gli elementi della pagina.

Per la marcatura si utilizzano i tag (letteralmente etichette). Per esempio, per creare un paragrafo (tag p) si scriverà:

```html
<p>Un paragrafo molto interessante</p>
```

## Struttura di una pagina Html5

Le pagine HTML sono racchiuse all'interno di un unico tag `html`.

```html
<html>
    <!-- qui il contenuto della pagina -->
</html>
```

All'interno di `html` si trovano due sezioni: `head` e `body`. In `head` trovano posto le informazioni relative al documento; in `body` andrà il documento stesso.

```html
<html>
    <head>
        <!-- informazioni riguardanti il documento -->
    </head>

    <body>
        <!-- qui il contenuto della pagina -->
    </body>
</html>
```

Infine, per dichiarare che stiamo utilizzando la versione 5 di Html (quella moderna), il tutto si fa precedere da una dichiarazione di tipo `doctype` (attenzione, non è un tag).

```html
<!doctype html>

<html>
    <head>
        <!-- informazioni riguardanti il documento -->
    </head>

    <body>
        <!-- qui il contenuto della pagina -->
    </body>
</html>
```

## La sezione `head`

Nella sezione `head` dobbiamo inserire alcune informazioni riguardanti il documento. Per il momento ci interessano il titolo della pagina, la codifica dei caratteri e la gestione della scalatura su schermi piccoli (smartphone).

### Il titolo della pagina

Il tag `title`, all'interno di `head`, permette di assegnare un titolo alla pagina. Attenzione: il contenuto di `title` non compare nella pagina Web, ma nella scheda del browser.

```html
...

    <head>
        <title>My first Web Page</title>
    </head>

...
```

### La codifica dei caratteri

È buona abitudine specificare il set di caratteri utilizzato nella pagina. Noi utilizzeremo sempre UTF-8 (Unicode).

```html
...

    <head>
        <meta charset="utf-8">
    </head>

...
```

### Gestione della scalatura su schermi piccoli

Quando una pagina Web viene visualizzata su schermo piccolo (es. smartphone), il contenuto della pagina viene scalato per poter essere visibile integralmente. Questo comporta che la dimensione dei caratteri viene ridotta al punto da rendere spesso illegibile la pagina. Per evitare questa scalatura bisogna informare il browser.

```html
...

    <head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>

...
```

### Il blocco `head` completo

```html
...

    <head>
        <meta charset="utf-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>My first Web Page</title>
    </head>

...
```

## Una semplice pagina completa

```html
<!doctype html>

<html>
    <head>
        <meta charset="utf-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>My first Web Page</title>
    </head>

    <body>
        <h1>Natours</h1>

        <p>Tours in the nature</p>
    </body>
</html>
```