### Lezione N3

# Identificare gli elementi

## Utilizzare id

Per identificare univocamente un elemento della pagina si può utilizzare l'attributo `id`.

```html
<!-- Solo un elemento nella pagina può avere id author! -->
<p id="author">Author Name</p>
```

Nel foglio di stile, per far riferimento all'elemento `author`, si utilizza il simbolo `#`.

```css
#author {
    color: navy;
}
```

## Utilizzare class

In una pagina sono generalmente presenti vari elementi appartenenti alla stessa categoria o classe. Ad ognuno di loro può essere assegnata la classe di appartenenza.

```html
<!-- raccolta di post -->
<div class="posts">
    <!-- un post -->
    <div class="post">Primo Post</div>

    <!-- un altro post -->
    <div class="post">Secondo Post</div>

    <!-- e ancora uno -->
    <div class="post">Terzo Post</div>
</div>
```

Nel foglio di stile, per far riferimento ad una particolare classe, si utilizza il simbolo `.` (punto).

```css
.posts {
    background-color: #eee;
    padding: 15px;
}

.post {
    background-color: #fff;
    margin-bottom: 15px;
    padding: 15px;
}
```