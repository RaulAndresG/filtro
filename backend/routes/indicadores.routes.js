const express = require('express');
const router = express.Router();
const {
  obtenerIndicadores,
  postIndicador,
  deleteIndicador,
  putIndicador,
} = require('../Controllers/indicadores.controllers.js');

// Ruta para obtener todos los registros de Indicadores
router.get('/', obtenerIndicadores);

router.delete('/:id', deleteIndicador);

router.post('/', postIndicador);

router.put('/:id', putIndicador);

/**
 * @swagger
 * components:
 *  schemas:
 *    Indicador:
 *      type: object
 *      properties:
 *        indicador:
 *          type: string
 *          description: Nombre del indicador
 *        descripcion:
 *          type: string
 *          description: Descripción del indicador
 *        categoria:
 *          type: string
 *          description: Categoría del indicador
 *        fecha_inicio:
 *          type: string
 *          format: date
 *          description: Fecha de inicio del indicador
 *        fecha_terminacion:
 *          type: string
 *          format: date
 *          description: Fecha de terminación del indicador
 *        formula:
 *          type: string
 *          description: Fórmula del indicador
 *        frecuencia:
 *          type: string
 *          description: Frecuencia del indicador
 *        cumplimiento:
 *          type: number
 *          description: Valor de cumplimiento del indicador
 *        area:
 *          type: string
 *          description: Área del indicador
 *      required:
 *        - indicador
 *        - descripcion
 *        - categoria
 *        - fecha_inicio
 *        - fecha_terminacion
 *        - formula
 *        - frecuencia
 *        - cumplimiento
 *        - area
 *      example:
 *        indicador: "Nombre del Indicador"
 *        descripcion: "Descripción del Indicador"
 *        categoria: "Categoría del Indicador"
 *        fecha_inicio: "2023-10-12"
 *        fecha_terminacion: "2023-12-31"
 *        formula: "Ejemplo de Fórmula"
 *        frecuencia: "Mensual"
 *        cumplimiento: 95
 *        area: "Área del Indicador"
 */

/**
 * @swagger
 * /api/indicadores:
 *  get:
 *    summary: Obtener todos los indicadores
 *    tags:
 *      - Indicadores
 *    responses:
 *      200:
 *        description: Lista de todos los indicadores
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Indicador'
 *  post:
 *    summary: Crear un nuevo indicador
 *    tags:
 *      - Indicadores
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Indicador'
 *    responses:
 *      200:
 *        description: Nuevo indicador creado
 */

/**
 * @swagger
 * /api/indicadores/{id}:
 *  put:
 *    summary: Actualizar un indicador por ID
 *    tags:
 *      - Indicadores
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del indicador
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Indicador'
 *    responses:
 *      200:
 *        description: Indicador actualizado
 *      404:
 *        description: Indicador no encontrado
 *  delete:
 *    summary: Eliminar un indicador por ID
 *    tags:
 *      - Indicadores
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del indicador
 *    responses:
 *      200:
 *        description: Indicador eliminado
 *      404:
 *        description: Indicador no encontrado
 */


module.exports = router;
