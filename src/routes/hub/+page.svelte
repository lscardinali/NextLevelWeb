<script lang="ts">
	import IconEpicGameStore from '$lib/icons/IconEpicGameStore.svelte';
	import IconGame from '$lib/icons/IconGame.svelte';
	import IconPlaystation from '$lib/icons/IconPlaystation.svelte';
	import IconXbox from '$lib/icons/IconXbox.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col">
	<div class="mt-safe-offset-2 mx-2 flex flex-row items-center gap-2">
		<span class="text-red-500">
			<IconGame />
		</span>
		<h2 class=" text-xl font-bold">Free Games</h2>
	</div>
	<div class="mx-2 my-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
		<a
			href="/hub/subscriptions"
			class="flex h-20 flex-row items-center justify-evenly gap-2 rounded-xl bg-gradient-to-tr from-green-950 to-green-700 p-4 transition-all active:opacity-50"
		>
			<IconXbox />
			<h1 class=" text-lg font-bold">Game Pass</h1>
		</a>

		<a
			href="/hub/subscriptions"
			class="flex h-20 flex-row items-center justify-evenly gap-2 rounded-xl bg-gradient-to-tr from-blue-950 to-blue-700 p-4 transition-all active:opacity-50"
		>
			<IconPlaystation />
			<h1 class=" text-xl font-bold">Playstation Plus</h1>
		</a>

		<a
			href="/hub/subscriptions"
			class="relative flex h-20 items-center justify-evenly gap-2 rounded-xl bg-gradient-to-br from-neutral-950 to-neutral-700 p-4"
		>
			<IconEpicGameStore />
			<h1 class=" text-xl">Epic Free Game</h1>
		</a>
	</div>
	<section class="my-2 flex flex-row items-center gap-2">
		<span class="text-red-500">
			<IconGame />
		</span>
		<h2 class="text-xl font-bold">Upcoming Games</h2>
	</section>
	<div class="grid grid-cols-2 gap-2">
		<!-- {#await data.humbleBundle.then((res) => res.json())} -->
		<div class="skeleton h-20 w-full rounded-xl"></div>
		<!-- {:then bundles}
			{#each bundles as bundle}
				<a
					href={'https://humblebundle.com' + bundle.product_url}
					target="_blank"
					class="relative m-1 flex h-32 overflow-hidden rounded-xl"
				>
					<img
						class="absolute h-full w-full object-cover"
						alt="Humble Bundle"
						src={bundle.tile_image}
					/>
					<div class="absolute h-full w-full bg-black/50"></div>
					<h1 class="absolute bottom-2 left-2 font-bold">
						{bundle.tile_name}
					</h1>
				</a>
			{/each}
		{/await} -->
	</div>
</div>
