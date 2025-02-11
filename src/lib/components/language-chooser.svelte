<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import IconChevronRight from '$lib/icons/IconChevronRight.svelte';
	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	let { onSelect } = $props();
</script>

{#snippet languageItem(flag: string, language: string, code: AvailableLanguageTag)}
	<button
		onclick={async () => {
			onSelect?.();
			await new Promise((resolve) => setTimeout(resolve, 200));
			switchToLanguage(code);
		}}
		class="interactable flex w-full cursor-pointer items-center justify-between gap-2"
	>
		<div class="flex flex-row items-center gap-2">
			<span class="text-2xl">{flag}</span>
			<span>{language}</span>
		</div>
		<IconChevronRight class="size-4" />
	</button>
{/snippet}

<div class="flex flex-col gap-1">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-medium">Select Language</h2>
	</div>
	<p class="text-neutral-400">Choose your language you want to use in the app.</p>
	<div class="divider"></div>
	<div class=" flex flex-col gap-2">
		{@render languageItem('🇺🇸', 'English', 'en')}
		{@render languageItem('🇵🇹', 'Português', 'pt')}
		{@render languageItem('🇪🇸', 'Español', 'es')}
		{@render languageItem('🇮🇹', 'Italiano', 'it')}
		{@render languageItem('🇩🇪', 'Deutsch', 'de')}
		{@render languageItem('🇫🇷', 'Français', 'fr')}
		{@render languageItem('🇮🇳', 'हिन्दी', 'hi')}
		{@render languageItem('🇷🇺', 'Русский', 'ru')}
	</div>
</div>
