import { Request, Response, NextFunction } from 'express';
import { getPrice } from '../services/price.service';

export const GetPrice = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { brandId, productId, date } = req.query as { brandId: string; productId: string; date: string };
		const price = await getPrice({ brandId, productId, date });
		res.status(200).json(price);
	} catch (error) {
		next(error);
	}
};
