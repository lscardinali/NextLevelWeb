import { json } from '@sveltejs/kit';


export async function POST({ request }: { request: Request }) {

    console.log("fetching games")

	const { search } = await request.json();

    const gameData = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': '0z8ol6qxbcrapely6yubn372wqal89',
        'Authorization': `Bearer 5u9l7416z0wmo07voolghc2lvecxfp`,
        'Content-Type': 'application/json'
      },
      body: `fields name, cover.image_id; where name ~ *"${search}"* & release_dates.platform = (6) & version_parent = null;`
    });

    let gamesData = await gameData.json();

    console.log(gamesData)

	return json(gamesData);
}
