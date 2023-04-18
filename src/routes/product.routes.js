import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/create', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);


export default router;