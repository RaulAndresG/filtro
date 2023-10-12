const mongoose = require('mongoose');

const indicadorSchema = new mongoose.Schema({
  indicador: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  fecha_inicio: {
    type: Date,
    required: true,
  },
  fecha_terminacion: {
    type: Date,
    required: true,
  },
  formula: {
    type: String,
    required: true,
  },
  frecuencia: {
    type: String,
    required: true,
    trim: true,
  },
  cumplimiento: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
    trim: true,
  },
});

const Indicadores = mongoose.model('indicadores', indicadorSchema, 'indicadores');

module.exports = Indicadores;
