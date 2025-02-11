<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => switchToLanguage('en')} class="flex items-center gap-2">
		<span class="text-2xl">🇺🇸</span>
		<span>English</span>
	</button>
	<button onclick={() => switchToLanguage('pt')} class="flex items-center gap-2">
		<span class="text-2xl">🇵🇹</span>
		<span>Português</span>
	</button>
	<button onclick={() => switchToLanguage('es')} class="flex items-center gap-2">
		<span class="text-2xl">🇪🇸</span>
		<span>Español</span>
	</button>
	<button onclick={() => switchToLanguage('it')} class="flex items-center gap-2">
		<span class="text-2xl">🇮🇹</span>
		<span>Italiano</span>
	</button>
	<button onclick={() => switchToLanguage('de')} class="flex items-center gap-2">
		<span class="text-2xl">🇩🇪</span>
		<span>Deutsch</span>
	</button>
	<button onclick={() => switchToLanguage('fr')} class="flex items-center gap-2">
		<span class="text-2xl">🇫🇷</span>
		<span>Français</span>
	</button>
	<button onclick={() => switchToLanguage('hi')} class="flex items-center gap-2">
		<span class="text-2xl">🇮🇳</span>
		<span>हिन्दी</span>
	</button>
	<button onclick={() => switchToLanguage('ru')} class="flex items-center gap-2">
		<span class="text-2xl">🇷🇺</span>
		<span>Русский</span>
	</button>
</div>
