import { pool } from '../database'

export const getActividad = async (req,res)=>{
    try {
        const response = await pool.query('select * from actividades');
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json('Error al listar actividades')
    }
};
export const postActividad = async (req, res) =>{
    try {
        const {idcurso, nombre, descripcion , fecha_inicio , fecha_fin ,estado} = req.body;
        await pool.query('INSERT INTO actividades (idcurso, nombre, descripcion , fecha_inicio , fecha_fin ,estado) VALUES ($1,$2,$3,$4,$5,$6)',[idcurso, nombre, descripcion , fecha_inicio , fecha_fin ,estado]);
        return res.status(200).json({
            message: 'Actividad registrada correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar actividad '+error.message);
    }
};
export const updateActividad = async (req, res) =>{
    try {
        const id =parseInt(req.params.id);
        const {idcurso, nombre, descripcion , fecha_inicio , fecha_fin ,estado} = req.body;
        await pool.query('update actividades set idcurso =$1, nombre =$2, descripcion =$3, fecha_inicio =$4, fecha_fin =$5, estado =$6 where idactividad =$7',[idcurso, nombre, descripcion , fecha_inicio , fecha_fin ,estado]);
        return res.status(200).json({
            message: 'Actividades modificado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al editar Actividades '+error.message);
    }
};
export const deleteActividad = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from actividades where idactividad  = $1', [id]);
        return res.status(200).json({
            message: 'Actividad eliminada correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar el actividad');
    }
};
