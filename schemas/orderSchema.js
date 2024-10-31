import Joi from 'joi';

export const createOrderSchema = Joi.object({
  userid: Joi.number().integer().positive().required().messages({
      "number.base": "User ID must be a number.",
      "number.integer": "User ID must be an integer.",
      "number.positive": "User ID must be a positive number.",
      "any.required": "User ID is required.",
    }),

    products: Joi.array().items(Joi.object({
      productId: Joi.number().integer().positive().required().messages({
          "number.base": "Product ID must be a number.",
          "number.integer": "Product ID must be an integer.",
          "number.positive": "Product ID must be a positive number.",
          "any.required": "Product ID is required.",
        }),

        quantity: Joi.number().integer().positive().required().messages({
          "number.base": "Quantity must be a number.",
          "number.integer": "Quantity must be an integer.",
          "number.positive": "Quantity must be a positive number.",
          "any.required": "Quantity is required.",
        }),
    }))
    .required().messages({
      "array.base": "Products must be an array.",
      "any.required": "Products are required.",
    }),
  total: Joi.number().positive().required().messages({
      "number.base": "Total must be a number.",
      "number.positive": "Total must be a positive number.",
      "any.required": "Total is required.",
    }),
});

export const updateOrderSchema = Joi.object({
  userid: Joi.number().integer().positive().optional().messages({
      "number.base": "User ID must be a number.",
      "number.integer": "User ID must be an integer.",
      "number.positive": "User ID must be a positive number.",
    }),
  products: Joi.array().items(Joi.object({
      productId: Joi.number().integer().positive().optional().messages({
          "number.base": "Product ID must be a number.",
          "number.integer": "Product ID must be an integer.",
          "number.positive": "Product ID must be a positive number.",
        }),
      quantity: Joi.number().integer().positive().optional().messages({
          "number.base": "Quantity must be a number.",
          "number.integer": "Quantity must be an integer.",
          "number.positive": "Quantity must be a positive number.",
        }),
    }))
    .optional().messages({
      "array.base": "Products must be an array.",
    }),
  total: Joi.number().positive().optional().messages({
      "number.base": "Total must be a number.",
      "number.positive": "Total must be a positive number.",
    }),
});