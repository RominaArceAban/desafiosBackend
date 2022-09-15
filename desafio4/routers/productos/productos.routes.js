const express = require('express');
const router = express.Router();
const Contenedor = require('../../contenedor')

const productos = new Contenedor('productos.json')





router.get('/', async (req, res)=> {
    res.json(await productos.getAll())
})

router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    const idNumber = Number(id);

    if (isNaN(idNumber)) {
        return res.status(400).send({ error: 'El parámetro debe ser un número' });
    }

    if (idNumber > productos.length) {
        return res.status(400).send({ error: 'Parámetro fuera de rango' });
    }

    if (idNumber < 0) {
        return res.status(400).send({ error: 'El parámetro debe ser mayor a cero' });
    }

    const product = await productos.getById(idNumber);

    if (!product) {
        return res.status(400).send({ error: 'Producto no encontrado' });
    }

    return res.json(product)
})

router.post('/', async (req, res)=> {
    const { title, price, image } = req.body;

    if (!title || !price || !price ) {
        return res.status(400).send({ error: 'Los datos están incompletos' });
    }

    await productos.save({ title, price, image });

    return res.send({ message: 'Producto agregado!'})
})

router.put('/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const { field, value } = req.body;
    
        await productos.getById(Number(id), field, value)
    
        res.send({ message: `El producto ${id} se modificó exitosamente`})
    } catch (error) {
        throw error
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const idNumber = Number(id);

    await productos.deleteById(idNumber)

    return res.send({ message: `El producto con id: ${id} se elimino exitosamente`})

})

module.exports = router;