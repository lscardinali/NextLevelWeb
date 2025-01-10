<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="grid grid-cols-3 gap-2">
	{#await data.allGames.then((res) => res.json())}
		<div class="flex h-full w-full items-center justify-center">
			<p>Loading...</p>
		</div>
	{:then games}
		{#each games as game}
			<div class="flex flex-col">
				<img
					src={game.image}
					alt={game.name}
					class="aspect-square h-full w-full rounded-xl object-cover"
				/>
				<h2>{game.name}</h2>
			</div>
		{/each}
	{:catch error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/await}
</div>
