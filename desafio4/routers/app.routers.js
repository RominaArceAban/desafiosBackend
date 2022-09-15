const express = require('express');

const productsRoutes = require('./productos/productos.routes');

const router = express.Router();

router.use('/productos',productsRoutes)

module.exports = router;