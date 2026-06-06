const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: 'Backend Express.js działa i jest gotowy na przyjęcie rezerwacji!'});
});

app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});