const { Router } = require('express');
const login = require("../Controllers/usuariosController.js");
const validateDocuments = require("../middlewares/validate.documents.js");
const { check } = require('express-validator');

const router = Router();

router.post("/login", [
    check('nombre_usuario', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
], login);

module.exports = router;
