<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/icon.svelte';
	import AppIcon from '$lib/icons/app-icon.svelte';
	import '../app.css';
	import { appNavigation } from '$lib/app-navigation';

	let { children } = $props();
</script>

<header
	class="fixed top-0 z-10 flex w-full flex-row items-center justify-between border-b border-gray-800 bg-black bg-opacity-50 px-4 py-3 backdrop-blur-xl pt-safe-or-3"
>
	<span class="flex flex-row items-center gap-2">
		<AppIcon />
		<p class="text-2xl font-light">SecretLevel</p>
	</span>
	<div class="flex flex-row gap-2">
		<p class="flex flex-row items-center text-sm text-pink-500">
			2345
			<img
				src="https://www.pngall.com/wp-content/uploads/14/Crystal-PNG-Photos.png"
				class="h-6 w-6"
			/>
		</p>

		<a
			href="/profile"
			class="flex h-8 w-8 items-center justify-center rounded-full border border-white border-opacity-25 bg-white bg-opacity-10 transition-all duration-300 hover:opacity-50 active:scale-95 active:opacity-30"
		>
			<img
				src="https://avatarfiles.alphacoders.com/148/148991.jpg"
				class="h-full w-full rounded-full"
			/>
		</a>
	</div>
</header>
<div class="flex w-full flex-row pt-safe-or-16">
	<aside class="hidden w-1/6 flex-col gap-1 border-r border-gray-800 p-4 md:flex">
		{#each appNavigation as item}
			<a
				href={item.href}
				class="flex flex-row items-center gap-2 rounded p-2 {$page.url.pathname.startsWith(
					item.href
				)
					? 'bg-white bg-opacity-10 text-lime-300'
					: 'text-neutral-500'} transition-all hover:bg-lime-300 hover:bg-opacity-20"
			>
				<Icon icon={item.icon} />
				{item.name}
			</a>
		{/each}
	</aside>
	<main class="mx-auto w-full pb-safe-offset-16 lg:w-[1024px]">
		{@render children()}
	</main>
</div>
<footer
	class="fixed bottom-0 left-0 right-0 z-10 flex flex-row justify-evenly border-t border-gray-900 bg-black bg-opacity-50 py-2 backdrop-blur-xl pb-safe-or-2 md:hidden"
>
	{#each appNavigation as item}
		<a
			href={item.href}
			class="flex flex-1 flex-col items-center {$page.url.pathname.startsWith(item.href)
				? 'text-lime-300'
				: 'text-neutral-500'}"
		>
			<Icon icon={item.icon} />

			<span class="text-xs">{item.name}</span>
		</a>
	{/each}
</footer>
