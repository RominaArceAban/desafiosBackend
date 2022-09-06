
const { request, response } = require('express')
const express = require('express')
const Contenedor = require('./contenedor')


const app = express()
const PORT = process.env.PORT || 8080
const DBfile = 'productos.json'
const contenedor = new Contenedor(DBfile)


app.get('/', ( request, response) => {
    response.send(
        "<h1>Desafio 03 - Servidor con express</h1>"
    ) 
 });

app.get('/productos', ( request, response) => {
    const data = contenedor.getAll();
    response.send(data);
})

// app.get('/productos', ( request, response) => {
//    const data = contenedor.getAll()
//    response.send(data) 
// });

app.get('/productosRandom', ( request, response) => {
    const data = contenedor.getAll();
    const num = Math.floor(Math.random() * data.length);
    const item = data[num];
    response.json(item);
})

// app.get('/productosRandom', ( request, response) => {
//     const data = contenedor.getAll()
//     const num = Math.floor(Math.random() * data.length)
//     const item = data[num]
//     response.json(item) 
//  });


 const connectedServer = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
connectedServer.on('error', error => console.log('Error on server', error.message));