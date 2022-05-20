const express = require("express");
const app = express();
const port = 8081;
const fraseInicial = "Frase inicial";
let palabras = fraseInicial.split(" ");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.log("Servidor ON!");
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));

app.get("/api/frase", (req, res) => {
  res.send(palabras.join(" "));
});

app.get("/api/palabras/:pos", (req, res) => {
  const posicion = parseInt(req.params.pos);
  res.send(palabras[posicion]);
});

app.post("/api/palabras", (req, res) => {
  const agregar = req.body.palabra;
  palabras.push(agregar);
  res.json({
    agregada: agregar,
    pos: palabras.length - 1,
  });
});

app.put("/api/palabras/:pos", (req, res) => {
  const palabra = req.body.palabra;
  const posicion = parseInt(req.params.pos);
  const anterior = palabras[posicion];
  palabras[posicion] = palabra;
  res.json({
    actualizada: palabra,
    anterior: anterior,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {    
    const posicion = parseInt(req.params.pos);
    const anterior = palabras[posicion];
    palabras = palabras.filter((valor, indice) => indice != posicion);
    res.json({
      eliminada: anterior,
      palabras: palabras.join(' '),
    });
});



























/* const express = require("express");
const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log("Servidor ON!");
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));

// req.params  cuando vienen por URL los parametros
app.get("/api/sumar/:numUno/:numDos", (req, res) => {
  const total = parseInt(req.params.numUno) + parseInt(req.params.numDos);
  res.send({ total });
});

// req.query  cuando vienen por querystring
app.get("/api/sumar", (req, res) => {
  const total = parseInt(req.query.num1) + parseInt(req.query.num2);
  res.send({ total });
});

// req.query  cuando vienen por querystring
app.get("/api/operacion/:operacion", (req, res) => {
  const numeros = req.params.operacion.split("+");
  const total = parseInt(numeros[0]) + parseInt(numeros[1]);
  res.send({ total });
});

app.post("/api", (req, res) => {
  res.send("OK POST");
});

app.put("/api", (req, res) => {
  res.send("OK PUT");
});

app.delete("/api", (req, res) => {
  res.send("OK DELETE");
});
 */

































/* const express = require('express');
const app = express();

const frase = "Hola mundo como estan";

app.get('/api/frase', (req, res) => {
    res.json(frase);
})

app.get('/api/letras/:num', (req, res) => {
    const numero = parseInt(req.params.num);
    if(isNaN(numero)) res.status(404).send({error: 'El numero debe ser un numero'});
    if(numero > frase.length) res.status(404).send({error: 'la letra no existe'});
    else res.send(frase[numero-1]);
})

app.get('/api/palabra:num', (req, res) => {
    const numero = req.params.num;
    console.log(numero);
    if(isNaN(numero)) res.status(404).send({error: 'El numero debe ser un numero'});
    if(numero > palabras.length) res.status(404).send({error: 'la letra no existe'});
    else res.send(palabras[numero-1]);
})

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
})

 */
/* 
const autos = [
    {
        id: 1,
        marca: 'Toyota',
        color: 'Rojo'
    },
    {
        id: 2,
        marca: 'Ford',
        color: 'Azul'
    }
]

app.get('/autos', (req, res) => {
    const marca = req.query.marca;
    if(marca) res.json(autos.filter(auto => auto.marca === marca));
    else res.json(autos);
} )

app.get('/autos/:autoId', (req, res) => {
    const idDelAuto = req.params.autoId;
    const autoEncontrado = autos.find(auto => auto.id == idDelAuto);
    if(!autoEncontrado) res.status(404).send('No se encontró el auto');
    else res.json(autoEncontrado);
})

app.listen(8080, ()=>{
    console.log('Servidor iniciado en el puerto 8080');
}) */

