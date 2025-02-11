<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	let width = $state(0);

	let { children, showModal = $bindable(true) } = $props();

	function responsiveTransition(node: HTMLElement, params?: any) {
		// You can use the bound width (reactive) or window.innerWidth directly.
		if (width < 600) {
			return fly(node, { y: 250, ...params });
		} else {
			return scale(node, { start: 0.95, ...params });
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<div
	transition:fade={{ duration: 200 }}
	class="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm md:items-center"
>
	<div
		class="fixed inset-0 bg-black opacity-50"
		onclick={() => (showModal = false)}
		onkeydown={() => (showModal = false)}
		role="button"
		aria-label="Close modal"
		tabindex="0"
	></div>
	<div transition:responsiveTransition class=" relative mx-auto max-w-2xl">
		<div
			class="pb-safe-offset-4 rounded border-t border-neutral-800 bg-black p-6 md:rounded-xl md:border"
		>
			{@render children()}
		</div>
	</div>
</div>
