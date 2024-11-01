import Joi from 'joi';

export const createUserSchema = Joi.object({
first_name: Joi.string().pattern(/^[A-Za-z]+$/).min(2).max(30).required().messages({
    'string.empty': 'First Name is required',
    'string.pattern.base': 'First Name should contain only letters',
    'string.min': 'First Name should have a minimum length of 2',
    'string.max': 'First Name should have a maximum length of 30',
  }),

  last_name: Joi.string().pattern(/^[A-Za-z]+$/).min(2).max(30).required().messages({
    'string.empty': 'Last Name is required',
    'string.pattern.base': 'Last Name should contain only letters',
    'string.min': 'Last Name should have a minimum length of 2',
    'string.max': 'Last Name should have a maximum length of 30',
  }),

  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format',
    'string.empty': 'Email is required',
  }),

  password: Joi.string().min(4).required().messages({
    'string.min': 'Password should be at least 4 characters',
    'string.empty': 'Password is required',
  }),
});

export const updateUserSchema = Joi.object({
first_name: Joi.string().pattern(/^[A-Za-z]+$/).min(2).max(30).optional().messages({
    'string.empty': 'First Name is required',
    'string.pattern.base': 'First Name should contain only letters',
    'string.min': 'First Name should have a minimum length of 2',
    'string.max': 'First Name should have a maximum length of 30',
  }),

  last_name: Joi.string().pattern(/^[A-Za-z]+$/).min(2).max(30).optional().messages({
    'string.empty': 'Last Name is required',
    'string.pattern.base': 'Last Name should contain only letters',
    'string.min': 'Last Name should have a minimum length of 2',
    'string.max': 'Last Name should have a maximum length of 30',
  }),

  email: Joi.string().email().optional().messages({
    'string.email': 'Invalid email format',
    'string.empty': 'Email is required',
  }),

  password: Joi.string().min(4).optional().messages({
    'string.min': 'Password should be at least 4 characters',
    'string.empty': 'Password is required',
  }),
});
