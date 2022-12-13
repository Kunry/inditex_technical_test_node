import app from '../../app';
import request from 'supertest';

// group test using describe
describe('GET /api/price', () => {
	it('Test 1: petición a las 10:00 del día 14 del producto 35455 para la brand 1 (ARA)', async () => {
		const date = '2020-06-14T10:00:00.000',
			productId = '35455',
			brandId = '1';
		const res = await request(app)
			.get(`/api/price?date=${date}&productId=${productId}&brandId=${brandId}`)
			.send();

		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			brand_id: 1,
			product_id: 35455,
			price_list: 1,
			start_date: new Date('2020-06-14T00:00:00.000').toISOString(),
			end_date: new Date('2020-12-31T23:59:59.000').toISOString(),
			price: "35.50"
		});
	});
	it('Test 2: petición a las 16:00 del día 14 del producto 35455 para la brand 1 (ARA)', async () => {
		const date = '2020-06-14T16:00:00.000Z',
			productId = '35455',
			brandId = '1';
		const res = await request(app)
			.get(`/api/price?date=${date}&productId=${productId}&brandId=${brandId}`)
			.send();

		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			product_id: 35455,
			brand_id: 1,
			price_list: 2,
			price: '25.45',
			start_date: new Date('2020-06-14T15:00:00.000').toISOString(),
			end_date: new Date('2020-06-14T18:30:00.000').toISOString()
		});
	});
	it('Test 3: petición a las 21:00 del día 14 del producto 35455 para la brand 1 (ZARA)', async () => {
		const date = '2020-06-14T21:00:00.000',
			productId = '35455',
			brandId = '1';
		const res = await request(app)
			.get(`/api/price?date=${date}&productId=${productId}&brandId=${brandId}`)
			.send();

		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			product_id: 35455,
			brand_id: 1,
			price_list: 1,
			price: '35.50',
			start_date: new Date('2020-06-14T00:00:00.000').toISOString(),
			end_date: new Date('2020-12-31T23:59:59.000').toISOString()
		});
	});
	it('Test 4: petición a las 10:00 del día 15 del producto 35455   para la brand 1 (ARA)', async () => {
		const date = '2020-06-15T10:00:00.000',
			productId = '35455',
			brandId = '1';
		const res = await request(app)
			.get(`/api/price?date=${date}&productId=${productId}&brandId=${brandId}`)
			.send();

		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			product_id: 35455,
			brand_id: 1,
			price_list: 3,
			price: '30.50',
			start_date: new Date('2020-06-15T00:00:00.000').toISOString(),
			end_date: new Date('2020-06-15T11:00:00.000').toISOString()
		});
	});
	it('Test 5: petición a las 21:00 del día 16 del producto 35455 para la brand 1 (ARA)', async () => {
		const date = '2020-06-16T21:00:00.000',
			productId = '35455',
			brandId = '1';
		const res = await request(app)
			.get(`/prices?date=${date}&productId=${productId}&brandId=${brandId}`)
			.send();

		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(404);
	});
});
