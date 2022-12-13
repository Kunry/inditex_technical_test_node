export interface IPriceModel {
	id: number;
	brand_id: number;
	start_date: string;
	end_date: string;
	price_list: number;
	product_id: number;
	priority: number;
	price: string;
	curr: string;
}

export type TPrice = {
	product_id: number;
	brand_id: number;
	start_date: string;
	end_date: string;
	price: string;
	price_list: number;
}
