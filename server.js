import express from "express";
import mongoose from "mongoose";
import roleRoutes from "./app/routes/rolesRoutes.js";
import dbClient from "./app/config/dbClient.js"; 
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/roles", roleRoutes); // Rutas de roles

dbClient.connect().then(() => {
    app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
});
