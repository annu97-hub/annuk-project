const Joi = require('@hapi/joi')

exports.vRegister = Joi.object({
  email: Joi.string().lowercase().required(),
  password: Joi.string().required(),
  pin: Joi.number(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().lowercase().required(),
  countryId: Joi.string(),
  dateOfBirth: Joi.string(),
  roleId: Joi.number(),
  status: Joi.number(),
  deviceId: Joi.string()
})

exports.vVerifyOtp = Joi.object({
  email: Joi.string().required(),
  otpCode: Joi.number().required()
})

exports.vSendOtp = Joi.object({
  email: Joi.string().required()
})

exports.vLogin = Joi.object({
  email: Joi.string().lowercase().required(),
  pin: Joi.number(),
  password: Joi.string(),
  loginType: Joi.string(),
  deviceId: Joi.string().allow(null, '')
})

exports.vResetPin = Joi.object({
  email: Joi.string().required()
})