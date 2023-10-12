import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import burguer from "../Img/burguer.png";
import "./pagina.css";
import "./modal.css";

const Panel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("forwards");
  const [userInput, setUserInput] = useState(75);

  useEffect(() => {
    fetch("http://localhost:7777/api/Indicadores")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const scaledPercentage = (percentage / 100) * 70;
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 100);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setUserInput(value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < userInput) {
        setPercentage(percentage + 1);
      } else if (percentage > userInput) {
        setPercentage(percentage - 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [percentage, userInput]);

  const getCircleColor = (cumplimiento) => {
    if (cumplimiento >= 80) {
      return "green";
    }if (cumplimiento >= 60) {
      return "green";
    } else if (cumplimiento >= 50) {
      return "orange";
    } else if (cumplimiento >= 30) {
      return "orange";
    } else {
      return "red";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const calculateCirclePercentage = (cumplimiento) => {
    return (cumplimiento / 100) * 85;
  };

  return (
    <div className="app">
      <div>
        <h1 className="pagina">Panel de Indicadores</h1>
        <p className="paginas">
          Aquí puedes visualizar los indicadores propuestos y añadidos por tu
          equipo de trabajo. Si quieres ver más detalles, dale click a uno de
          ellos para más información
        </p>
      </div>
      <div className="tabla-container">
        <table className="tabla">
          <thead>
            <tr>
              <th colSpan={9} className="titulo-container">
                <div className="titulo1">Indicador</div>
                <div className="titulo2">Descripcion</div>
                <div className="titulo3">Categoria</div>
                <div className="titulo4">Fecha de Inicio</div>
                <div className="titulo5">Fecha de Terminacion</div>
                <div className="titulo6">Formula</div>
                <div className="titulo7">Frecuencia</div>
                <div className="titulo8">Cumplimiento</div>
                <div className="titulo9">Area</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="rectangulo"
                onClick={() => handleRowClick(item)}
                style={{ cursor: "pointer" }}
              >
                <td colSpan={9}>
                  <div className="informacion">
                    <div className="info1">{item.indicador}</div>
                    <div className="info2">{item.descripcion}</div>
                    <div className="info3">{item.categoria}</div>
                    <div className="info4">{item.fecha_inicio}</div>
                    <div className="info5">{item.fecha_terminacion}</div>
                    <div className="info6">{item.formula}</div>
                    <div className="info7">{item.frecuencia}</div>
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
                          strokeDashoffset={
                            (170 * (100 - item.cumplimiento)) / 100
                          }
                        />
                        <text
                          x="30"
                          y="30"
                          textAnchor="middle"
                          dy="0.3em"
                          className="percentage"
                        >
                          {loading ? "Cargando..." : `${item.cumplimiento}%`}
                        </text>
                      </svg>
                    </div>
                    <div className="info9">{item.area}</div>
                    <img alt="" className="burguer" src={burguer} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalIsOpen && (
        <Modal item={selectedItem} onClose={() => setModalIsOpen(false)} />
      )}
    </div>
  );
};

export default Panel;
