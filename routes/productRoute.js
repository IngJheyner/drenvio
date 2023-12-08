import express from 'express'
const Router = express.Router()
import { getProducts, getSpecialPrices, createProduct, deleteProducts } from '../controllers/productController.js'

// Listar todos los productos en stock
Router.get('/', getProducts)
// Productos con precio especial para un usuario
Router.get('/:userId/:productName', getSpecialPrices)


// 🚨 Opcionales

// Crear un nuevo producto
Router.post('/', createProduct)
// Eliminar todos los productos
Router.delete('/', deleteProducts)

export default Router