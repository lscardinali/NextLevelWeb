interface SteamGame {
	name: string;
	header_image: string;
	about_the_game: string;
	background: string;
	background_raw: string;
	movies: [SteamGameMovie];
	screenshots: [SteamGameScreenshot];
	is_free: boolean;
}

interface SteamGameMovie {
	webm: SteamGameMovieResolution;
}

interface SteamGameMovieResolution {
	480: string;
}

interface SteamGameScreenshot {
	path_full: string;
}
