<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import GameCard from '$lib/components/game-card.svelte';
	import { onMount } from 'svelte';
	import type { GameSimple } from '$lib/models/game';

	let { data }: { data: PageData } = $props();

	let finalGames = $state<GameSimple[]>([]);

	let search = $state('');

	let filteredGames = $derived(
		finalGames.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
	);

	onMount(async () => {
		finalGames = await data.games;
		console.log('Games are ready');
	});
</script>

<div class="flex flex-col gap-2 p-4">
	{#await data.games}
		<div class="grid grid-cols-3 gap-2 p-2 pt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each Array(50) as _}
				<div class="skeleton h-32 rounded-xl"></div>
			{/each}
		</div>
	{:then games}
		{#if finalGames == undefined}
			<div class="flex flex-1 flex-col items-center justify-center">
				<p class="text-xl font-bold">Login and Link some accounts to see your games</p>
				<a href="/account" class="text-blue-500">Link Account</a>
			</div>
		{:else if finalGames.length > 0}
			<input
				type="text"
				placeholder="Search"
				class="rounded-2xl bg-neutral-800 p-4 py-3"
				bind:value={search}
			/>
			<div class="grid grid-cols-3 gap-2 p-2 pt-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
				{#each filteredGames as game, index}
					<div in:fade={{ delay: index * 25, duration: 200 }}>
						<GameCard {game} />
					</div>
				{/each}
			</div>
		{/if}
	{/await}
</div>
