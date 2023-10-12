import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './createReportes.css'; 

export default function CreateReportes() {
  const navigate = useNavigate();
  const [indicador, setIndicador] = useState('Construcción de Parques Temáticos');
  const [categoria, setCategoria] = useState('Alta');
  const [descripcion, setDescripcion] = useState('Informe de riesgos actualizado');
  const [fecha_inicio, setFechaInicio] = useState('2024-04-01');
  const [fecha_terminacion, setFechaTerminacion] = useState('2025-12-31');
  const [responsable, setResponsable] = useState('Usuario1');
  const [estado, setEstado] = useState('En revisión');
  const [comentarios, setComentarios] = useState('Se requiere más información sobre el riesgo 3');
  const [error, setError] = useState('');

  const createData = () => {
    axios.post(`http://localhost:7777/api/Reportes`, {
      indicador,
      categoria,
      descripcion,
      fecha_inicio,
      fecha_terminacion,
      responsable,
      estado,
      comentarios,
    })
      .then(() => {
        navigate('/readReportes');
      })
      .catch((err) => {
        console.error('Error al crear el elemento:', err);
        setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div className="create-reportes">
      <h2>Crear Reporte</h2>
      <Form>
        <Form.Field>
          <label>Indicador</label>
          <input
            placeholder="Indicador"
            value={indicador}
            onChange={(e) => setIndicador(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Categoría</label>
          <input
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <input
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Fecha Inicio</label>
          <input
            type="date"
            value={fecha_inicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Fecha Terminación</label>
          <input
            type="date"
            value={fecha_terminacion}
            onChange={(e) => setFechaTerminacion(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Responsabilidad</label>
          <input
            placeholder="Responsabilidad"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Estado</label>
          <input
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Comentarios</label>
          <input
            placeholder="Comentarios"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </Form.Field>
        {error && <div className="ui error message">{error}</div>}
        <Button type="submit" onClick={createData} primary>
          Crear Reporte
        </Button>
      </Form>
    </div>
  );
}
