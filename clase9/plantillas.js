const express = require("express");
const app = express();
const fs = require("fs");

app.engine('cte1', (path, options, callback) => {
    const contenidoArchivo = String(fs.readFileSync(path))
    const {titulo, mensaje, autor, version} = options;
    const renderizado = contenidoArchivo.replace('^^titulo$$', titulo).replace('^^mensaje$$', mensaje).replace('^^autor$$', autor).replace('^^version$$', version);
    callback(null, renderizado);
});

app.set('views', './views');
app.set('view engine', 'cte1');

app.get('/cte1', (req, res) => {
    res.render('index', {
        titulo: 'Hola mundo',
        mensaje: 'Franco sos un capo',
        autor: 'Franco',
        version: '1.0'
    });
})

app.engine('cte2', (path, options, callback) => {
    const contenidoArchivo = String(fs.readFileSync(path))
    const {nombre, fecha, apellido} = options;
    const renderizado = contenidoArchivo.replace('^^nombre$$', nombre).replace('^^apellido$$', apellido).replace('^^fecha$$', fecha);
    callback(null, renderizado);
})

app.set('views', './views');
app.set('view engine', 'cte2');

app.get('/cte2', (req, res) => {
    res.render('index', {
        nombre: 'Franco',
        apellido: 'Negrete',
        fecha: '25/05/2022'
    });
})



app.listen(8080, () => {
    console.log("Estoy escuchando");
})