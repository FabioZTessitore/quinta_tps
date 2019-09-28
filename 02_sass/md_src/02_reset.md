### Lezione N7

# Reset

I browser applicano delle impostazioni di default agli elementi HTML. Per evitare che le nostre pagine appaiano
diversamente su browser diversi e che parametri non scelti da noi possano modificare
la visualizzazione degli elementi, possiamo applicare un reset.

Innanzitutto azzeriamo tutti gli spazi (`padding` e `margin`) per tutti gli elementi
(anche quelli definiti da `before` e `after`)

```css
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
}
```

Impostiamo quindi la dimensione del testo.

```css
html {
    /* La dimensione del testo viene automaticamente
    ereditata da tutti gli elementi (perche' si trovano
    all'interno del tag html)
    Dopo questa impostazione avremo 1rem = 10px */
    font-size: 10px;
}
```

Impostiamo il modello di box ad un valore piu' conveniente.

```css
* {
    /* Normalmente il box-sizing non e' ereditato.
    Noi vogliamo che lo sia! */
    box-sizing: inherit;
}

body {
    /* border-box: considera anche margin e padding nella width */
    box-sizing: border-box;
}
```

Infine impostiamo alcuni parametri del testo.

```css
body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #333;
}
```

## Esempio di reset completo

```css
*,
*::before,
*::after {
    margin: 0;
    padding: 0;

    /* Normalmente il box-sizing non e' ereditato.
    Noi vogliamo che lo sia! */
    box-sizing: inherit;
}

html {
    /* La dimensione del testo viene automaticamente
    ereditata da tutti gli elementi (perche' si trovano
    all'interno del tag html).
    Dopo questa impostazione avremo 1rem = 10px */
    font-size: 10px;
}

body {
    /* border-box: considera anche margin e padding nella width */
    box-sizing: border-box;

    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #333;
}
```