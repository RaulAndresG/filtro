const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre_usuario: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roles', 
    required: true,
  },
  imagen: {
    type: String,
  },
  contraseña: {
    type: String,
    required: true,
  },
});

const Usuario = mongoose.model('usuarios', usuarioSchema, 'usuarios');

module.exports = Usuario;
