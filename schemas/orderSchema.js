import Joi from 'joi';

export const createOrderSchema = Joi.object({
  userId: Joi.number().integer().required(),
  products: Joi.array()
    .items(Joi.object({
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().positive().required(),
    }))
    .required(),
  total: Joi.number().positive().required(),
});

export const updateOrderSchema = Joi.object({
  userId: Joi.number().integer().optional(),
  products: Joi.array()
    .items(Joi.object({
      productId: Joi.number().integer().optional(),
      quantity: Joi.number().integer().positive().optional(),
    }))
    .optional(),
  total: Joi.number().positive().optional(),
});
