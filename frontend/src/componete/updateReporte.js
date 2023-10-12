import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router";

export default function Update() {
  let history = useNavigate();
  const [_id, setID] = useState(null);
  const [indicador, setFirstName] = useState('');
  const [categoria, setLastName] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha_inicio, setFechaInicio] = useState('');
  const [fecha_terminacion, setFechaTerminacion] = useState('');
  const [formula, setFormula] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [cumplimiento, setCumplimiento] = useState('');
  const [area, setArea] = useState('');


  useEffect(() => {
    setID(localStorage.getItem('_id'));
    setFirstName(localStorage.getItem('nombre_usuario'));
    setLastName(localStorage.getItem('rol'));
    setDescripcion(localStorage.getItem('imagen'));
    setFechaInicio(localStorage.getItem('contraseña'));
    setFechaTerminacion(localStorage.getItem('fecha_terminacion'));
    setFormula(localStorage.getItem('formula'));
    setFrecuencia(localStorage.getItem('frecuencia'));
    setCumplimiento(localStorage.getItem('cumplimiento'));
    setArea(localStorage.getItem('area'));

  }, []);
  const updateAPIData = () => {
    axios.put(`http://localhost:7777/api/Reportes/${_id}`, {
      indicador,
      categoria,
      descripcion,
      fecha_inicio,
      fecha_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area,
    }).then(() => {
      history.push('/readReportes');
    });
  }
  

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Indicador</label>
          <input
            placeholder="Indicador"
            value={indicador}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Categoria</label>
          <input
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Fecha Inicio</label>
          <input
            placeholder="fecha_inicio"
            value={fecha_inicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Fecha Terminacion</label>
          <input
            placeholder="fecha_terminacion"
            value={fecha_terminacion}
            onChange={(e) => setFechaTerminacion(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Formula</label>
          <input
            placeholder=" Formula"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Frecuencia</label>
          <input
            placeholder="Frecuencia"
            value={frecuencia}
            onChange={(e) => setFrecuencia(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Cumpliento</label>
          <input
            placeholder="Cumplimiento"
            value={cumplimiento}
            onChange={(e) => setCumplimiento(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Area</label>
          <input
            placeholder="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          ></input>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
