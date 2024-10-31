import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';
import { validateCreateCategory, validateUpdateCategory } from '../middleware/validationMiddleware.js';

const router = express.Router();

// Validation middleware
router.post('/', validateCreateCategory, createCategory); 
router.put('/:id', validateUpdateCategory, updateCategory);
// Without validation middleware
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategory);

export default router;
