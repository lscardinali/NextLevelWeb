

interface SteamGame {
    name: string;
    header_image: string;
    about_the_game: string;
    movies: [SteamGameMovie];
    screenshots: [SteamGameScreenshot];
    is_free: boolean;
}

interface SteamGameMovie {
    mp4: SteamGameMovieResolution
}

interface SteamGameMovieResolution {
    480: string;
    max: string;
}

interface SteamGameScreenshot {
    path_full: string;
}

interface SteamGameResponse {
    data: SteamGame;
}