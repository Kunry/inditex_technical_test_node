import { GetPrice } from '@controllers/price.controller';
import express from 'express';

const router = express.Router();

router.get('/', GetPrice);

export const PriceRoute = { path: '/price', router };
