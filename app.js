const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Mundo ejemplo DevOps <h1>Primeros pasos al DevOps</h1> <h2>Ejemplo con el TeamEva</h2>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
