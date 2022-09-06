const Contenedor = require('./contenedor')

const contenedor = new Contenedor('./productos.json')

contenedor.save({ title: "Regla", price: 300})
    .then( result => {
        console.log(result);
    })

contenedor.getAll()
    .then( result => {
        console.log(result);
    });

contenedor.getById(3)
    .then( result => {
        console.log(result);
    }); 

// contenedor.deleteAll()
//     .then( result => {
//         console.log(result);
//     });

// contenedor.deleteById(2)
//     .then( result => {
//         console.log(result);
//     });
