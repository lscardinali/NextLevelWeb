<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';
	import '../app.css';
	import { appNavigation } from '$lib/app-navigation';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<div class="flex flex-row">
		<aside class="hidden w-64 flex-col gap-1 md:flex">
			<h1 class="p-4 text-2xl font-bold tracking-wider">SECRET LEVEL</h1>
			<ul>
				{#each appNavigation as item}
					<li>
						<a
							href={item.href}
							class="my-2 flex flex-row items-center gap-2 p-4 py-2 {page.url.pathname.startsWith(
								item.href
							)
								? 'bg-opacity-10 text-[#9353D3]'
								: 'text-neutral-500'} hover:bg-opacity-20 transition-all hover:bg-neutral-800"
						>
							<Icon icon={item.icon} />
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
		<main class="w-full pb-12 md:pb-0 xl:mx-auto xl:max-w-[1024px]">
			{@render children()}
		</main>
	</div>
	<nav
		class="pb-safe-or-2 fixed right-0 bottom-0 left-0 z-10 flex flex-row items-center justify-around border-t border-gray-800 bg-black py-2 md:hidden"
	>
		{#each appNavigation as item}
			<a
				href={item.href}
				class="flex flex-col items-center {page.url.pathname.startsWith(item.href)
					? 'text-lime-400'
					: 'text-neutral-500'}"
			>
				<Icon icon={item.icon} />

				<span class="text-xs">{item.name}</span>
			</a>
		{/each}
	</nav>
</div>
