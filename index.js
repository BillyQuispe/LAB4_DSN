const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicacion Express Laboratorio 4 Quispe Carlos');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Billy Quispe', 'Gabriela Sofia', 'Alfredo Usnayo'];
  res.send(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Laptop', 'CPU', 'Memoria RAM'];
  res.send(productos);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
