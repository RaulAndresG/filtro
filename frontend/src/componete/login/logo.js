import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../Img/KARIO_LOGO.png';

export default function LogoAnimado() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logoAnimado">
      <div className="img-animated-container">
        <img id="img-animated" src={logo} alt="Logo animado" />
      </div>
    </div>
  );
}
