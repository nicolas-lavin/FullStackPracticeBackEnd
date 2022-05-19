// Modelo creado
const Blog = require('../models/Blog.js');
// Metodos para el CRUD
// mostrar todos los registros
export const getAllBlogs = async (req,res) => {
    try{
        const blogs = await Blog.findAll();
        res.json(blogs);
    } catch(error){
        res.json({message: error.message});
    }
}
// Mostrar un solo registro
export const getBlog = async (req,res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        res.json(blog);
    } catch (error) {
        res.json({message: error.message});
    }
}
// Crear un registro
export const createBlog = async (req, res) => {
    try {
        await Blog.create(req.body);
        res.json({message: "Registro creado correctamente"})
    }catch (error){
        res.json({message: error.message});
    }
}
// Actualizar registro
export const updateBlog = async (req, res) => {
    try{
        await Blog.upsert({
            id: req.params.id, 
            title:req.body.title, 
            content:req.body.content
        });
        res.json({message: "Registro actualizado correctamente"})
    } catch (error){
        res.json({message: error.message});
    }
}
// Eliminar un registro
export const deleteBlog = async (req,res) => {
    try {
        Blog.destroy({
            where: {id : req.params.id} 
        });
        res.json({message: "Registro eliminado correctamente"})
    } catch (error) {
        res.json({message: error.message});
    }
}