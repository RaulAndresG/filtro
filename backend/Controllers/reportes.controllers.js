const Reportes = require('../Models/Reportes.js');

// Crear nuevos reportes
const postReporte = async (req, res) => {
  try {
    const {
      indicador,
      categoria,
      descripcion,
      fecha_inicio,
      fecha_terminacion,
      responsable,
      estado,
      comentarios,
    } = req.body;

    const nuevoReporte = new Reportes({
      indicador,
      categoria,
      descripcion,
      fecha_inicio,
      fecha_terminacion,
      responsable,
      estado,
      comentarios,
    });

    await nuevoReporte.save();

    res.json({
      message: 'Reporte registrado con éxito',
      reporte: nuevoReporte,
    });
  } catch (error) {
    console.error('Error al crear el reporte:', error);
    res.status(500).json({ error: 'Error al crear el reporte' });
  }
};

const obtenerReportes = async (req, res) => {
  try {
    const reportes = await Reportes.find().limit(100);
    res.json(reportes);
  } catch (error) {
    console.error('Error al obtener los reportes:', error);
    res.status(500).json({ error: 'Error al obtener los reportes' });
  }
};

const putReporte = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      indicador,
      categoria,
      descripcion,
      fecha_inicio,
      fecha_terminacion,
      responsable,
      estado,
      comentarios,
    } = req.body;

    const reporte = await Reportes.findByIdAndUpdate(
      id,
      {
        indicador,
        categoria,
        descripcion,
        fecha_inicio,
        fecha_terminacion,
        responsable,
        estado,
        comentarios,
      },
      { new: true }
    );

    if (!reporte) {
      return res.status(404).json({ message: 'Reporte no encontrado' });
    }

    res.json({
      message: 'Reporte actualizado correctamente',
      reporte,
    });
  } catch (error) {
    console.error('Error al actualizar el reporte:', error);
    res.status(500).json({ error: 'Error al actualizar el reporte' });
  }
};

const deleteReporte = async (req, res) => {
  const { id } = req.params;

  try {
    const reporte = await Reportes.findByIdAndRemove(id);

    if (!reporte) {
      return res.status(404).json({ message: 'Reporte no encontrado' });
    }

    res.json({ message: 'Reporte eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el reporte:', error);
    res.status(500).json({ error: 'Error al eliminar el reporte' });
  }
};

module.exports = { postReporte, obtenerReportes, putReporte, deleteReporte };
