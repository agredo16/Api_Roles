import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./app/config/dbClient.js"; 
import roleRoutes from "./app/routes/rolesRoutes.js";
import Role from "./app/models/roles.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/roles", roleRoutes); 


const initializeRoles = async () => {
    const predefinedRoles = [
        { name: "super_admin", permissions: ["all"] },
        { name: "admin", permissions: ["manage_users", "manage_samples"] },
        { name: "laboratorista", permissions: ["view_samples", "edit_samples"] },
        { name: "cliente", permissions: ["view_results"] }
    ];

    for (const role of predefinedRoles) {
        const existingRole = await Role.findOne({ name: role.name });
        if (!existingRole) {
            await new Role(role).save();
            console.log(`✔️ Rol "${role.name}" creado`);
        }
    }
};

connectDB().then(async () => {
    await initializeRoles(); 
    app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
}).catch(error => {
    console.error("Error al conectar a la base de datos:", error);
});
