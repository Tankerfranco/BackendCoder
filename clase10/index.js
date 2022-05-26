const express = require('express');
const multer = require('multer');
const app = express();
const uploaderMiddleware = multer({ dest: './uploads' });

app.use(express.urlencoded({ extended: true }));

app.post('/subida', uploaderMiddleware.single('archivo'), (req, res) => {
    res.send('Subido Ok')
})

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
})