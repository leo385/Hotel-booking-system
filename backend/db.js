const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./hotel.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
        )`);


    const insertUser = `INSERT OR IGNORE INTO users (email, password) VALUES ('leonard@stayeasy.pl', '1234')`;
    db.run(insertUser);

    console.log("Baza danych i testowy użytkownik są gotowi!");
});

module.exports = db;