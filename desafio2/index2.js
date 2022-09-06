const Contenedor = require('./contenedor')

async function main() {
    const product = new Contenedor('./productos.json')

    console.log('Se incorporo un nuevo producto')
    let saveProd = await product.save({ title: "regla", price: 300})
    console.log(saveProd)

    console.log('Muestro todos los productos')
    let allProd = await product.getAll()
    console.log(allProd)

    const idBuscado = 2
    console.log(`Muestro el producto con id: ${idBuscado}`)
    let productById = await product.getById(idBuscado)
    console.log(productById)

    // console.log('Se eliminaron todos los productos')
    // let allDelete = await product.deleteAll()
    // console.log(allDelete)

    // const deleteId = 2
    // console.log(`Elimino el producto con id: ${deleteId}`)
    // let deleteById = await product.deleteById(deleteId)
    // console.log(deleteById)
}

main()