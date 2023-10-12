const Ayuda = require('../Models/Ayuda.js'); // Cambia el nombre del modelo a 'Ayuda'

const postAyuda = async (req, res) => {
    try {
        const { titulo, descripcion, categoria, instrucciones } = req.body;
        const ayudaNueva = new Ayuda({ titulo, descripcion, categoria, instrucciones });
        await ayudaNueva.save();
        res.json({
            "message": "Se publicó la ayuda",
            ayuda: ayudaNueva
        });
    } catch (error) {
        res.status(500).json({ error: "Error al publicar la ayuda" });
    }
}

const putAyuda = async (req, res) => {
    const { id } = req.params;

    try {
        const ayuda = await Ayuda.findByIdAndUpdate(id, req.body, { new: true });

        if (!ayuda) {
            return res.status(404).json({ message: "Ayuda no encontrada" });
        }

        res.json({
            msg: "Ayuda actualizada exitosamente",
            ayuda
        });
    } catch (error) {
        res.status(500).json({ error: "Error en putAyuda" });
    }
}

const deleteAyuda = async (req, res) => {
    const { id } = req.params;
    try {
        const remove = await Ayuda.findByIdAndRemove(id);
        if (!remove) {
            return res.status(404).json({ message: "No se encontró la ayuda" });
        }
        res.json({ message: "Ayuda eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Fallo al eliminar la ayuda" });
    }
}

const obtenerAyuda = async (req, res) => {
    try {
        const ayudas = await Ayuda.find().limit(1000);
        res.json(ayudas);
    } catch (error) {
        res.status(500).json("Error al obtener la ayuda");
    }
}

module.exports = { obtenerAyuda, deleteAyuda, postAyuda, putAyuda };
