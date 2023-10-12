// swaggerConfig.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de KARIO',
      version: '3.0.0',
      description: 'Documentación de la API de KARIO',
    },
    servers:[
        {
            url: "http://localhost:7777"
        }
    ]
  },
  apis: ['./routes/Ayuda.routes.js', './routes/indicadores.routes.js', './routes/reportes.routes.js', './routes/roles.routes.js', './routes/usuarios.routes.js'], // Rutas de tus controladores
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec