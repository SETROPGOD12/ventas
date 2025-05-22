import express from 'express';
import { crearCliente, obtenerClientes } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);

export default router;