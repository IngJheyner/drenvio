import express from 'express'
const app = express()
import db from './database/db.js'
import logger from './utils/logger.js'
import handlers from './utils/handlers.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'

// Estado de conexión a la base de datos
db.then(() => {
    logger.info('connected to MongoDB')
})
.catch(error => {
    logger.error('error connecting to MongoDB:', error.message)
})

app.disable('x-powered-by')
// Body parser
app.use(express.json())

// Rutas de la API
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)

// Middleware para el manejo de errores
app.use(handlers.errorHandler)
app.use(handlers.unknownEndpoint)

export default app