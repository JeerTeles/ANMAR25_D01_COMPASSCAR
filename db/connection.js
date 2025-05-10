const Sequelize = require('sequelize');

const sequelize = new Sequelize('compasscar', 'root', 'SqlAcer2025', {
  host: 'localhost', // ou o endereço do seu servidor MySQL
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;