const express = require('express');
const {check} = require('express-validator')
const router = express.Router();
const {
  obtenerUsuarios,
  postUsuario,
  deleteUsuario,
  putUsuario,
} = require('../Controllers/usuarios.controllers.js');

router.get('/', obtenerUsuarios);

router.post('/', [
  check('nombre', 'nombre no es valido').not().isEmpty(),  
  check('contraseña','La contraseña debe tener minimo 6 letras').isLength({min:6})
],postUsuario);

router.put('/:id', putUsuario);

router.delete('/:id', deleteUsuario);

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuario:
 *      type: object
 *      properties:
 *        nombre_usuario:
 *          type: string
 *          description: Nombre del usuario
 *        rol:
 *          type: string
 *          description: ID del rol al que pertenece el usuario
 *        imagen:
 *          type: string
 *          description: URL de la imagen del usuario (opcional)
 *        contraseña:
 *          type: string
 *          description: Contraseña del usuario
 *      required:
 *        - nombre_usuario
 *        - rol
 *        - contraseña
 *      example:
 *        nombre_usuario: "Nombre del Usuario"
 *        rol: "ID_del_Rol"
 *        imagen: "URL_de_la_Imagen"
 *        contraseña: "ContraseñaDelUsuario"
 */

/**
 * @swagger
 * /api/usuarios:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags:
 *      - Usuarios
 *    responses:
 *      200:
 *        description: Lista de todos los usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Usuario'
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags:
 *      - Usuarios
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: Nuevo usuario creado
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *  put:
 *    summary: Actualizar un usuario por ID
 *    tags:
 *      - Usuarios
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: Usuario actualizado
 *      404:
 *        description: Usuario no encontrado
 *  delete:
 *    summary: Eliminar un usuario por ID
 *    tags:
 *      - Usuarios
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del usuario
 *    responses:
 *      200:
 *        description: Usuario eliminado
 *      404:
 *        description: Usuario no encontrado
 */


module.exports = router;
