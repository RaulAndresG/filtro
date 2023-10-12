import Nav from './componete/nav'
import Pagina from './componete/pagina'
import Create from './componete/create';
import Eliminar from './componete/eliminar'; 
import ReadReportes from './componete/readReporte';
/* import UpdateReportes from './componete/updateReporte'; */
import CreateReporte from './componete/createReportes';
/* import Login from './componete/login/login';
import LogoAnimado from './componete/login/logo';
import Logueo from './componete/login/usuario';
import AppLayout from './componete/home/home'; */
/* import Panel from './componete/pagina'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route



import './App.css';   

function App() {
  return (
    <Router>
      <div className="App"> 
        <div>
          <Nav />
          <Routes>
    {/*       <Route exact path="/" element={<LogoAnimado/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logueo" element={<Logueo/>} /> */}
            <Route path='/createReportes' element={<CreateReporte/>}></Route>
            <Route path="/create" element={<Create />} />
            <Route path="/eliminar" element={<Eliminar />} />
            <Route path="/" element={<Pagina />} />
            <Route path="/readReportes" element={<ReadReportes />} />
            {/* <Route path="/pagina" element={<AppLayout/>} /> */}
           {/*  <Route path="/updateReportes" Component={UpdateReportes} /> */}

          </Routes>
        </div>
        <div>
         {/*  <Pagina /> */}
        </div>
      </div>
    </Router>
  );
}


export default App;

