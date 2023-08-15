const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db_sql'); // Import the Sequelize connection

// Define a User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  correo: {
    type: DataTypes.STRING,
  },
  passwd: {
    type: DataTypes.STRING,
  },
  id_rol: {
    type: DataTypes.INTEGER,
  },
  est_usu: {
    type: DataTypes.BOOLEAN,
  }
}, {
  tableName: 'usuarios' // Especifica aquí el nombre correcto de la tabla en tu base de datos
});


/**
 * @name getUsers
 * @description Obtiene la lista de usuarios desde la base de datos.
 * @param {Request} req - Objeto de solicitud HTTP.
 * @param {Response} res - Objeto de respuesta HTTP.
 * @param {NextFunction} next - Función para pasar al siguiente middleware.
 */
router.get('/getUsers', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
