import { IPriceModel, TPrice } from "@interfaces/price.interface";

export const mappingPrice = (pricePostgres: IPriceModel): TPrice => {
	const { product_id, brand_id, price_list, price, start_date, end_date } = pricePostgres;
	return { product_id, brand_id, price_list, price, start_date, end_date };
};
