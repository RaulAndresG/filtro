const Indicadores = require('../Models/Indicadores.js');

// Crear nuevos indicadores
const postIndicador = async (req, res) => {
  try {
    const {
      indicador,
      descripcion,
      categoria,
      fecha_inicio,
      fecha_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area,
    } = req.body;

    const nuevoIndicador = new Indicadores({
      indicador,
      descripcion,
      categoria,
      fecha_inicio,
      fecha_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area,
    });

    await nuevoIndicador.save();

    res.json({
      message: "Se postearon los indicadores",
      indicador: nuevoIndicador,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Actualizar indicadores existentes
const putIndicador = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  try {
    const indicador = await Indicadores.findByIdAndUpdate(id, resto, { new: true });
    if (!indicador) {
      return res.status(404).json({ message: 'Indicador no encontrado' });
    }
    res.json({
      msg: "Indicador actualizado exitosamente",
      indicador,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Eliminar indicadores existentes
const deleteIndicador = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Indicadores.findByIdAndRemove(id);
    if (!remove) {
      return res.status(404).json({ message: 'Indicador no encontrado' });
    }
    res.json({ message: 'Indicador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Obtener todos los indicadores
const obtenerIndicadores = async (req, res) => {
  try {
    const indicadores = await Indicadores.find().limit(100);
    res.json(indicadores);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { obtenerIndicadores, deleteIndicador, postIndicador, putIndicador };
