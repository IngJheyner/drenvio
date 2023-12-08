import User from "../models/user.js"

// Listar todos los usuarios
export const getUsers = async (req, res, next) => {
    await User.find({})
            .then(result => {
                res.json(result)
            })
            .catch(error => {
                next(error)
            })
}

// Crear usuarios
export const createUser = async (req, res, next) => {
    const { name } = req.body

    const user = new User({
        name,
    })

    await user.save()
            .then(result => {
                res.status(201).json(result)
            })
            .catch(error => {
                next(error)
            })

}