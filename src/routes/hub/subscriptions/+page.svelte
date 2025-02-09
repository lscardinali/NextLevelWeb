<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#await data.allGames.then((res) => res.json())}
		<div class="flex h-full w-full items-center justify-center">
			<p>Loading...</p>
		</div>
	{:then games}
		{#each games as game}
			<div class="flex cursor-pointer flex-col transition-all hover:scale-105">
				<img
					src={game.image}
					alt={game.name}
					class="aspect-square w-full rounded-xl object-cover"
				/>
				<h2 class="line-clamp-2">{game.name}</h2>
			</div>
		{/each}
	{:catch error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/await}
</div>
