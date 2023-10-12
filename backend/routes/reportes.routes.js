const express = require('express');
const router = express.Router();
const {
  postReporte,
  obtenerReportes,
  putReporte,
  deleteReporte,
} = require('../Controllers/reportes.controllers.js');

router.post('/', postReporte);

router.get('/', obtenerReportes);

router.put('/:id', putReporte);

router.delete('/:id', deleteReporte);

/**
 * @swagger
 * components:
 *  schemas:
 *    Reporte:
 *      type: object
 *      properties:
 *        indicador:
 *          type: string
 *          description: Nombre del indicador
 *        categoria:
 *          type: string
 *          description: Categoría del indicador
 *        descripcion:
 *          type: string
 *          description: Descripción del indicador
 *        fecha_inicio:
 *          type: string
 *          format: date
 *          description: Fecha de inicio del indicador
 *        fecha_terminacion:
 *          type: string
 *          format: date
 *          description: Fecha de terminación del indicador
 *        responsable:
 *          type: string
 *          description: Responsable del indicador
 *        estado:
 *          type: string
 *          description: Estado del indicador
 *        comentarios:
 *          type: string
 *          description: Comentarios del indicador
 *      required:
 *        - indicador
 *        - categoria
 *        - descripcion
 *        - fecha_inicio
 *        - fecha_terminacion
 *        - responsable
 *        - estado
 *      example:
 *        indicador: "Nombre del Indicador"
 *        categoria: "Categoría del Indicador"
 *        descripcion: "Descripción del Indicador"
 *        fecha_inicio: "2023-10-12"
 *        fecha_terminacion: "2023-12-31"
 *        responsable: "Responsable del Indicador"
 *        estado: "En Progreso"
 *        comentarios: "Comentarios adicionales"
 */

/**
 * @swagger
 * /api/reportes:
 *  get:
 *    summary: Obtener todos los reportes
 *    tags:
 *      - Reportes
 *    responses:
 *      200:
 *        description: Lista de todos los reportes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reporte'
 *  post:
 *    summary: Crear un nuevo reporte
 *    tags:
 *      - Reportes
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reporte'
 *    responses:
 *      200:
 *        description: Nuevo reporte creado
 */

/**
 * @swagger
 * /api/reportes/{id}:
 *  put:
 *    summary: Actualizar un reporte por ID
 *    tags:
 *      - Reportes
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del reporte
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reporte'
 *    responses:
 *      200:
 *        description: Reporte actualizado
 *      404:
 *        description: Reporte no encontrado
 *  delete:
 *    summary: Eliminar un reporte por ID
 *    tags:
 *      - Reportes
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del reporte
 *    responses:
 *      200:
 *        description: Reporte eliminado
 *      404:
 *        description: Reporte no encontrado
 */


module.exports = router;
