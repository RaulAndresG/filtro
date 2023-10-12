import './login.css';
import logo from '../../Img/KARIO_LOGO.png';  
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logueo() {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/pagina');
      }, 2500);
  
      return () => clearTimeout(timer);
    }, [navigate]); 

    return (
        <div className="contenedor1">
           <div className="logoo1"><img id="img-animated" src={logo} alt="Logo animado" /></div>
          <h1>Título</h1>
           <div className="foto-usuario">foto user</div>
           <div className="nombre-usuario">usuario</div>
           <div className="rol">rol</div>
         </div>
    );
}
