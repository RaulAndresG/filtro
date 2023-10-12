# Proyecto Final En Equipo

## INTEGRANTES

- Valentina Perez Fonseca
- Raul Andres Gomez Reatiga
- Jairo Alonso Cardenas Blanco


# Documentación de la API MERN (CRUD)

## Descripción
Esta API MERN proporciona una interfaz para la gestión de datos con operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando las tecnologías MongoDB, Express.js, React y Node.js. Esta documentación proporciona información sobre cómo interactuar con la API, los puntos finales disponibles y ejemplos de solicitudes y respuestas.


## Requisitos
Asegúrate de tener instalado lo siguiente antes de utilizar esta API:
# 🎨 Diseño UIX


# Tecnologías Utilizadas


- [Node.js]
- [MongoDB]
- [express]
- [React]


<div align="center">


  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="70" height="70" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width="70" height="70" stroke="white"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="70" height="70" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="70" height="70" />
</div>

## Configuración
1. Clona el repositorio desde [URL del Repositorio](URL_del_repositorio) (opcional).
2. Ejecuta `npm install` para instalar las dependencias del servidor.
3. Configura el archivo `.env` con la URL de tu base de datos MongoDB y otros datos sensibles (claves secretas, etc.).
4. Ejecuta `npm start` para iniciar el servidor.

## Uso
La API se ejecuta en `http://localhost:PUERTO`. Asegúrate de cambiar `PUERTO` por el puerto que has configurado en tu archivo `.env`.

## Puntos finales (Endpoints)
- `GET /api/Reportes`: Obtiene todos los informes.
- `GET /api/Usuarios`: Obtiene todos los informes.
- `GET /api/Indicadores`: Obtiene todos los informes.
- `GET /api/Roles`: Obtiene todos los informes.
- `GET /api/Ayuda`: Obtiene todos los informes.

- `POST /api/Reportes`: Crea un nuevo informe.
- `POST /api/Usuarios`: Crea un nuevo informe.
- `POST /api/Indicadores`: Crea un nuevo informe.
- `POST /api/Roles`: Crea un nuevo informe.
- `POST /api/Ayuda`: Crea un nuevo informe.

- `PUT /api/Reportes/:id`: Actualiza un informe existente por ID.
- `PUT /api/Usuarios/:id`: Actualiza un informe existente por ID.
- `PUT /api/Indicadores/:id`: Actualiza un informe existente por ID.
- `PUT /api/Roles/:id`: Actualiza un informe existente por ID.
- `PUT /api/Ayuda/:id`: Actualiza un informe existente por ID.


- `DELETE /api/Reportes/:id`: Elimina un informe por ID.
- `DELETE /api/Usuarios/:id`: Elimina un informe por ID.
- `DELETE /api/Indicadores/:id`: Elimina un informe por ID.
- `DELETE /api/Roles/:id`: Elimina un informe por ID.
- `DELETE /api/Ayuda/:id`: Elimina un informe por ID.

## Ejemplos
A continuación, se presentan ejemplos de solicitudes HTTP a los puntos finales de la API:

#### Obtener todos los informes
```http
GET /api/Reportes

``````

### POST /api/reporte
- Content-Type: application/json

```http
{

  "indicador": "Construcción de Parques Temáticos",
  "categoria": "Alta",
  "descripcion": "Informe de riesgos actualizado.",
  "fecha_inicio": "2024-04-01",
  "fecha_terminacion": "2025-12-31",
  "responsable": "Usuario1",
  "estado": "En revisión",
  "comentarios": "Se requiere más información sobre el riesgo 3."
}
``````

#### SWAGGER

1. Primero se tiene que instalar el node_modules

```
npm i
```

2. Segundo se tiene que ejecutar la api

```
npm run dev
```
Lo va a llevar a esta pagina 👇👇

```
http://localhost:7777/api-docs/#/
```






