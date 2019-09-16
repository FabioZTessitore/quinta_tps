### Lezione N0

# Git e GitHub

## GitHub.com

`GitHub` è un social network per programmatori. Attraverso i suoi servizi, tra le altre cose, è possibile pubblicare codice, condividerlo e collaborare con altri sviluppatori.

## git

`git` è un sistema per la gestione delle versioni. Mediante questo strumento è possibile tenere traccia delle modifiche apportate ad un codice, crearne versioni diverse, integrare funzionalità, collaborare, ecc. Noi lo utilizzeremo soprattutto per caricare i nostri codici su `GitHub`.

### Passo 0: Configurazione iniziale

Per poter utilizzare `git` è necessaria una configurazione iniziale.

```bash
$ git config --global user.name "NOME UTENTE"
$ git config --global user.email "utente@email"
```

### Passo 1: Creazione di una repository

Una *repository* è una directory ospitata sui server di `GitHub`.

Le repository si creano mediante l'interfaccia Web del servizio.

**Nota**: All'atto della creazione di una nuova repository, spuntare l'opzione
"Initialize this repository with a README". In questo modo verrà creato un
file README.md e sarà possibile proseguire con i passi successivi.

### Passo 2: Clonare una repository

Per poter effettuare modifiche al codice dobbiamo clonare la repository remota
in una cartella locale.

```bash
$ git clone https://github.com/NOMEUTENTE/NOMEREPO.git
```

**Nota**: L'indirizzo della repository si può ottenere anche dal sito.

### Passo 3: Modificare i file

Ora possiamo modificare l'unico file esistente (`README.md`) oppure aggiungere
altri file alla nostra cartella locale.

### Passo 4: Selezionare i file da caricare

`git` funziona un po' come una macchina fotografica. Prima di scattare la foto
dobbiamo decidere chi mettere in posa.

Se, per esempio, abbiamo modificato il file `README.md`:

```bash
$ git add README.md
```

### Passo 5: Scattare la foto

Una volta selezionati i file da fotografare, scattiamo la foto:

```bash
$ git commit -m "descrizione modifica apportata"
```

### Passo 6: Caricamento dei file su GitHub

```bash
git push origin master
```