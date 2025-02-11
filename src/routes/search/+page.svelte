<script lang="ts">
	import GameCard from '$lib/components/game-card.svelte';
	import Header from '$lib/components/header.svelte';
	import SearchBar from '$lib/components/searchBar.svelte';
	import IconXbox from '$lib/icons/IconXbox.svelte';
	import type { GameSimple } from '$lib/models/game';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import type { PageData } from './$types';

	let search = $state('');

	let games = $state<GameSimple[]>([]);

	async function searchGames() {
		const response = await fetch(`/api/search/steam?name=${search}`);
		games = (await response.json()) as GameSimple[];
	}
</script>

<div class="mt-safe-or-4 m-4 flex flex-row items-center gap-4">
	<span class="flex-1">
		<SearchBar bind:value={search} onSearch={searchGames} />
	</span>
	<select class=" h-9 rounded-xl bg-neutral-800 px-4 text-sm text-white">
		<option value="relevance"> <IconXbox class="h-4 w-4" />Xbox</option>
		<option value="rating">Rating</option>
		<option value="release">Release Date</option>
		<option value="name">Name</option>
	</select>
</div>
{#if games.length == 0}
	<div class="flex flex-1 flex-col items-center justify-center">
		<p class="text-xl font-bold">Start searching for games</p>
		<p class="text-sm text-neutral-400">Search for games by name, genre, platform, or developer.</p>
	</div>
{/if}
<div class="grid grid-cols-3 gap-2 p-2 pt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each games as game, index}
		<div transition:blur={{ delay: index * 25, duration: 200 }}>
			<GameCard {game} />
		</div>
	{/each}
</div>
