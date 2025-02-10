<script lang="ts">
	import HumbleBundleSection from '$lib/components/hub/humble-bundle-section.svelte';
	import IconEpicGameStore from '$lib/icons/IconEpicGameStore.svelte';
	import IconGame from '$lib/icons/IconGame.svelte';
	import IconHumbleBundle from '$lib/icons/IconHumbleBundle.svelte';
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
	<HumbleBundleSection bundles={data.humbleBundle} />
</div>
