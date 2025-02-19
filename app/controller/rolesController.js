import Role from "../models/roles.js";

// Crear un nuevo rol
export const createRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;
        const role = new Role({ name, permissions });
        await role.save();
        res.status(201).json({ message: "Rol creado con éxito", role });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el rol", error });
    }
};

// Obtener todos los roles
export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener roles", error });
    }
};

// Actualizar un rol
export const updateRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;
        const role = await Role.findByIdAndUpdate(req.params.id, { name, permissions }, { new: true });
        res.status(200).json({ message: "Rol actualizado", role });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el rol", error });
    }
};

// Eliminar un rol
export const deleteRole = async (req, res) => {
    try {
        await Role.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Rol eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el rol", error });
    }
};
