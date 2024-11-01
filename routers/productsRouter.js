import express from "express"
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js"
import { validateCreateProduct, validateUpdateProduct } from '../middleware/validationMiddleware.js';

export const productsRouter = express.Router();

// Validation middleware
productsRouter.post('/', validateCreateProduct, createProduct);
productsRouter.put('/:id', validateUpdateProduct, updateProduct);
// Without validation middleware
productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProductById);
productsRouter.delete('/:id', deleteProduct);