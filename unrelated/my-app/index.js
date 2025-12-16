console.log("Hello, node is warking.")

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Helo World');
});

app.listen(3000);