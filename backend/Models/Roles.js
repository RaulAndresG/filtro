const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
  nombre_rol: {
    type: String,
    required: true,
    trim: true,
  },
  es_administrador: {
    type: Boolean,
    required: true,
  },
});

const Roles = mongoose.model('roles', rolSchema, 'roles');

module.exports = Roles;
