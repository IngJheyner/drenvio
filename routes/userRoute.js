import express from 'express'
const Router = express.Router()
import { getUsers, createUser } from '../controllers/userController.js'

// Listar todos los usuarios
Router.get('/', getUsers)
// Crear un nuevo usuario
Router.post('/', createUser)

export default Router