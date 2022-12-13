import client from '../loaders/db.loader';

export const getPrices = async ({
	brandId,
	productId,
	date
}: {
	brandId: string;
	productId: string;
	date: string;
}) => {
	const query = `SELECT * FROM PRICES WHERE brand_id = ${brandId} AND product_id = ${productId} AND start_date <= '${date}' AND end_date >= '${date}' ORDER BY priority DESC`;
	const { rows } = await client.query(query);
	return rows[0];
};
