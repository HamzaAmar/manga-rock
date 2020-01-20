import Joi from '@hapi/joi';

const genreEnum = [
  'Action',
  'Comedy',
  'Drama',
  'Erotica',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Sport',
  'Adventure',
  'Super Naturel',
  'Music',
  'Ecchi',
  'Seinen',
  'Slice of life'
];
const genderEnum = ['Male', 'Female'];

export const RegisterValidation = body => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .trim()
      .min(2)
      .max(30)
      .required(),
    email: Joi.string()
      .email()
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .max(25)
      .trim()
      .required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
  });
  return schema.validate(body);
};

export const LoginValidation = body => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .max(25)
      .trim()
      .required()
  });
  return schema.validate(body);
};
export const ForgetRequestValidation = body => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .trim()
      .required()
  });
  return schema.validate(body);
};

export const ForgetPasswordValidation = body => {
  const schema = Joi.object().keys({
    password: Joi.string()
      .min(6)
      .max(25)
      .trim()
      .required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
  });
  return schema.validate(body);
};

export const authorValidation = body => {
  const Schema = Joi.object().keys({
    name: Joi.string()
      .trim()
      .required(),
    gender: Joi.string().valid(genderEnum)
  });
  return Schema.validate(body);
};

export const mangaValidation = body => {
  const Schema = Joi.object().keys({
    name: Joi.string()
      .trim()
      .required(),
    description: Joi.string()
      .trim()
      .required(),
    genres: Joi.array()
      .items(Joi.string().required())
      .valid(genreEnum)
      .required(),
    published: Joi.date().less(new Date()),
    author: Joi.array()
      .items(Joi.string().required())
      .required(),
    isCompleted: Joi.bool()
  });
  return Schema.validate(body);
};
export const episodeValidation = body => {
  const Schema = Joi.object().keys({
    title: Joi.string()
      .trim()
      .required(),
    number: Joi.number()
      .integer()
      .required(),
    manga: Joi.string().required()
  });
  return Schema.validate(body);
};
