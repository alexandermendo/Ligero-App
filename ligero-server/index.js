const express = require('express');
const cors = require('cors');
const createError = require('http-errors'); // Import the createError function
const sequelize = require('./database/db_sql'); // Import the Sequelize connection
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use(function (req, res, next) { next(createError(404)); }); // Use createError here
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3007;

try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
} catch (error) {
  console.error(`Error starting the server: ${error.message}`);
}

module.exports = app;
