import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Img/KARIO_LOGO.png';
import './login.css';

function Login() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/logueo');
  };

  return (
    <div className="login">
      <header className="header-login">
        <div className="logo-login">
          <img src={logo} alt="Logo de KARIO Media" />
        </div>
        <div className="title-login">
          <h2>Bienvenido al panel digital de KARIO Media</h2>
        </div>
        <div className="subtitle-login">
          <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
        </div>
      </header>
      <div className="inputs-login">
        <div className="inputs-container">
          <label>Usuario</label>
          <input type="text" />
        </div>
        <div className="inputs-container">
          <label>Contraseña</label>
          <input type="password" />
        </div>
      </div>
      <div className="button-login">
        <button onClick={handleLoginClick}>Ingresar al panel</button>
      </div>
      <div className="info-login">
        <p>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
      </div>
    </div>
  );
}

export default Login;
