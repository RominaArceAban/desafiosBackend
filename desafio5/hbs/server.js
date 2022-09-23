const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const Contenedor = require('./contenedor')


const app = express();
const PORT = process.env.PORT || 8080;
const productos = new Contenedor('productos.json')



app.engine('hbs', engine({
    extname: 'hbs',
    defaultlayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
}));

app.set('views', './views');
app.set('view engine', 'hbs');

//middlewares
app.use(express.json()); //parsea la info a formato json
app.use(express.urlencoded({extended: true})); //parsea los datos de formularios/ el true lo parsea a objeto
app.use(express.static(path.resolve(__dirname, './public')));


//routes
app.post('/productos', async(req, res) => {
  const product = req.body;
  await productos.save(product);
  res.redirect('/');
});

app.get('/productos', async (req, res) => {
  const prods = await productos.getAll();
  res.render('index', { productos: prods , hayProductos: prods.length});
});

 
const connectedServer = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
connectedServer.on('error', error => console.log('Error on server', error.message));

