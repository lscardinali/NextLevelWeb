import type { GameSimple } from '$lib/models/game';
import { json, type RequestEvent } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

export async function GET(event: RequestEvent) {
	const nameSearch = event.url.searchParams.get('name');

	if (!nameSearch) {
		return json({ error: 'No name search provided' }, { status: 400 });
	}

	const htmlResponse = await fetch(
		`https://store.steampowered.com/search/results?term=${nameSearch}&force_infinite=0&category1=998&supportedlang=english`
	);

	const html = await htmlResponse.text();

	const root = parse(html);
	const aTags = root.querySelectorAll('a');

	const results = aTags
		.map((aTag) => {
			const title = aTag.querySelector('.title')?.textContent;
			if (title && title.toLowerCase().includes(nameSearch.toLowerCase())) {
				console.log(aTag.querySelector('.title')?.textContent);
				return {
					id: aTag.getAttribute('data-ds-appid'),
					name: aTag.querySelector('.title')?.textContent
				} as GameSimple;
			} else {
				return undefined;
			}
		})
		.filter((result) => result !== undefined);

	return json(results);
}
