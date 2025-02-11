<script lang="ts">
	import type { GameSimple } from '$lib/models/game';
	import Image from './image.svelte';

	interface Props {
		game: GameSimple;
	}

	let { game }: Props = $props();
</script>

<a
	href="/games/{game.id}"
	class="flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:text-rose-400"
>
	<Image src={game.image} alt={game.name} class=" w-full rounded-xl transition-all" />
	<h3 class=" line-clamp-2 h-12 font-bold overflow-ellipsis">{game.name}</h3>
</a>
