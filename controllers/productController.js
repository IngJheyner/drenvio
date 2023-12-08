import Product from "../models/product.js"

// Listar todos los productos en stock
export const getProducts = async (req, res, next) => {
    await Product.find({ stock: { $gt: 0 } })
            .then(result => {
                res.json(result)
            })
            .catch(error => {
                next(error)
            })
}

// Productos con precio especial para un usuario
export const getSpecialPrices = async (req, res, next) => {

    try {
        const { userId, productName } = req.params

        const product = await Product.findOne({ name: productName })

        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }

        const specialPrice = product.specialPrices.find(price => price.userId.toString() === userId)

        res.json({
            productName: product.name,
            price: !specialPrice ? product.price : specialPrice.price
        })
    } catch (error) {
        next(error)
    }
}

// 🚨 Opcionales
// Crear un nuevo producto
export const createProduct = async (req, res, next) => {
    const { name, price, stock, specialPrices } = req.body

    const product = new Product({
        name,
        price,
        stock,
        specialPrices
    })

    await product.save()
            .then(result => {
                res.status(201).json(result)
            })
            .catch(error => {
                next(error)
            })

}

// Eliminar todos los productos
export const deleteProducts = async (req, res, next) => {
    await Product.deleteMany({})
            .then(() => res.status(204).end())
            .catch(error => {
                next(error)
            })

}