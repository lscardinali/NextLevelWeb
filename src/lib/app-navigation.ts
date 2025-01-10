interface NavigationItem {
	name: string;
	href: string;
	icon: string;
}

export const appNavigation: NavigationItem[] = [
	{
		name: 'Hub',
		href: '/hub',
		icon: 'home'
	},
	{
		name: 'Games',
		href: '/games',
		icon: 'games'
	},
	{
		name: 'Search',
		href: '/search',
		icon: 'search'
	},
	{
		name: 'Deals',
		href: '/deals',
		icon: 'home'
	},
	{
		name: 'Wishlist',
		href: '/wishlist',
		icon: 'home'
	}
];
