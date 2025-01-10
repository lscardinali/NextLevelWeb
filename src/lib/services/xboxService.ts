export interface Game {
	id: string;
	name: string;
	image: string;
	achievements: {
		name: string;
		image: string;
	}[];
	description: string;
	screenshots: string[];
	platform: Platform;
}

export enum Platform {
	Steam = 'steam',
	Xbox = 'xbox'
}

export async function getAllGamePassGameIDs() {
	const response = await fetch(
		'https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US'
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();

	const gameIdArray = data.map((product: any) => product.id).filter(Boolean);

	return gameIdArray;
}

export async function getGamePassGamesInfo(gameIds: string[], page: number, pageSize: number = 400) {
	const start = page * pageSize;
	const end = start + pageSize;
	const pageIds = gameIds.slice(start, end);

	// If no more ids to fetch, return null or empty array
	if (pageIds.length === 0) {
		return [];
	}

	const allGamesIds = pageIds.reduce((acc: string, item: any) => {
		return acc ? `${acc},${item}` : item;
	}, '');

	const response = await fetch(
		`https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${allGamesIds}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const allGames = await response.json();

	try {
		let response = allGames.Products.map((product: any) => {
			let localizedProperties = product.LocalizedProperties[0];

			return {
				id: product.ProductId,
				name: localizedProperties.ProductTitle,
				image:
					'https:' +
					localizedProperties.Images.find((image: any) => image.ImagePurpose === 'Poster').Uri,
				screenshots: localizedProperties.Images.map((image: any) => 'https:' + image.Uri)
			};
		});

		console.log(response);
		return response as Game[];
	} catch (error) {
		console.error(error);
	}
}
