<script lang="ts">
	import { appNavigation } from '$lib/app-navigation';
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';
</script>

{#each appNavigation as item}
	<a
		href={item.href}
		class="flex- flex flex-col items-center {page.url.pathname.startsWith(item.href)
			? 'text-[#f31260]'
			: 'text-neutral-500'}"
	>
		<Icon icon={item.icon} />

		<span class="text-xs">{item.name}</span>
	</a>
{/each}
