<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import GameCard from '$lib/components/game-card.svelte';

	let { data }: { data: PageData } = $props();

	// let shownGames = $state(100);
</script>

{#if data.games == null}
	<div class="flex flex-1 flex-col items-center justify-center">
		<p class="text-xl font-bold">Login and Link some accounts to see your games</p>
		<a href="/account" class="text-blue-500">Link Account</a>
	</div>
{:else if data.games.length > 0}
	<div class="grid grid-cols-3 gap-2 p-2 pt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each data.games as game, index}
			<div transition:fade={{ delay: index * 25, duration: 200 }}>
				<GameCard {game} />
			</div>
		{/each}
	</div>
{/if}
