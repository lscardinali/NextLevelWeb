import axios from 'axios';
import { parse } from 'node-html-parser';

export interface ShareDeckConfig {
	label: string;
	time: string;
}

export async function getShareDeckConfigs(gameId: string): Promise<string | null> {
	try {
		const response = await axios.get(`https://sharedeck.games/reports?app_id=${gameId}`);
		const root = parse(response.data);

		const main = root.querySelector('main');
		const section = main?.querySelector('section');
		const div = section?.querySelector('div');
		const configElements = div?.querySelectorAll('a');

		const configs =
			configElements?.map((config) => {
				const spans = config.querySelectorAll('span');
				return {
					label: spans[0].text.trim(),
					time: spans[1].text.trim().replace(/\s/g, '').replace('h', 'h ')
				};
			}) || [];

		return configs.find((config) => config.label === 'All')?.time ?? null;
	} catch (error) {
		console.error('Error fetching ShareDeck configurations:', error);
		throw new Error('Failed to fetch ShareDeck configurations');
	}
}
