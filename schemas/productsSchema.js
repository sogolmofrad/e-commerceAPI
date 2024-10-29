import Joi from "joi";

export const createProductsSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  categoryId: Joi.number().required(),
});

export const updateProductsSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  categoryId: Joi.number().required(),
});
