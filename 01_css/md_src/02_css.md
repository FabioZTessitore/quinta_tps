### Lezione N2

# Aggiungere un foglio di stile

## Cose da non fare

Non utilizzare tag e attributi che modificano l'apparenza degli elementi. Si tratta di retaggi storici dell'HTML che vanno eliminati.

```html
<!-- NON COSÌ -->
<body bgcolor="red">
    ...
</body>
```

```html
<!-- NEANCHE COSÌ -->
<center><h1>...</h1></center>
```

## Utilizzare gli stili in linea

Per modificare l'apparenza degli elementi si utilizzano i fogli di stile (CSS, Cascading Style Sheet).
È possibile, ma non consigliabile, modificare lo stile di un elemento in linea, cioè direttamente sul tag mediante l'*attributo* `style`.

```html
<p style="color: red">Red Paragraph</p>
```

## Utilizzare il tag style

L'utilizzo del *tag* `style` all'interno del blocco `head` permette di separare la struttura del documento (HTML) dallo stile.

```html
<head>
    <style>
    /* tutti i paragrafi sono rossi */
    p {
        color: red;
    }
    </style>
</head>
```

## Utilizzare un foglio di stile esterno

Utilizzando un foglio di stile esterno possiamo separare fisicamente, in file distinti, l'HTML e il CSS.

```html
<!-- index.html -->

<head>
    <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */

p {
    color: red;
}
```