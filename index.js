const express = require('express');
const app = express();
const port = 3000;

const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Leanne@gmail.com"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Ervin@gmail.com"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Samantha@gmail.com"
    }
];

const getDataById = (id) => data.find(user => user.id === parseInt(id));

const StaticRoute = express.static('static');

app.use('/', StaticRoute);

app.get('/api/id/:userId', (req, res) => {
    const userId = req.params.userId;

    const user = getDataById(userId);

    if (user) {
        res.json(user);
    } else {
        res.json({ message: 'No data for this ID' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

