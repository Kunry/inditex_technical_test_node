import joi from 'joi';

export const priceQueryValidation = joi.object({
	productId: joi.string().required(),
	brandId: joi.string().required(),
	date: joi.string().required()
});
