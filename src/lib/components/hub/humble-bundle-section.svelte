<script lang="ts">
	import IconHumbleBundle from '$lib/icons/IconHumbleBundle.svelte';
	import { fade, slide } from 'svelte/transition';
	import type { HumbleBundle } from '../../../routes/api/humblebundle/+server';

	let { bundles }: { bundles: Promise<HumbleBundle[]> } = $props();

	function getRemainingTime(dateString: string): string {
		const now = new Date();
		const date = new Date(dateString);
		const diff = date.getTime() - now.getTime();

		if (diff <= 0) return '';

		const msInDay = 24 * 60 * 60 * 1000;
		const msInHour = 60 * 60 * 1000;
		const msInMinute = 60 * 1000;

		if (diff >= msInDay) {
			const days = Math.floor(diff / msInDay);
			let remaining = days === 1 ? 'Day' : 'Days';
			return `${days} ${remaining} left`;
		} else {
			const hours = Math.floor(diff / msInHour);
			const minutes = Math.floor((diff % msInHour) / msInMinute);
			let remaining = hours === 1 ? 'hour' : 'hours';
			let remainingMinutes = minutes === 1 ? 'minute' : 'minutes';
			return `${hours} ${remaining} and ${minutes} ${remainingMinutes} left`;
		}
	}
</script>

<section class="my-2 flex flex-row items-center gap-2">
	<span class="text-red-500">
		<IconHumbleBundle class="size-5" />
	</span>
	<h2 class="text-xl font-bold">Humble Bundles</h2>
</section>

<div class="grid grid-cols-2 gap-2">
	{#await bundles}
		<div transition:fade={{ duration: 100 }} class="skeleton h-32 w-full rounded-xl"></div>
		<div transition:fade={{ duration: 100 }} class="skeleton h-32 w-full rounded-xl"></div>
	{:then bundles}
		{#each bundles as bundle, index}
			<a
				transition:fade|global={{ duration: 300, delay: 100 }}
				href={'https://humblebundle.com' + bundle.productUrl}
				target="_blank"
				class="relative flex h-32 overflow-hidden rounded-xl transition-all hover:scale-105"
			>
				<img class="absolute h-full w-full object-cover" alt="Humble Bundle" src={bundle.image} />
				<div class="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/90 to-transparent"></div>
				<h1 class="absolute top-2 left-2 rounded-md bg-black/50 p-2 text-xs backdrop-blur-xl">
					{getRemainingTime(bundle.endDate)}
				</h1>
				<h1 class="absolute bottom-2 left-2 ">
					{bundle.name}
				</h1>
			</a>
		{/each}
	{/await}
</div>
