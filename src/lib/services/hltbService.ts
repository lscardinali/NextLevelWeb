export async function getHLTBData(gameName: string) {
	const gameLookupURL = 'https://howlongtobeat.com/api/lookup/e6e71df581a39f40';
	console.log(gameName);

	const requestBody = {
		searchType: 'games',
		searchTerms: gameName.split(' '),
		searchPage: 1,
		size: 20,
		searchOptions: {
			games: {
				userId: 0,
				platform: '',
				sortCategory: 'popular',
				rangeCategory: 'main',
				rangeTime: {
					min: null,
					max: null
				},
				gameplay: {
					perspective: '',
					flow: '',
					genre: '',
					difficulty: ''
				},
				rangeYear: {
					min: '',
					max: ''
				},
				modifier: ''
			},
			users: {
				sortCategory: 'postcount'
			},
			lists: {
				sortCategory: 'follows'
			},
			filter: '',
			sort: 0,
			randomizer: 0
		},
		useCache: true
	};

	try {
		const response = await fetch(gameLookupURL, {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
				Referer: 'https://howlongtobeat.com/'
			}
		});

		console.log('HLTB Response:', response.json);
		return await response.text();
	} catch (error) {
		console.error('Error looking up game:', error);
		throw error;
	}
}
