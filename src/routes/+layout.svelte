<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import TabBar from '$lib/components/layout/tabbar.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex h-screen flex-col">
		<div class=" flex flex-row">
			<aside
				class="hidden h-screen min-w-64 flex-col gap-1 border-r border-neutral-800 px-4 md:flex"
			>
				<Sidebar />
			</aside>
			<main class="min-w-0 flex-1 pb-12 md:pb-0 xl:mx-auto xl:max-w-[1024px]">
				{@render children()}
			</main>
		</div>
		<nav
			class="pb-safe-or-2 fixed inset-x-0 bottom-0 z-10 flex flex-row items-center justify-around bg-neutral-950/70 py-2 backdrop-blur-xl md:hidden"
		>
			<TabBar />
		</nav>
	</div>
</ParaglideJS>
