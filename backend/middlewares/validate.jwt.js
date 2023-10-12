const { response, request } = require("express"); // Utiliza 'require'
const jsonwebtoken = require("jsonwebtoken"); // Utiliza 'require'
const Usuarios = require("../Models/Usuarios.js"); // Utiliza 'require'

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-api-token-jwt');
    
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jsonwebtoken.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

        const usuario = await Usuarios.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB'
            });
        }

        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            });
        }

        req.usuario = usuario;
        console.log("req usuario en validate", req.usuario);
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

module.exports = validateJWT; // Utiliza 'module.exports'
