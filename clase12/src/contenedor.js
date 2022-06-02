module.exports = class Contenedor {
  constructor() {
    this.container = [];
  }

  save(obj) {
    try {
      let longitud = this.container.length;
      let index = 0;
      if (longitud == 0) {
        index = 1;
      } else {
        index = this.container[longitud - 1].id + 1;
      }

      obj.id = index;
      this.container.push(obj);

      return obj.id;
    } catch (error) {
      throw error;
    }
  }

  getById(id) {
    try {
      let array = this.container.filter((x) => {
        return x.id == id;
      });

      if (array[0] == undefined) {
        return { error: "producto no encontrado" };
      } else {
        return array;
      }
    } catch (error) {
      throw error;
    }
  }

  updateById(obj) {
    try {
      let objIndex = this.container.findIndex(
        (product) => product.id == obj.id
      );

      if (objIndex == -1) {
        return { error: "producto no encontrado" };
      } else {
        this.container[objIndex].title = obj.title;
        this.container[objIndex].price = obj.price;
        this.container[objIndex].thumbnail = obj.thumbnail;

        return { estado: "Producto actualizado" };
      }
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      console.log(this.container);
      return this.container;
    } catch (error) {
      throw error;
    }
  }

  deleteById(id) {
    try {
      let obj = this.getById(id);

      if (obj.error == "") {
        return obj;
      } else {
        this.container = this.container.filter((x) => {
          return x.id != id;
        });
        return { idDeleted: id };
      }
    } catch (error) {
      throw error;
    }
  }
};



