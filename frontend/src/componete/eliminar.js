import React, { useState, useEffect } from 'react';
import './eliminar.css';
import axios from 'axios'; // Asegúrate de que Axios esté importado.

const Eliminar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:7777/api/Indicadores')
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (_id) => {
    setLoading(true);

    axios
      .delete(`http://localhost:7777/api/Indicadores/${_id}`)
      .then(() => {
        const updatedData = data.filter((item) => item._id !== _id);
        setData(updatedData);
        setLoading(false);
        alert('Elemento eliminado con éxito.');
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
        setLoading(false);
        alert('No se pudo eliminar el elemento.');
      });
  };

  const getCircleColor = (cumplimiento) => {
    if (cumplimiento >= 80) {
      return 'green';
    } else if (cumplimiento >= 60) {
      return 'green';
    } else if (cumplimiento >= 50) {
      return 'orange';
    } else if (cumplimiento >= 30) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className="eliminar-container">
      <h2>Eliminar Elementos</h2>
      <table className="eliminar-tabla">
        <thead>
          <tr>
            <th>Indicador</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Terminación</th>
            <th>Formula</th>
            <th>Frecuencia</th>
            <th>Cumplimiento</th>
            <th>Área</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.indicador}</td>
              <td>{item.descripcion}</td>
              <td>{item.categoria}</td>
              <td>{item.fecha_inicio}</td>
              <td>{item.fecha_terminacion}</td>
              <td>{item.formula}</td>
              <td>{item.frecuencia}</td>
              <td>
                {loading ? (
                  'Cargando...'
                ) : (
                  <div className="circle-loader">
                    <svg width="60" height="60">
                      <circle
                        className="circle"
                        cx="30"
                        cy="30"
                        r="27"
                        stroke={getCircleColor(item.cumplimiento)}
                        strokeWidth="7"
                        fill="none"
                        strokeDasharray="170"
                        strokeDashoffset={(170 * (100 - item.cumplimiento)) / 100}
                      />
                      <text x="30" y="30" textAnchor="middle" dy="0.3em" className="percentage">
                        {`${item.cumplimiento}%`}
                      </text>
                    </svg>
                  </div>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Eliminar;
