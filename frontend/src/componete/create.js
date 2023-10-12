import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import './create.css'
import { useNavigate } from "react-router-dom";
import Pagina from './pagina'

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    indicador: '',
    descripcion: '',
    categoria: '',
    fecha_inicio: '',
    fecha_terminacion: '',
    formula: '',
    frecuencia: '',
    cumplimiento: 0,
    area: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postData = async () => {
    try {
      const response = await axios.post('http://localhost:7777/api/Indicadores', formData);
      console.log(response.data);
      navigate('/pagina'); 
    } catch (error) {
      console.error('Error al crear el elemento:', error);
      setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
    }
  };

 // Tu componente React
// Tu componente React
return (
  <div className="form-container">
    <Form className="create-form">
      <Form.Field className="form-field">
        <label className="form-label">Indicador</label>
        <input className="form-input" name="indicador" placeholder="Nombre" value={formData.indicador} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Descripción</label>
        <input className="form-input" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Categoría</label>
        <input className="form-input" name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Fecha de Inicio</label>
        <input className="form-input" name="fecha_inicio" type="date" value={formData.fecha_inicio} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Fecha de Terminación</label>
        <input className="form-input" name="fecha_terminacion" type="date" value={formData.fecha_terminacion} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Formula</label>
        <input className="form-input" name="formula" placeholder="Formula" value={formData.formula} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Frecuencia</label>
        <input className="form-input" name="frecuencia" placeholder="Frecuencia" value={formData.frecuencia} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Cumplimiento</label>
        <input className="form-input" name="cumplimiento" type="number" placeholder="Cumplimiento" value={formData.cumplimiento} onChange={handleInputChange} />
      </Form.Field>
      <Form.Field className="form-field">
        <label className="form-label">Área</label>
        <input className="form-input" name="area" placeholder="Área" value={formData.area} onChange={handleInputChange} />
      </Form.Field>
      <Button className="form-button" type="submit" onClick={postData}>Crear</Button>
    </Form>
    {error && <p className="error-message">{error}</p>}
  </div>
);

}