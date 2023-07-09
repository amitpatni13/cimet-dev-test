import express from 'express';
import api from './cimet-api.js';

const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.get('/', async (req, res) => {
    const response = await api.getAPIData();
    res.send(response);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});