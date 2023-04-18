import { Router } from 'express';
import productRoutes from './product.routes.js';
import { generateProduct } from "../utils.js";

const router = Router();

router.use('/products', productRoutes);


router.get('/mockingproducts', (req, res) => {
    const products = []
  
    for (let i = 0; i < 100; i++) {
      products.push(generateProduct())
    }
  
    res.json(products)
  })

export default router;