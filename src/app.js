const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/car.routes');

const app = express();

app.use(cors());
app.use(express.json());


let {readFile} = require('fs');
app.get('/', (req, res) => {
    res.send('Welcome to the Compass Car API!');
});

app.use('/api', carRoutes);

module.exports = app;
