<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		src: string;
		alt: string;
		class?: string;
	}

	let { src, alt, class: className }: Props = $props();

	let loaded = $state(false);
	let imageElement: HTMLImageElement;

	function onImageLoad() {
		loaded = true;
	}
</script>

<div class="relative overflow-auto {className}">
	<img {src} {alt} bind:this={imageElement} onload={onImageLoad} />
	{#if !loaded}
		<div class="skeleton absolute inset-0" out:fade={{ duration: 300 }}></div>
	{/if}
</div>
