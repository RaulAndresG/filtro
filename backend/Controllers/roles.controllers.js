const Roles = require('../Models/Roles.js'); // Cambia el nombre del modelo a 'Rol'

// Crear nuevos roles
const postRol = async (req, res) => {
  try {
    const { nombre_rol, es_administrador } = req.body;

    const nuevoRol = new Roles({ nombre_rol, es_administrador });
    await nuevoRol.save();

    res.json({
      message: 'Rol creado exitosamente',
      rol: nuevoRol,
    });
  } catch (error) {
    console.error('Error al crear el rol:', error);
    res.status(500).json({ error: 'Error al crear el rol' });
  }
};

// Actualizar roles existentes
const putRol = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  try {
    const rol = await Roles.findByIdAndUpdate(id, resto, { new: true });

    if (!rol) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }

    res.json({
      message: 'Rol actualizado correctamente',
      rol,
    });
  } catch (error) {
    console.error('Error al actualizar el rol:', error);
    res.status(500).json({ error: 'Error al actualizar el rol' });
  }
};

// Eliminar roles existentes
const deleteRol = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Roles.findByIdAndRemove(id);

    if (!remove) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }

    res.json({ message: 'Rol eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el rol:', error);
    res.status(500).json({ error: 'Error al eliminar el rol' });
  }
};

// Obtener todos los roles
const obtenerRoles = async (req, res) => {
  try {
    const roles = await Roles.find().limit(100);
    res.json(roles);
  } catch (error) {
    console.error('Error al obtener los roles:', error);
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

module.exports = { obtenerRoles, postRol, deleteRol, putRol };
