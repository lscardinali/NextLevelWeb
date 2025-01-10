import { parse } from 'node-html-parser';

export interface HumbleBundle {
	tile_name: string;
	product_url: string;
	tile_image: string;
}

export async function getHumbleBundle() {
	const response = await fetch('https://www.humblebundle.com/games');
	const responseHTML = await response.text();
	const root = parse(responseHTML);
	const json = root.querySelector('#landingPage-json-data');
	const data = JSON.parse(json?.textContent || '');

	return data.data.games.mosaic[0].products as HumbleBundle[];
}
