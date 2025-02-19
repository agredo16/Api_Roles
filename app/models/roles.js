import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    permissions: [{ type: String }] // Lista de permisos asignados al rol
});

export default mongoose.model("Role", RoleSchema);
