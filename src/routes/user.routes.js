import express from "express";
// import User from "../models/user.model.js";
// import authMiddleware from "../middlewares/auth.middleware.js"
import UserController  from "../controllers/user.controller.js"

const router = express.Router();

// Ruta para registrar un nuevo usuario
/**
 * @swagger
 * /users:
 *  post:
 *      summary: Crea un usuario
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/models/user.model'
 *      responses:
 *          201:
 *              description: El usuario fue creado con exito
 *              content: 
 *                  application/json:
 *                      schema:
 *                        $ref: '#/models/user.model'
 *          400:
 *              description: Error de solicitud
 *              
 * 
 */

router.post("/api/users/register", UserController.create)

/** 
 * @swagger
 * /users
 * 
*/

router.get("/api/users",  UserController.getAll)

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: Actualiza el usuario a partir de su id
 *      tags: [users]
 *      parameters:
 *          - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: El id de usuario a actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/models/user.model'
 *      responses:
 *          200:
 *              description: El usuario fue actualizado correctamente
 *              content:
 *                  application/json:
 *                      schema: 
 *                      $ref: '#/models/user.model'
 *          404:
 *              description: El usuario no fue encontrado
 *          500:
 *              description: Algun error ocurrio en el servidor
 * 
 */
router.put("/api/users/:id",  UserController.update)

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Elimina al usuario a partir de su id
 *      tags: [users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: El id del usuario
 *      responses:
 *          200:
 *              description: El usuario fue eliminado
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/users'
 *          404:
 *              description: El usuario no fue encontrado
 * 
 */
router.delete("/api/users/:id", UserController.delete)



export default router;
