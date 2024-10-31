import Joi from "joi";

export const createProductsSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name should have a minimum length of 2',
    'string.max': 'Name should have a maximum length of 30',
  })
    ,
  description: Joi.string().min(2).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description should have a minimum length of 2',
  })
    ,
  price: Joi.number().integer().min(0).required().messages({
    'number.empty': 'Price is required',
    'number.min': 'Price should be a positive number',
  })
    ,
  categoryId: Joi.number().required(),
});

export const updateProductsSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name should have a minimum length of 2',
    'string.max': 'Name should have a maximum length of 30',
  })
    ,
  description: Joi.string().min(2).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description should have a minimum length of 2',
  })
    ,
  price: Joi.number().integer().min(0).optional().messages({
    'number.empty': 'Price is required',
    'number.min': 'Price should be a positive number',
  })
    ,
  categoryId: Joi.number().required(),
});
