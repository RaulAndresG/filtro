// Modal.js
import React from "react";
import './modal.css';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <h2>{item.indicador}</h2>
        <p>Descripción: {item.descripcion}</p>
        <p>Categoría: {item.categoria}</p>
        <p>Fecha de Inicio: {item.fecha_inicio}</p>
        <p>Fecha de Terminación: {item.fecha_terminacion}</p>
        <p>Formula: {item.formula}</p>
        <p>Frecuencia: {item.frecuencia}</p>
        <p>Area: {item.area}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
