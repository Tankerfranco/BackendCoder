const { json } = require("body-parser");

class Contenedor {
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

  getAll() {
    try {
      return this.container;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Contenedor;