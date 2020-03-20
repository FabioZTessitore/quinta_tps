# Libri

## Esercitazione guidata

### Disciplina: *TPS*
### Periodo: **20-28 Marzo 2020**

Si realizzi un'applicazione Web che gestisca un archivio di **libri** e rispettivi **autori**. Si ipotizzi che un libro possa essere scritto da più autori e che un autore possa aver scritto più libri.

Passi da eseguire:

1. Modello concettuale (ER)
   - Autori (id, nome, cognome)
   - Libri (id, titolo, id_autore)
2. Modello logico (relazionale)
   - Si costruiscano le tabelle con il database Sqlite3 (attenzione alla relazione molti a molti)
1. L'applicazione NodeJS di base
   - Gestione delle richieste alla pagina principale '/'
   - Gestione delle pagine non trovate
   - Invio di pagine statiche ponendo attenzione alla costruzione dei percorsi delle pagine stesse
1. Le pagine di amministrazione
   - Lettura dei dati degli autori dal database e visualizzazione mediante template
   - Inserimento di un nuovo autore
   - Modifica dei dati di un autore
   - Lettura dei dati dei libri dal database e visualizzazione mediante template
   - Inserimento di un nuovo libro
   - Modifica del titolo di un libro
   - Aggiunta di un autore
   - Rimozione di un autore

#### Soluzioni

Una possibile soluzione è riportata all'indirizzo https://github.com/fabioztessitore/lezioni-tps-quinte.git nella cartella 12_libri2