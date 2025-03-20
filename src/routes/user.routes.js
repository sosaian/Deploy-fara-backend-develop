import express from "express";
import User from "../models/user.model.js";
// import authMiddleware from "../middlewares/auth.middleware.js"
// import { UserController } from "../controllers/user.controller.js"

const router = express.Router();

// router.put("/api/users", authMiddleware, UserController.update)
// router.delete("/api/users", authMiddleware, UserController.delete)

// Endpoint falso solamente para poder dejar comentado las otras rutas
// como ejemplos válidos.
router.delete("/api/users", () => console.log("delete some user"));

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al registrar el usuario", error });
  }
});

// Ruta para el inicio de sesión de un usuario
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Correo electrónico no registrado" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ message: "Error en el inicio de sesión", error });
  }
});

export default router;
