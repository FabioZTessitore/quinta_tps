.mode column
.header on

drop table if exists autori;
create table autori (
    id integer primary key,
    nome text,
    cognome text not null
);

insert into autori (nome, cognome) values ('Dante', 'Alighieri');
insert into autori (cognome) values ('Manzoni');

select * from autori;


drop table if exists libri;
create table libri (
    id integer primary key,
    titolo text not null,
    id_autore integer
);

insert into libri (titolo) values ('La Divina Commedia');
insert into libri (titolo, id_autore) values ('I Promessi Sposi', 2);

select * from libri;
