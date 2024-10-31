import { createCategorySchema, updateCategorySchema } from '../schemas/categorySchema.js';
import { createOrderSchema, updateOrderSchema } from '../schemas/orderSchema.js';
import { createProductsSchema, updateProductsSchema } from '../schemas/productsSchema.js';
import { createUserSchema, updateUserSchema } from '../schemas/userSchema.js';

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

export const validateCreateCategory = validationMiddleware(createCategorySchema);
export const validateUpdateCategory = validationMiddleware(updateCategorySchema);
export const validateCreateOrder = validationMiddleware(createOrderSchema);
export const validateUpdateOrder = validationMiddleware(updateOrderSchema);
export const validateCreateProduct = validationMiddleware(createProductsSchema);
export const validateUpdateProduct = validationMiddleware(updateProductsSchema);
export const validateCreateUser = validationMiddleware(createUserSchema);
export const validateUpdateUser = validationMiddleware(updateUserSchema);
