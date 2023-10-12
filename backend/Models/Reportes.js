const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
  indicador: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fecha_inicio: {
    type: Date,
    required: true,
  },
  fecha_terminacion: {
    type: Date,
    required: true,
  },
  responsable: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: String,
    required: true,
    trim: true,
  },
  comentarios: {
    type: String,
  },
});

const Reportes = mongoose.model('reportes', reporteSchema, 'reportes');

module.exports = Reportes;
