export interface Game {
	id: string;
	platform: string;
	name: string;
	free: boolean;
	storeLink: string;
	gameDescription: string;
	releaseDate: string;
	languages: string[];
	developers: string[];
	publishers: string[];
	pcPlatforms: {
		windows: boolean;
		mac: boolean;
		linux: boolean;
	};
	genres: string[];
	backgroundImage?: string;
	videos?: string[];
	screenshots: {
		thumbnail: string;
		full: string;
	}[];
}

export interface GameSimple {
	id: string;
	name: string;
	image: string;
	logo?: string;
}
