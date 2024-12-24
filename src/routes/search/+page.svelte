<script lang="ts">
	import { fly } from 'svelte/transition';

	import { pushState } from '$app/navigation';
	import { page } from '$app/state';

	function showModal() {
		pushState('', {
			showProfile: true
		});
	}

	let search = $state('');

	let showing = $state(false);
</script>

{#if page.state.showProfile}
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
{/if}

<input
	type="text"
	bind:value={search}
	placeholder="Search for a game"
	class="m-4 rounded-2xl border border-neutral-600 bg-black p-2"
/>

<button onclick={() => showModal()}>
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
