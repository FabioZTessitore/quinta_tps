DROP TABLE IF EXISTS Todos;

CREATE TABLE Todos (
    id INTEGER NOT NULL PRIMARY KEY,
    text TEXT,
    done INTEGER DEFAULT 0
);

INSERT INTO Todos (text) VALUES ("Learning Node");
INSERT INTO Todos (text) VALUES ("Learning Express");
INSERT INTO Todos (text) VALUES ("Learning Socket.io");

.header on
.mode column
SELECT * FROM Todos;