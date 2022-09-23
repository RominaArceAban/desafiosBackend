const fs = require('fs')

class Contenedor {

    constructor(filename) {
        this.filename = filename
    }

    read() {
        return fs.promises.readFile(this.filename, 'utf-8')
            .then(data => JSON.parse(data))
    }

    write(data) {
        const str = JSON.stringify(data, null, 2)
        return fs.promises.writeFile(this.filename, str)
    }



    async save(obj) {
        try {
            const contenido = await this.read();
            const ultimoId = contenido[contenido.length - 1].id;
            obj.id = ultimoId + 1;
            const id = obj.id;
            contenido.push(obj);
            await this.write(contenido)
            return id
        } catch(error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const products = await this.getAll();
            const productById = products.find(p => p.id == id);
            return productById;
        } catch(error) {
            console.log(error);
        } 
    }
    async getAll() {
        try {
            const data = await this.read();
            return data;
        } catch(error) {
            console.log(error);
        }
    }
    async deleteById(id) {
        try {
            const data = await this.getAll();
            const idx = data.findIndex(p => p.id == id);
            const obj = data.splice(idx, 1);
            await this.write(data);
            return obj;
        } catch(error) {
            console.log(error);
        }
    }
    async deleteAll() {
        const cont = [];
        try {
            await this.write(cont);
        } catch(error) {
            console.log(error);
        }
    }
}


module.exports = Contenedor