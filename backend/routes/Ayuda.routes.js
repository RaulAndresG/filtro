const express = require('express');
const { check } = require('express-validator');
const { validateDocuments} = require('../middlewares/validate.documents.js');
const router = express.Router();
const {
  obtenerAyuda,
  postAyuda,
  deleteAyuda,
  putAyuda,
} = require('../Controllers/ayuda.controllers.js');

// Ruta para obtener todos los registros de Ayuda
router.get('/', /* [
  check('id', 'No es un id de Mongo válido').isMongoId(),
  check('id').custom(),
  validateDocuments,
],*/obtenerAyuda );

router.delete('/:id', deleteAyuda);

router.post('/', postAyuda);

router.put('/:id', putAyuda);

/**
 * @swagger
 * components:
 *  schemas:
 *    Ayuda:
 *      type: object
 *      properties:
 *        titulo:
 *          type: string
 *          description: Título de la ayuda
 *        descripcion:
 *          type: string
 *          description: Descripción de la ayuda
 *        categoria:
 *          type: string
 *          description: Categoría de la ayuda
 *        instrucciones:
 *          type: array
 *          description: Lista de instrucciones
 *          items:
 *            type: string
 *      required:
 *        - titulo
 *        - descripcion
 *        - categoria
 *        - instrucciones
 *      example:
 *        titulo: "Título de la Ayuda"
 *        descripcion: "Descripción de la Ayuda"
 *        categoria: "Categoría de la Ayuda"
 *        instrucciones:
 *          - "Instrucción 1"
 *          - "Instrucción 2"
 */

/**
 * @swagger
 * /api/ayuda:
 *  get:
 *    summary: Obtener todas las ayudas
 *    tags:
 *      - Ayuda
 *    responses:
 *      200:
 *        description: Lista de todas las ayudas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Ayuda'
 *  post:
 *    summary: Crear una nueva ayuda
 *    tags:
 *      - Ayuda
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ayuda'
 *    responses:
 *      200:
 *        description: Nueva ayuda creada
 */

/**
 * @swagger
 * /api/ayuda/{id}:
 *  put:
 *    summary: Actualizar una ayuda por ID
 *    tags:
 *      - Ayuda
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID de la ayuda
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ayuda'
 *    responses:
 *      200:
 *        description: Ayuda actualizada
 *      404:
 *        description: Ayuda no encontrada
 *  delete:
 *    summary: Eliminar una ayuda por ID
 *    tags:
 *      - Ayuda
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID de la ayuda
 *    responses:
 *      200:
 *        description: Ayuda eliminada
 *      404:
 *        description: Ayuda no encontrada
 */

module.exports = router;

//ruta
