const express = require("express");
const app = express();
const {engine} = require("express-handlebars");

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs'
    })
);

app.set('views', './hbs_views');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('main', {
        nombre: 'Franco',
        apellido: 'Negrete',
        edad: '25',
        telefono: '123456789',
        email: 'blah'
    })
})

app.listen(8080, () => {
    console.log("Estoy escuchando");
})

/* app.use(express.static('public')) */