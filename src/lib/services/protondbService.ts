export enum ProtonDBTier {
	Platinum = 'Platinum',
	Gold = 'Gold',
	Silver = 'Silver',
	Bronze = 'Bronze',
	Borked = 'Borked'
}

export async function getProtonDBTier(steamId: string) {
	const response = await fetch(`https://www.protondb.com/api/v1/reports/summaries/${steamId}.json`);
	const data = await response.json();
	switch (data.tier) {
		case 'platinum':
			return ProtonDBTier.Platinum;
		case 'gold':
			return ProtonDBTier.Gold;
		case 'silver':
			return ProtonDBTier.Silver;
		case 'bronze':
			return ProtonDBTier.Bronze;
		case 'borked':
			return ProtonDBTier.Borked;
	}
}

export enum SteamDeckVerificationStatus {
	Verified = 'Verified',
	Playable = 'Playable',
	Unknown = 'Unknown',
	Unsupported = 'Unsupported'
}

export async function getSteamDeckVerificationStatus(gameId: string) {
	try {
		const response = await fetch(
			`https://www.protondb.com/proxy/steam/deck-verified?nAppID=${gameId}`
		);
		const data = await response.json();
		if (!data?.success || data.success !== 1) {
			return SteamDeckVerificationStatus.Unknown;
		}

		const category = data.results.resolved_category;
		const statusMap: Record<number, SteamDeckVerificationStatus> = {
			1: SteamDeckVerificationStatus.Unsupported,
			2: SteamDeckVerificationStatus.Playable,
			3: SteamDeckVerificationStatus.Verified
		};

		return statusMap[category] || SteamDeckVerificationStatus.Unknown;
	} catch (error) {
		console.error('Error fetching Steam Deck verification status:', error);
		return SteamDeckVerificationStatus.Unknown;
	}
}
