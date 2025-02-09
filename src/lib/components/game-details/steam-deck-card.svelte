<script>
	import IconBattery from '$lib/icons/IconBattery.svelte';
	import IconSteamDeck from '$lib/icons/IconSteamDeck.svelte';
	import IconXbox from '$lib/icons/IconXbox.svelte';
</script>

<div class="card flex flex-col gap-4 p-4">
	<div class="flex flex-row items-center gap-2">
		<IconSteamDeck class="h-6 w-6 text-blue-500" />
		<p class="text-xl font-bold">Steam Deck</p>
	</div>

	<div class="flex flex-row items-center gap-2">
		<div class="flex w-fit flex-row items-center gap-2 rounded-lg bg-neutral-800 p-2">
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
			<p class="text-sm">Verified</p>
		</div>

		<div class="flex flex-row items-center gap-2">
			<div class="flex w-fit flex-col items-center rounded-lg bg-neutral-800 p-2">
				<p class="font-bold text-blue-400">Platinum</p>
				<p class="text-sm">ProtonDB Rating</p>
			</div>
		</div>

		<div class="flex flex-row items-center gap-2">
			<div class="flex w-fit flex-row items-center gap-2 rounded-lg bg-neutral-800 p-2">
				<IconBattery class="size-8 text-green-400" />
				<p class="font-bold">3:24</p>
			</div>
		</div>
	</div>
</div>
