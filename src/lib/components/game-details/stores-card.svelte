<script>
	import IconBattery from '$lib/icons/IconBattery.svelte';
	import IconCart from '$lib/icons/IconCart.svelte';
	import IconSteamDeck from '$lib/icons/IconSteamDeck.svelte';
</script>

<div class="card flex flex-col gap-4 p-4">
	<div class="flex flex-row items-center gap-2">
		<IconCart class="h-6 w-6 text-red-500" />
		<p class="text-xl font-bold">Stores</p>
	</div>

	<div class="flex flex-row items-center gap-2">
		<div class="flex w-fit flex-col gap-1 rounded-lg border border-neutral-700 bg-neutral-800 p-2">
			<div class="flex flex-row items-center gap-2">
				<IconSteamDeck class="h-4 w-4 text-blue-500" />
				<p>Steam</p>
			</div>
			<b class="text-xl">30,00€</b>
		</div>
	</div>
</div>
