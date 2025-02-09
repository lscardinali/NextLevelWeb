<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';
	import '../app.css';
	import { appNavigation } from '$lib/app-navigation';
	import IconXbox from '$lib/icons/IconXbox.svelte';

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
									: 'text-neutral-500'} hover:bg-opacity-20 transition-all hover:bg-neutral-900"
							>
								<Icon icon={item.icon} />
								{item.name}
							</a>
						</li>
					{/each}

					<div class="my-4 h-[1px] w-full bg-neutral-700"></div>
					<li class="text-sm font-bold text-neutral-500">Popular Games</li>
				</ul>
			</aside>
			<main class="w-full pb-12 md:pb-0 xl:mx-auto xl:max-w-[1024px]">
				{@render children()}
			</main>
		</div>
		<nav
			class="pb-safe-or-2 fixed right-0 bottom-0 left-0 z-10 flex flex-row items-center justify-around bg-black/50 py-2 backdrop-blur-xl md:hidden"
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
