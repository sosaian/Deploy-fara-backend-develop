import mUser from "../models/user.model.js";


const UserController = {
    create: async(req, res) => {
        const body = req.body;
        try {
            await mUser.create(body);
            res.json({error: false, message: 'usuario agregado'})
        } catch (err) {
            res.status(400).json({error:true, message: err.message})
        }    
        
    },

    getAll: async(req, res) => {
        try {
            const users = await mUser.getAll()
            res.json({users})
        } catch (err) {
            res.status(500).json({error:true, message: err.message})
        }
    },
    
    update: async (req, res) => {
    
        const id = req.params.id;
    
        try {
            const body = req.body
            const userDb = await mUser.update(id, body)
            if (userDb) {

                updatedUser = JSON.stringify(userDb)
                res.json({
                    error: false,
                    user: updateUser,
                    message: 'Usuario actualizado con exito'
                })
            } else {
                // usuario no encontrado
                res.status(404).json({error:true, message: err.message})
            }
        } catch (err) {
            res.status(500).json({error: true, message: 'Fallo el servidor'})
        }
    },

    delete: async(req, res) => {
        const id = req.params.id
        try {
            await mUser.delete(id)
            res.json({
                error: false,
                message: "Usuario eliminado"
            })
        } catch(err) {
            //recurso no encontrado con id
            res.status(404).json({
                error: true,
                message: err.message
            })
        }
    }

}

export default UserController;
// module.exports = UserController