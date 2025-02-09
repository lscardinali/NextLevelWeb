<script lang="ts">
	import { fade } from 'svelte/transition';

	interface SearchProps {
		value: string;
		onSearch: () => void;
	}

	let { value = $bindable(), onSearch }: SearchProps = $props();

	function onSearchSubmit(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			onSearch();
			//dismiss keyboard
			(e.target as HTMLInputElement).blur();
		}
	}
</script>

<div class=" flex flex-row">
	<div class="relative flex-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="absolute top-1/2 left-2 h-5 w-5 -translate-y-1/2 text-neutral-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
		<input
			type="text"
			bind:value
			onkeydown={onSearchSubmit}
			placeholder="Search for a game"
			class="h-9 w-full rounded-xl bg-neutral-800 pr-8 pl-9 transition-all"
		/>
		{#if value}
			<button
				aria-label="Clear search"
				transition:fade={{ delay: 100, duration: 100 }}
				onclick={() => (value = '')}
				class="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-400 hover:text-white"
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
</div>
