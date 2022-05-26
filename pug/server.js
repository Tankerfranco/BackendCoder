const express = require('express');
const app = express();

let Contenedor = require('./contenedor');
let productos = new Contenedor('producto.txt');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'pug');
app.set('views', './pug-views');

app.get('/productos', (req, res) => {
    try {
        res.render('productos', { productos: productos.getAll() });
      } catch (error) {
        throw new Error("Hubo un error al listar todos los productos");
      }
    });
    
    


app.get('/', (req, res) => {
    res.render('formulario');
})

app.post('/productos', (req, res) => {
    try {
        let obj = {};
        obj.title = req.body.title;
        obj.price = req.body.price;
        obj.thumbnail = req.body.thumbnail;
        let id = productos.save(obj);
    
        res.redirect('/productos');
      } catch (error) {
        throw new Error("Hubo un error al agregar el producto");
      }
    });

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
})