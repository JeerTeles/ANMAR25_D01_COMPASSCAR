const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/car.routes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', carRoutes);

module.exports = app;