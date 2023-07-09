import express from 'express';
import api from './cimet-api.js';

const app = express();
const port = 5000;

/**
 * Middleware to remove CORS error when frontend calls the API
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

/**
 * Main GET API for frontend app
 */
app.get('/', async (req, res) => {
    const response = await api.getAPIData();
    res.send(response);
});

/**
 * Starting the NodeJS server
 */
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});