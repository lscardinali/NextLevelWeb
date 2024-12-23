import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params }) => {

    const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${params.id}&cc=US`);
    const data = await response.json();

    return {
        gameInfo: data[params.id].data as SteamGame,
    };
};