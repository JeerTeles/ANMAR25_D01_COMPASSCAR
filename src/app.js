const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/car.routes');

const app = express();


app.use(cors());
app.use(express.json());

//Rota para a raiz da aplicação
app.get('/', (req, res) => {
    res.send('Bem-vindo à API Compass Car!');
});

app.use('/api', carRoutes);

module.exports = app;