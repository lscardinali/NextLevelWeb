<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import GameCard from '$lib/components/game-card.svelte';
	import { onMount } from 'svelte';
	import type { GameSimple } from '$lib/models/game';

	let { data }: { data: PageData } = $props();

	let finalGames = $state<GameSimple[]>([]);

	onMount(async () => {
		finalGames = await data.games;
		console.log('Games are ready');
	});
</script>

{#await data.games}
	<div class="flex flex-1 flex-col items-center justify-center">
		<p class="text-xl font-bold">Loading...</p>
	</div>
{:then games}
	{#if finalGames == undefined}
		<div class="flex flex-1 flex-col items-center justify-center">
			<p class="text-xl font-bold">Login and Link some accounts to see your games</p>
			<a href="/account" class="text-blue-500">Link Account</a>
		</div>
	{:else if finalGames.length > 0}
		<div class="grid grid-cols-3 gap-2 p-2 pt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each finalGames as game, index}
				<div transition:fade={{ delay: index * 25, duration: 200 }}>
					<GameCard {game} />
				</div>
			{/each}
		</div>
	{/if}
{/await}
