import type { IconName } from '$lib/components/icon.svelte';

interface NavigationItem {
	name: string;
	href: string;
	icon: IconName;
}

export const appNavigation: NavigationItem[] = [
	{
		name: 'Hub',
		href: '/hub',
		icon: 'hub'
	},
	{
		name: 'My Games',
		href: '/games',
		icon: 'games'
	},
	{
		name: 'Search',
		href: '/search',
		icon: 'search'
	},
	{
		name: 'Account',
		href: '/account',
		icon: 'account'
	}
];
