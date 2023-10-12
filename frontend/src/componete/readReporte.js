import axios from 'axios';
import { Link } from 'react-router-dom';
import "./reportes.css";


import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';

export default function ReadReportes() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/Reportes`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, indicador, categoria,descripcion ,fecha_inicio,fecha_terminacion,responsable,estado,comentarios } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Indicador', indicador);
    localStorage.setItem('Categoria', categoria);
    localStorage.setItem('Descripcion', descripcion );
    localStorage.setItem('Fecha_Inicio', fecha_inicio);
    localStorage.setItem('Fecha_Terminacion', fecha_terminacion);
    localStorage.setItem('Empresa', responsable);
    localStorage.setItem('Estado', estado);
    localStorage.setItem('Comentarios', comentarios);
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Reportes`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:7777/api/Reportes/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  return (
    <div>
    <h1 className='titulo' >Reportes</h1>
      <Table className='Table1' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Indicador</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Categoria</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Descripcion</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Fecha_Inicio</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Fecha_terminacion</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Empresa</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Estado</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Comentarios</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.indicador}</Table.Cell>
              <Table.Cell className='casilla' >{data.categoria}</Table.Cell>
              <Table.Cell className='casilla' >{data.descripcion }</Table.Cell>
              <Table.Cell className='casilla' >{data.fecha_inicio}</Table.Cell>
              <Table.Cell className='casilla' >{data.fecha_terminacion}</Table.Cell>
              <Table.Cell className='casilla' >{data.responsable}</Table.Cell>
              <Table.Cell className='casilla' >{data.estado}</Table.Cell>
              <Table.Cell className='casilla' >{data.comentarios}</Table.Cell>
              <Table.Cell>
                <Link to="/createReportes">
                  <Button className='CreateUpdate' onClick={() => setData(data)}>Create</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='CreateDelete' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
