const express = require('express');
const app = express();
const contenedor = require('./desafioPasado');

function getRandom () {
    return Math.round(Math.random()*3)
}

app.get('/', (req, res) => {
    res.send('Hola mundo');
})


app.get('/productos', (req, res) => {
    const ejecutar = async () => {
        const productos = new contenedor('producto.txt');
        const contenido = await productos.getAll();
        res.send(contenido);
    }
    ejecutar();
})

app.get('/productoRandom', (req, res) => {
    const ejecutar = async () => {
        const productos = new contenedor('producto.txt');
        const contenido = await productos.getById(getRandom());
        res.send(contenido);
    }
    ejecutar();
})

app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
})