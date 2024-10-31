import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';
import { validateCreateProduct, validateUpdateProduct } from '../middleware/validationMiddleware.js';

const router = express.Router();

// Validation middleware
router.post('/', validateCreateProduct, createProduct);
router.put('/:id', validateUpdateProduct, updateProduct);
// Without validation middleware
router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);

export default router;