const fs = require('fs');

class Contenedor{
    id = 1;
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
        
    }

    async getAll(){
        try{
            const contenidoCrudo = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            const contenido = JSON.parse(contenidoCrudo);
            return contenido;
        }catch(error){  
            console.log(error);
            return [];
        }
    }

    async save(objeto){
        objeto['id'] = this.id;
        this.id++;
        const contenido = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'));
        contenido.push(objeto);
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido));
    }

    async getById(id){
        const contenido = await this.getAll();
        const objeto = contenido.find(obj => obj.id === id);
        return objeto;
    }

    async deleteAll(){
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]));
    }

    async deletebyId(id){
        const contenido = await this.getAll();
        const objeto = contenido.find(obj => obj.id === id);
        const index = contenido.indexOf(objeto);
        contenido.splice(index, 1);
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido));
    }
}

const ejecutarProductos = async () => {
    const productos = new Contenedor('producto.txt');
    await productos.save({title: 'Coca Cola', price: 50.50, thumbnail: 'coca-cola.jpg'});
    await productos.save({title: 'Fanta', price: 50.50, thumbnail: 'fanta.jpg'});
    console.log(await productos.getAll());
    console.log(await productos.getById(2));
    await productos.deletebyId(2);
    console.log(await productos.getAll());
    await productos.deleteAll();
    console.log(await productos.getAll());

}

ejecutarProductos();


