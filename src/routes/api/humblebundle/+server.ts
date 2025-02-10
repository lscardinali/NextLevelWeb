import { parse } from 'node-html-parser';
import { json } from '@sveltejs/kit';

export interface HumbleBundle {
	name: string;
	productUrl: string;
	image: string;
	endDate: string;
}

export async function GET() {
	const response = await fetch('https://www.humblebundle.com/games');
	const responseHTML = await response.text();
	const root = parse(responseHTML);
	const jsonData = root.querySelector('#landingPage-json-data');
	const data = JSON.parse(jsonData?.textContent || '');

	const parsed = data.data.games.mosaic[0].products.map(
		(product: {
			tile_name: string;
			product_url: string;
			tile_image: string;
			'end_date|datetime': string;
		}) => ({
			name: product['tile_name'],
			productUrl: product['product_url'],
			image: product['tile_image'],
			endDate: new Date(product['end_date|datetime'])
		})
	) as HumbleBundle[];

	return json(parsed);
}
