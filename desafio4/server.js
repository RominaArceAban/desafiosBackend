const express = require('express');
const apiRoutes = require('./routers/app.routers');



const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json()); //parsea la info a formato json
app.use(express.urlencoded({extended: true})); //parsea los datos de formularios/ el true lo parsea a objeto
app.use(express.static('public'));


//routes
app.use('/api', apiRoutes);

 const connectedServer = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
connectedServer.on('error', error => console.log('Error on server', error.message));