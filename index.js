import express from 'express';
const app = express();
const port = 8000;



const StaticRoute = express.static('static');

app.use('/', StaticRoute);

import {getDataById, getRandomData} from './data.js';

app.get('/api/id/:userId', (req, res) => {
    const userId = req.params.userId;

    const user = getDataById(userId);

    if (user) {
        res.json(user);
    } else {
        res.json({ message: 'No data for this ID' });
    }
});

const randomRoute = (req, res) => {
    const randomUser = getRandomData();
    console.log(randomUser);
    res.json(randomUser);
}

app.get('/api/random/', randomRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

