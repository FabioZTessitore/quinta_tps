### Lezione N4

# Esercitazione guidata

Regole generali:

* tutti gli elementi devono avere una classe;
* utilizzo della notazione BEM (block-element-modifier) per i nomi delle classi;

## Creazione di un componente senza elementi e senza modificatori

```html
<button class="btn">Click Me</button>
```

```css
.btn {
    background-color: orangered;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 5px 30px;
    font-size: 16px;
}
```

## Creazione di un componente senza elementi e con modificatori

```html
<button class="btn">Click Me</button>
<button class="btn btn--primary">Click Me</button>
<button class="btn btn--secondary">Click Me</button>
```

```css
.btn {
    background-color: orangered;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 5px 30px;
    font-size: 16px;
}

.btn--primary {
    color: white;
    background-color: #007bff;
}

.btn--secondary {
    color: white;
    background-color: #6c757d;
}
```

## Creazione di un componente con elementi

```html
<!-- componente 'photo' -->
<figure class="photo">
    <!-- una 'photo' e' costituita da un'immagine ('photo__img')
        e da una descrizione ('photo__caption') -->
    <img class="photo__img" src="images/cow.jpg">
    <figcaption class="photo__caption">Cow Says: "Moo"</figcaption>
</figure>
```

```css
.photo {
    margin: 100px;
    background-color: #000;
    width: 400px;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
}

.photo__img {
    margin-bottom: 20px;
}

.photo__caption {
    color: white;
    padding-bottom: 30px;
    letter-spacing: 9px;
    font-size: 22px;
}
```