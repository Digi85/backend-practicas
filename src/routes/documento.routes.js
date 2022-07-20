import { Router } from 'express'
const router = Router();
import * as documentocontroller from '../controllers/documento.controller'

router.get('/', documentocontroller.getDocumento);
router.post('/create', documentocontroller.postDocumento);
router.put('/:id', documentocontroller.updateDocumento);
router.delete('/:id', documentocontroller.deleteDocumento);

export default router;