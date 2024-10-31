import express from "express"
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js"
import { validateCreateCategory, validateUpdateCategory } from '../middleware/validationMiddleware.js';

export const categoryRouter = express.Router()

// Validation middleware
categoryRouter.post('/', validateCreateCategory, createCategory); 
categoryRouter.put('/:id', validateUpdateCategory, updateCategory);
// Without validation middleware
categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.delete('/:id', deleteCategory);
