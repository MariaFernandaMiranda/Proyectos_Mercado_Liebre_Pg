const express = require("express");
const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  // res.sendFile('./views/home.html') no funciona porque pusimos una ruta relativa y se requiere una absoluta
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

