const mongoose = require('mongoose');

const AyudaSchema = new mongoose.Schema({
  titulo: {
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
  instrucciones: [
    {
      type: String,
      required: true,
    },
  ],
});

const Ayuda = mongoose.model('ayuda', AyudaSchema, 'ayuda');

module.exports = Ayuda;
