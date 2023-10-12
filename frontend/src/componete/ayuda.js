import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import './ayuda.css'; // Importa el archivo CSS

export default function ReadAyudaCards() {
  const [ayudaData, setAyudaData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:7777/api/Ayuda').then((response) => {
      setAyudaData(response.data);
    });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:7777/api/Ayuda/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento de ayuda:', error);
      });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card-container">
      <h1 className="titulo">Ayuda</h1>
      {ayudaData.map((data) => (
        <Card fluid className="card" key={data._id}>
          <Card.Content className="card-content">
            <Card.Header className="card-header">{data.titulo}</Card.Header>
            <Card.Description className="card-description">{data.descripcion}</Card.Description>
            <Card.Meta>Fecha Inicio: {formatDate(data.fecha_inicio)}</Card.Meta>
            <Card.Meta>Fecha Terminación: {formatDate(data.fecha_terminacion)}</Card.Meta>
            <Card.Meta>Empresa: {data.responsable}</Card.Meta>
            <Card.Meta>Estado: {data.estado}</Card.Meta>
            <Card.Meta>Comentarios: {data.comentarios}</Card.Meta>
          </Card.Content>
          <Card.Content className="card-extra">
            <Button className="delete-button" onClick={() => onDelete(data._id)}>
              Eliminar
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
