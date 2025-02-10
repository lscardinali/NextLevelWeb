<script lang="ts">
	import { blur, fly, scale, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import { pushState } from '$app/navigation';
	import SteamDeckCard from '$lib/components/game-details/steam-deck-card.svelte';
	import IconSteamDeck from '$lib/icons/IconSteamDeck.svelte';
	import Chart from '$lib/components/chart.svelte';
	import Image from '$lib/components/image.svelte';
	import StoresCard from '$lib/components/game-details/stores-card.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let { data }: { data: PageData } = $props();

	let detailScreenshot = $state(0);
	let showDescription = $state(false);
</script>

<svelte:head>
	<title>SECRETLEVEL - {data.gameInfo.name}</title>
</svelte:head>

{#if page.state.showScreenshot}
	<button
		onclick={() => history.back()}
		transition:blur={{ duration: 300 }}
		class="bg-opacity-10 fixed top-0 right-0 bottom-0 left-0 z-20 bg-black backdrop-blur"
	>
		<div class="fixed top-1/2 left-1/2 w-5/6 -translate-x-1/2 -translate-y-1/2">
			<img
				src={data.gameInfo.screenshots[detailScreenshot].path_full}
				alt="Game screenshot"
				class="h-full w-full object-contain"
			/>
		</div>
	</button>
{/if}

<!-- <div class="absolute top-0 right-0 left-0 -z-10 h-screen">
	<img
		src={data.gameInfo.background_raw}
		alt={data.gameInfo.name}
		class="h-full w-full object-cover opacity-40 blur-3xl"
	/>
</div> -->

<div class="relative h-64 w-full overflow-hidden lg:mt-4 lg:rounded-lg">
	<!-- <img
		src={data.gameInfo.header_image}
		alt={data.gameInfo.name}
		class="h-full w-full object-cover"
	/> -->
	<video
		src={data.gameInfo.movies[0].webm[480]}
		class="h-full w-full object-cover"
		autoplay
		loop
		muted
		playsinline
	></video>
	<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
	<h3 class="absolute bottom-4 left-4 text-3xl font-bold text-white">{data.gameInfo.name}</h3>
</div>
<div class="mb-4 flex flex-col gap-4">
	<div class="flex flex-row items-center gap-2">
		<a
			href="steam://run/{data.gameInfo.steam_appid}"
			class="flex w-fit flex-row items-center gap-2 rounded-md bg-gradient-to-r from-blue-800 to-blue-600 p-2 text-white transition-all hover:shadow-lg hover:shadow-blue-800"
		>
			<IconSteamDeck class="h-6 w-6 text-white" />
			Open in Steam
		</a>
		{#if data.owned}
			<div
				class="flex w-fit flex-row items-center gap-2 rounded-md bg-gradient-to-r from-green-800 to-green-600 p-2 text-white transition-all"
			>
				Owned
			</div>
		{/if}
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<SteamDeckCard />
		<StoresCard />
	</div>
	<div class="card flex flex-col gap-4 p-4">
		<div class="flex flex-row items-center gap-2">
			<IconSteamDeck class="h-6 w-6 text-blue-500" />
			<p class="text-xl font-bold">{m.screenshots()}</p>
		</div>

		<Chart />
	</div>

	<div class="card flex flex-col">
		<div
			class="[&::-webkit-scrollbar-track]:transparent flex snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/80 [&::-webkit-scrollbar-track]:rounded-full"
		>
			{#each data.gameInfo.screenshots as screenshot, index}
				<div class="relative h-[200px] min-w-[350px] cursor-pointer snap-center">
					<button
						onclick={() => {
							detailScreenshot = index;
							pushState('', { showScreenshot: true });
						}}
					>
						<Image
							src={screenshot.path_full}
							alt="Game screenshot"
							class="h-full w-full rounded-xl object-cover"
						/>
					</button>
				</div>
			{/each}
		</div>
	</div>

	<div
		class="relative flex {showDescription
			? 'h-fit'
			: 'h-64'} flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-900 p-4 transition-all"
	>
		<div class="flex flex-row items-center gap-2">
			<IconSteamDeck class="h-6 w-6 text-blue-500" />
			<p class="text-xl font-bold">Description</p>
		</div>

		<div class="max-w-[640px] text-sm text-neutral-300">
			{@html data.gameInfo.about_the_game}
		</div>
		{#if !showDescription}
			<div
				class="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"
			></div>
		{/if}
		<button
			onclick={() => {
				showDescription = !showDescription;
			}}
			class="absolute right-4 bottom-4 rounded-xl bg-lime-600 p-2 text-sm font-bold text-lime-400"
		>
			{showDescription ? 'Hide' : 'More'}
		</button>
	</div>
</div>
