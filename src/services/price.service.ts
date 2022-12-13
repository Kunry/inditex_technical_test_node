import { IPriceModel } from '@interfaces/price.interface';
import { priceQueryValidation } from '@validations/price.validation';
import { mappingPrice } from '../utils/price.mapping';
import { getPrices } from '../repository/price.repository';
import { NotFoundError } from '@errors/not_found.error';
import { PRICE_NOT_FOUND_ERROR } from '@constants/error_messages.constants';

export const getPrice = async ({
	brandId,
	productId,
	date
}: {
	brandId: string;
	productId: string;
	date: string;
}) => {
	await priceQueryValidation.validateAsync({ brandId, productId, date });
	const pricePostgres: IPriceModel = await getPrices({ brandId, productId, date });
	const price = mappingPrice(pricePostgres);
	if (!price) {
		throw new NotFoundError(PRICE_NOT_FOUND_ERROR);
	}
	return price;
};
