<script lang="ts">
	import { appNavigation } from '$lib/app-navigation';
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';
	import IconChevronRight from '$lib/icons/IconChevronRight.svelte';
</script>

<div class="flex flex-row items-center gap-4 p-4">
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
		<IconChevronRight class="size-4" />
	</li>
	<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
		<a href="/games/1771300">Kingdom Come: Deliverance II</a>
		<IconChevronRight class="size-4" />
	</li>
	<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
		<a href="/games/123">Path of Exile 2</a>
		<IconChevronRight class="size-4" />
	</li>
	<li class="flex flex-row items-center justify-between gap-2 text-pink-500">
		<a href="/games/123">Monster Hunter Wilds</a>
		<IconChevronRight class="size-4" />
	</li>
</ul>
