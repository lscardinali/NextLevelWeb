<script>
	import IconBattery from '$lib/icons/IconBattery.svelte';
	import IconSteamDeck from '$lib/icons/IconSteamDeck.svelte';
	import IconXbox from '$lib/icons/IconXbox.svelte';
</script>

<div class="flex flex-col gap-2 rounded-xl border border-neutral-800 p-2">
	<div class="flex flex-row items-center gap-2">
		<IconSteamDeck class="h-6 w-6 text-blue-500" />
		<p class="text-xl font-bold">Steam Deck</p>
	</div>

	<div class="grid grid-cols-3 gap-3">
		<div
			class="flex flex-row items-center justify-center gap-2 rounded-xl border border-neutral-800 p-2 py-1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-4 w-4 rounded-full bg-green-500 text-white"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
			</svg>
			<p class="font-bold">Verified</p>
		</div>

		<div
			class="flex flex-row items-center justify-center rounded-xl border border-neutral-800 p-2 py-1"
		>
			<div class="flex w-fit flex-col items-center">
				<p class="font-bold text-blue-400">Platinum</p>
				<p class="text-sm">ProtonDB</p>
			</div>
		</div>

		<div
			class="flex flex-row items-center justify-center rounded-xl border border-neutral-800 p-2 py-1"
		>
			<div class="flex w-fit flex-row items-center gap-2">
				<IconBattery class="size-8 text-green-400" />
				<p class="font-bold">3:24</p>
			</div>
		</div>
	</div>
	<button class="my-2 w-fit rounded-xl bg-white px-4 py-2 text-black"> View Game Settings </button>
</div>
