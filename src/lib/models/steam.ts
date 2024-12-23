

interface SteamGame {
    name: string;
    header_image: string;
    about_the_game: string;
    movies: [SteamGameMovie];
    is_free: boolean;
}

interface SteamGameMovie {
    mp4: SteamGameMovieResolution
}

interface SteamGameMovieResolution {
    480: string;
    max: string;
}
interface SteamGameResponse {
    data: SteamGame;
}