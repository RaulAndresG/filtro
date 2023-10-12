
import React from 'react';
import { BrowserRouter as div,Routes,Route, Link } from 'react-router-dom'; // Importa Routes y Route
import logo from '../Img/KARIO_LOGO.png'
import bug from '../Img/bug.png'
import reload from '../Img/relaod.png'
import trash from '../Img/trash.png'
import ayudas from '../Img/ayuda.png'
import agregar from '../Img/agregar.png'
import settings from '../Img/settings.png'
import campanita from '../Img/campanita.png'
import Foto from '../Img/Pedro.jpeg'
import AyudaCrud from './ayuda';
import Eliminar from './eliminar';
import './nav.css' 
import Panel from './pagina';



const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <div className="links">
        <div className='logos'>
            <img alt='' className='logoss' src={agregar} />
            <Link to="/create" className="link">Añadir</Link>
          </div>

          <div className='logos'>
            <img alt='' className='logoss' src={reload} />
            <Link to="/"  className="link">Refrescar</Link>
          </div>

          <div className='logos'>
            <img alt='' className='logoss' src={trash} />
            <Link to="/eliminar" className="link">Eliminar</Link>

          </div>

          <div className='logos'>
            <img alt='' className='logo' src={logo} />
          </div>

          <div className='logos'>
            <img alt='' className='logoss' src={bug} />
            <Link to="/readReportes" className="link">Reporte</Link>
          </div>

          <div className='logos'>
            <img alt='' className='logoss' src={ayudas} />
            <Link to="/ayuda" className="link">Ayuda</Link>
          </div>
          <div className='settingsContenedor' >
            <img alt='' className='settings' src={settings} ></img>
            <img alt='' className='settingss' src={campanita} ></img>
            <img alt='' className='logoFoto' src={Foto} ></img>
          </div>
        </div>
        
      </nav>
      <Routes>
        <Route path="/ayuda" element={<AyudaCrud />} /> 
        {/* <Route path="/eliminar" element={<Eliminar />} /> */}
        <Route path="/pagina" element={<Panel />} /> 

      </Routes>
    </div>
  );
};

export default Navigation;


