import app from './app.js'
import http from 'node:http'
import config from './utils/config.js'

// Creación de un servidor HTTP con Node.js
const server = http.createServer(app)

// Iniciamos el servidor en el puerto especificado en la configuración
server.listen(config.PORT, () => {
    console.log(`Server running on port http://localhost:${config.PORT}`)
    }
)