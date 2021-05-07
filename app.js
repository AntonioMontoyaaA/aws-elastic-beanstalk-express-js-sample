const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Mundo ejemplo DevOps bitches!! Con un primer Commit!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
