<script lang="ts">
	import { elasticInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let showLevelUp = $state(false);
</script>

<div class="pt-safe-offset-2 flex flex-col p-2">
	<h2 class="text-2xl font-bold">Playground</h2>

	{#if showLevelUp}
		<div
			transition:fly={{ y: -100, easing: elasticInOut }}
			class="fixed inset-x-0 top-0 z-10 flex h-4 items-center justify-center bg-gradient-to-b from-pink-600/30 to-transparent"
		>
			<p
				transition:fly={{ y: -100, duration: 1000, easing: elasticInOut, delay: 500 }}
				class="text-gradient mt-4 bg-gradient-to-r from-blue-400 to-pink-400 font-bold"
			>
				Level Up
			</p>
		</div>
	{/if}
	<div class="mt-4 flex flex-col gap-2">
		<button
			class="button"
			onclick={async () => {
				showLevelUp = true;
				await new Promise((resolve) => setTimeout(resolve, 4000));
				showLevelUp = false;
			}}>Show Level Up</button
		>
	</div>
</div>
