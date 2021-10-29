//servidor listo para ser levantado...(*)
//la carpeta public cumple la función todos los archivos que consideramos estaticos, que quiero tener siempre disponibles en mi app
//un archivo publico podria considerarse a una hoja de estilo (css), archiv de imagenes
// es muy comun tener carpetas css, images donde guardaremos las imagenes, una de js(javascript) para guardar nuestros arch de js que se enfoquen en hacer algo directamente dentro del front.
// dentro de app.js ¿como hacemos para decirle a express que necesitamos comfig esta carpeta como arch publicos y que express tenga conocimiento de ello...
//le tenemos que informarle a nuestra app....
const express = require("express");//(*)
const path = require("path");//----aca y lo guadare en esta variable, el objetivo es poder unificar las rutas dentro de los <> s.o., para que le sea sencillo a express identificar
// en que lugar nos encontramos y a qué lugar queremos llegar(nuestro obj es llegar a la carpeta public ==)

const app = express();//(.... que ya tenemos guardada en este variable app)
//(== pero para hacerlo funcional en cualquier s.o. yo le voy a pedir a la variable "path.resolve" que guarda el obj de este modulo que a traves de su metodo resolve; resuelva(===) )
//(=== la siguiente ruta que yo le voy a indicar, para esto voy a utilizar una variable que nos da node __dirname que hace referencia a la ubicacion en la cual me encuentro(====)  )
//(==== es decir la ubicacion del archivo app.js y desde aca le voy a pedir que vaya hacia atras y busque la carpeta public o desde la raiz "./public y luego copiar publicPath como parametro(=====)" )
//(===== en "express.static(publicPath)")
const publicPath = path.resolve(__dirname, "./public");//--para ello voy a hacer una variable constante que es "publicPath" que da referencia a la carpeta de archivos publicos, pero para que---
//--- funcione se necesita trabajar con un paquete adiconal(node) que se llama "path", para ello lo voy a traer----
app.use(express.static(publicPath));// aqui le decimos que hacemos uso de algunos arch estaticos, que vamos a hacer dentro de este metodo llamado use que se ejecuta sobre la variable app
//que tenga la ejecucion de express, aqui vamos usar una funcion "static" que hace parte del objeto express, es decir "express.static" que recibe como parametro..
//..recibe la ruta en la que se encuentra la carpeta de archiv publicos--
///A su vez la carpeta "views" guardara las vistas de nuestra app, es decir nuestros archivos html 
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
}); //(*)
//para ver lo que hicimos en los doc htmls en el navegador, necesitamos hacer lo siguiente: tengo que generar una ruta
// con app.get ("/") digo que la ruta raiz, cuando yo entre al localhost:3000 , me va a responder con una solicitud que yo le mencione, en este caso 
// tengo el metodo o controlador o funcion que trabaja con el request y trabaja con el response y para que yo pueda mostrar este archivo html en el navegador
// lo unico que necesito decir que del atributo res quiero utilizar un metodo que se llama "sendFile" nos permitira enviar un archivo al navegador, hago uso del metodo
// path.resolve y decirle que desde la ubicacion de este archivo en el que me encuentro quiero ir a la carpeta './views/home.html' y obtener el archivo home.html
app.get("/", (req, res) => {
  // res.sendFile('./views/home.html') no funciona porque pusimos una ruta relativa y se requiere una absoluta
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

