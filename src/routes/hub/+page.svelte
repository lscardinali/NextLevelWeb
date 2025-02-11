<script lang="ts">
	import HumbleBundleSection from '$lib/components/hub/humble-bundle-section.svelte';
	import IconEpicGameStore from '$lib/icons/IconEpicGameStore.svelte';
	import IconGame from '$lib/icons/IconGame.svelte';
	import IconPlaystation from '$lib/icons/IconPlaystation.svelte';
	import IconXbox from '$lib/icons/IconXbox.svelte';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Secret Level - Hub</title>
</svelte:head>

<div class="flex flex-col p-2" in:fade={{ duration: 150 }}>
	<div class="mt-safe-offset-2 flex flex-row items-center gap-2">
		<span class="text-red-500">
			<IconGame />
		</span>
		<h2 class=" text-xl font-bold">Free Games</h2>
	</div>
	<div class="my-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
		<a
			href="/hub/subscriptions"
			class="flex h-20 flex-row items-center justify-evenly gap-2 rounded-xl bg-gradient-to-tl from-green-950 to-green-700 p-4 transition-all active:opacity-50"
		>
			<IconXbox class="size-12" />
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
	<HumbleBundleSection bundles={data.humbleBundle} />
</div>
