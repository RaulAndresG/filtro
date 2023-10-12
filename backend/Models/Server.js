const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const swaggerUI =  require ('swagger-ui-express');
const swaggerSpec = require ('../swaggerConfig.js');
const routeUsuarios = require("../routes/usuarios.routes.js");
const routeIndicadores = require("../routes/indicadores.routes.js");
const routeReportes = require("../routes/reportes.routes.js");
const routeRoles = require("../routes/roles.routes.js");
const routeAyuda = require("../routes/Ayuda.routes.js"); 
//const routerLogin = require("../routes/usuariosRoutes.js");  
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.UsuariosPath = "/api/Usuarios";
    this.IndicadoresPath = "/api/Indicadores";
    this.ReportesPath = "/api/Reportes";
    this.RolesPath = "/api/Roles";
    this.AyudaPath = "/api/Ayuda"; 
//this.loginPath = "/api/login";   

    // Middleware
    this.middlewares();
    process.setMaxListeners(15);
    // Rutas
    this.routes();
  }

  middlewares() {
    // Cors
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static("public"));

    // Parseo del cuerpo de la solicitud
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(this.UsuariosPath, routeUsuarios);
    this.app.use(this.IndicadoresPath, routeIndicadores);
    this.app.use(this.ReportesPath, routeReportes);
    this.app.use(this.RolesPath, routeRoles);
    this.app.use(this.AyudaPath, routeAyuda); 
/*   this.app.use(this.loginPath, routerLogin);   */
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;


//modelo
