const express = require('express');
const router = express.Router();
const {
  obtenerRoles,
  postRol,
  deleteRol,
  putRol,
} = require('../Controllers/roles.controllers.js');

router.get('/', obtenerRoles);

router.post('/', postRol);

router.put('/:id', putRol);

router.delete('/:id', deleteRol);

/**
 * @swagger
 * components:
 *  schemas:
 *    Rol:
 *      type: object
 *      properties:
 *        nombre_rol:
 *          type: string
 *          description: Nombre del rol
 *        es_administrador:
 *          type: boolean
 *          description: Indica si el rol es de administrador
 *      required:
 *        - nombre_rol
 *        - es_administrador
 *      example:
 *        nombre_rol: "Nombre del Rol"
 *        es_administrador: true
 */

/**
 * @swagger
 * /api/roles:
 *  get:
 *    summary: Obtener todos los roles
 *    tags:
 *      - Roles
 *    responses:
 *      200:
 *        description: Lista de todos los roles
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rol'
 *  post:
 *    summary: Crear un nuevo rol
 *    tags:
 *      - Roles
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Rol'
 *    responses:
 *      200:
 *        description: Nuevo rol creado
 */

/**
 * @swagger
 * /api/roles/{id}:
 *  put:
 *    summary: Actualizar un rol por ID
 *    tags:
 *      - Roles
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del rol
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Rol'
 *    responses:
 *      200:
 *        description: Rol actualizado
 *      404:
 *        description: Rol no encontrado
 *  delete:
 *    summary: Eliminar un rol por ID
 *    tags:
 *      - Roles
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del rol
 *    responses:
 *      200:
 *        description: Rol eliminado
 *      404:
 *        description: Rol no encontrado
 */


module.exports = router;
