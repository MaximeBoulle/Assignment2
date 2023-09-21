const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

app.get('/api', (req, res) => {
    const data = req.query.data;
    const json = { data: data };
    res.json(json);
});

app.listen(port, () => {
    console.log(`Express server is running in the ${port} port`);
});
