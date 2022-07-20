import { pool } from '../database'

export const getDocumento = async (req,res)=>{
    try {
        const response = await pool.query('select * from documentos');
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json('Error al listar documentos')
    }
};
export const postDocumento = async (req, res) =>{
    try {
        const {idactividad, nombre, comentarios ,estado} = req.body;
        await pool.query('INSERT INTO documentos (idactividad, nombre, comentarios ,estado) VALUES ($1,$2,$3,$4)',[idactividad, nombre, comentarios ,estado]);
        return res.status(200).json({
            message: 'Documento registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Curso '+error.message);
    }
};
export const updateDocumento = async (req, res) =>{
    try {
        const id =parseInt(req.params.id);
        const {idactividad, nombre, comentarios ,estado} = req.body;
        await pool.query('update documentos set idactividad=$1, nombre =$2, comentarios=$3, estado =$4 where iddocumento =$5',[idactividad, nombre, comentarios ,estado,id]);
        return res.status(200).json({
            message: 'Documento modificado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al editar Documento '+error.message);
    }
};
export const deleteDocumento = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from documentos where iddocumento  = $1', [id]);
        return res.status(200).json({
            message: 'Documento eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar el documento');
    }
};