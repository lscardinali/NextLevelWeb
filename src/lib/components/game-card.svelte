<script lang="ts">
	interface Props {
		game: IGDBGame;
	}

	let { game }: Props = $props();
</script>

<a href="/games/{game.id}" class="flex flex-col gap-2 transition-all duration-300 hover:scale-105">
	{#if game.cover}
		<img
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/{game.cover.image_id}.webp"
			alt={game.name}
			class="aspect-[2/3] w-full rounded bg-neutral-800 object-cover transition-all"
		/>
	{:else}
		<div class="aspect-[2/3] w-full rounded bg-gray-500" />
	{/if}
	<h3 class=" line-clamp-2 h-12 overflow-ellipsis font-bold">{game.name}</h3>
</a>
