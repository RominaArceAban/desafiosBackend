
class Usuario {

    constructor (obj = {}) {
        this.nombre = obj.nombre,
        this.apellido = obj.apellido,
        this.libros = [],
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(masc) {
        this.mascotas.push(masc)
    }

    countMascotas() {
        return this.mascotas.length()
    }

    addBook(nomb, aut) {
        return this.libros.push( {nombre:nomb, autor:aut})
    }

    getBookNames() {
        return this.libros.map(libros => libros.nombre)
    }

}

const usuario1 = new Usuario({
    nombre: 'Romina',
    apellido: 'Arce',
    libros: [{nombre:'El juguete rabioso', autor:'Roberto Arlt'}, {nombre:'Cronicas Marcianas', autor:'Ray Bradbury'}],
    mascotas: ['perro','gato']
})

console.log(usuario1.getFullName())
console.log(usuario1.addMascota())
console.log(usuario1.countMascotas())
console.log(usuario1.addBook())
console.log(usuario1.getBookNames())