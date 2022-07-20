import { Router } from 'express'
const router = Router();
import * as actividadcontroller from '../controllers/actividad.controller'

router.get('/', actividadcontroller.getActividad);
router.post('/create', actividadcontroller.postActividad);
router.put('/:id', actividadcontroller.updateActividad);
router.delete('/:id', actividadcontroller.deleteActividad);

export default router;