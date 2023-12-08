import dotenv from 'dotenv'
dotenv.config()

// Puerto de escucha del servidor
const PORT = process.env.PORT ?? 3000
// URI de conexión a la base de datos
const MONGODB_URI = process.env.MONGODB_URI

export default {
    PORT,
    MONGODB_URI
}