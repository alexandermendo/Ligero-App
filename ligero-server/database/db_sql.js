const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
})();

module.exports = sequelize;
