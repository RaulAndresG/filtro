const express = require("express");
const { response } = express;
const Usuario = require("../Models/Usuarios.js"); // Asegúrate de que la importación del modelo sea correcta
const bcryptjs = require("bcryptjs");
const generateJWT = require("../helpers/generate.JWT.js");

const login = async (req, res = response) => {
    const { nombre_usuario, contraseña } = req.body; // Cambia de email y password a nombre_usuario y contraseña
    try {
        const usuario = await Usuario.findOne({ nombre_usuario });

        if (!usuario) {
            return res.status(400).json({
                msg: "El nombre de usuario no existe en la base de datos"
            });
        }

        // Asumiendo que el campo se llama 'estado' en el modelo de usuario
        if (!usuario.estado) {
            return res.status(400).json({
                msg: "El usuario está inactivo"
            });
        }

        const validPassword = bcryptjs.compareSync(contraseña, usuario.contraseña);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Contraseña incorrecta"
            });
        }

        const token = await generateJWT(usuario.id);

        res.json({
            success: true,
            message: "Inicio de sesión exitoso",
            token
        });
    } catch (error) {
        console.log("Error en el servidor:", error);
        return res.status(500).json({
            msg: "Contacte al servicio técnico"
        });
    }
}

module.exports = login;
