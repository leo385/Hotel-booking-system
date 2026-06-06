const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: 'Backend Express.js działa i jest gotowy na przyjęcie rezerwacji!'});
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    /*  Find user email in database */
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if(err) {
            return res.status(500).json({ error: "Błąd serwera bazy danych." });
        }

        if(!user || user.password !== password) {
            return res.status(401).json({ error: "Błędna nazwa uzytkownika lub hasło."});
        }

        if(user.password === password) {
            return res.json({ message: "Zalogowano pomyślnie!", email: user.email });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});