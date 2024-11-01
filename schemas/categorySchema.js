import Joi from 'joi';

export const createCategorySchema = Joi.object({
  id: Joi.forbidden().messages({
    'any.unknown': 'ID is not allowed',
  }),
  name: Joi.string().required().messages({
  'string.empty': 'Name is required',
})
});

export const updateCategorySchema = Joi.object({
  id: Joi.forbidden().messages({
    'any.unknown': 'ID is not allowed',
  }),
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
})
});
