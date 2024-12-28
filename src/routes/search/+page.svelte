<script lang="ts">
	import GameCard from '$lib/components/game-card.svelte';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';

	let search = $state('');

	let games = $state<IGDBGame[]>([]);

	let searchTimeout: number | null = null;

	async function searchGames() {
		console.log('searching games');
		const response = await fetch('/search', {
			method: 'POST',
			body: JSON.stringify({ search })
		});
		games = await response.json();
	}

	function onSearchChange(e: Event) {
		console.log('onSearchChange');
		if (search.length > 3) {
			games = [];
			if (searchTimeout) {
				console.log('clearing timeout');
				clearTimeout(searchTimeout);
			}
			searchTimeout = setTimeout(searchGames, 1000);
		}
	}
</script>

<!-- {#if page.state.showProfile}
	<div
		in:fly={{ y: 40, duration: 300 }}
		out:fly={{ y: 40, duration: 300 }}
		class="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-10 backdrop-blur"
	>
		<div class="absolute bottom-0 left-0 right-0 top-16 flex flex-col rounded-t-2xl bg-black">
			<input
				type="text"
				bind:value={search}
				placeholder="Search for a game"
				class="m-4 rounded-2xl border border-neutral-600 bg-black p-2"
			/>
		</div>
	</div>
{/if} -->

<div class="mx-4 flex flex-row mt-safe-or-4">
	<div class="relative mr-2 flex-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
		<input
			type="text"
			bind:value={search}
			oninput={onSearchChange}
			placeholder="Search for a game"
			class="h-10 w-full rounded-xl bg-neutral-800 pl-9 pr-8 transition-all focus:shadow-[0_0px_15px_0px_rgba(0,0,0,0.2)] focus:shadow-orange-600"
		/>
		{#if search}
			<button
				onclick={() => (search = '')}
				class="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-5 w-5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		{/if}
	</div>
	<button onclick={searchGames}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
	</button>
</div>
<div class="grid grid-cols-3 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
	{#each games as game, index}
		<div transition:blur={{ delay: index * 25, duration: 200 }}>
			<GameCard {game} />
		</div>
	{/each}
</div>
