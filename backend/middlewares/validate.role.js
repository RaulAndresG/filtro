const isAdminRole = (req, res, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const { rol, nombre } = req.usuario;

    if (rol !== 'administrador') {
        return res.status(401).json({
            msg: `${nombre} no es administrador - No puede hacer esto`
        });
    }

    next();
}

module.exports = isAdminRole; // Utiliza 'module.exports'
