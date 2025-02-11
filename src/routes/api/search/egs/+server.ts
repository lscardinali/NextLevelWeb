import type { GameSimple } from '$lib/models/game';
import { json, type RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const nameSearch = event.url.searchParams.get('name');

	if (!nameSearch) {
		return json({ error: 'No name search provided' }, { status: 400 });
	}

	const baseUrl = 'https://store.epicgames.com/graphql';

	const params = {
		operationName: 'searchStoreQuery',
		variables: {
			allowCountries: 'PT',
			category:
				'games/edition/base|bundles/games|games/edition|editors|addons|games/demo|software/edition/base|games/experience|subscription',
			count: 40,
			country: 'PT',
			keywords: 'quake',
			locale: 'en-US',
			sortBy: 'relevancy,viewableDate',
			sortDir: 'DESC,DESC',
			tag: '',
			withPrice: true
		},
		extensions: {
			persistedQuery: {
				version: 1,
				sha256Hash: '7d58e12d9dd8cb14c84a3ff18d360bf9f0caa96bf218f2c5fda68ba88d68a437'
			}
		}
	};

	// Create URLSearchParams from the objects
	const urlParams = new URLSearchParams();
	urlParams.append('operationName', params.operationName);
	urlParams.append('variables', JSON.stringify(params.variables));
	urlParams.append('extensions', JSON.stringify(params.extensions));

	// Construct the full URL
	const fullUrl = `${baseUrl}?${urlParams.toString()}`;

	console.log('Request URL:', fullUrl);

	const htmlResponse = await fetch(fullUrl);
	const jsonData = await htmlResponse.json();

	const elements = jsonData.data.Catalog.searchStore.elements;

	const results = elements.map(
		(element: { id: string; title: string; keyImages: { type: string; url: string }[] }) => {
			return {
				id: element.id,
				name: element.title,
				image: element.keyImages.filter(
					(image: { type: string; url: string }) => image.type === 'Thumbnail'
				)[0].url
			} as GameSimple;
		}
	);

	return json(results);
}
