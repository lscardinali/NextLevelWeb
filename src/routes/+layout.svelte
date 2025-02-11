<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';
	import '../app.css';
	import { appNavigation } from '$lib/app-navigation';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex h-screen flex-col">
		<div class="flex flex-row">
			<aside class="hidden h-screen w-64 flex-col gap-1 border-r border-neutral-800 px-4 md:flex">
				<div class="flex flex-row items-center gap-2 p-4">
					<img src="/logo.png" alt="Secret Level" class="h-6 w-6" />
					<h1 class="text-2xl">Secret Level</h1>
				</div>
				<ul>
					{#each appNavigation as item}
						<li>
							<a
								href={item.href}
								class="my-2 flex flex-row items-center gap-2 rounded-xl p-4 py-2 {page.url.pathname.startsWith(
									item.href
								)
									? 'bg-opacity-10 bg-neutral-900 text-[#f31260]'
									: 'text-neutral-500'} hover:bg-opacity-20 transition-all duration-300 hover:bg-neutral-900"
							>
								<Icon icon={item.icon} />
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
				<div class="my-4 h-[1px] w-full bg-neutral-700"></div>
				<div class="text-sm font-bold text-neutral-500">Popular Games</div>
				<ul class="mt-2 flex flex-col gap-2">
					<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
						<a href="/games/730">Counter-Strike 2</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</li>
					<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
						<a href="/games/1771300">Kingdom Come: Deliverance II</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</li>
					<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
						<a href="/games/123">Path of Exile 2</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</li>
					<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
						<a href="/games/123">Monster Hunter Wilds</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</li>
				</ul>
			</aside>
			<main class="w-full pb-12 md:pb-0 xl:mx-auto xl:max-w-[1024px]">
				{@render children()}
			</main>
		</div>
		<nav
			class="pb-safe-or-2 fixed right-0 bottom-0 left-0 z-10 flex flex-row items-center justify-around bg-black/70 py-2 backdrop-blur-xl md:hidden"
		>
			{#each appNavigation as item}
				<a
					href={item.href}
					class="flex flex-col items-center {page.url.pathname.startsWith(item.href)
						? 'text-[#f31260]'
						: 'text-neutral-500'}"
				>
					<Icon icon={item.icon} />

					<span class="text-xs">{item.name}</span>
				</a>
			{/each}
		</nav>
	</div>
</ParaglideJS>
