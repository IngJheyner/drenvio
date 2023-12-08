import mongoose from 'mongoose'
import config from '../utils/config.js'
import logger from '../utils/logger.js'

// 🚨 UPPS! Para fines de depuración en desarrollo: Mostrar la URI de conexión a la base de datos
logger.info('connecting to', config.MONGODB_URI)

// Conexión a la base de datos
const db = mongoose.connect(config.MONGODB_URI)

// 🚨 Para fines de depuración en desarrollo
// Observamos la lista de colecciones de la base de datos
mongoose.connection.once('open', () => {
    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
          logger.error(err)
        } else {
          logger.info(names)// Imprime los nombres de todas las colecciones
        }
    })
})

export default db