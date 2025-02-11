<script lang="ts">
	export type IconName = 'hub' | 'games' | 'search' | 'deals' | 'account';

	interface IconProps {
		icon: IconName;
		class?: string;
	}

	let { icon, class: className = 'h-6 w-6' }: IconProps = $props();
</script>

{#if icon === 'hub'}
	<svg xmlns="http://www.w3.org/2000/svg" class={className} viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm2.653-3.77h9.462q.212 0 .356-.143q.144-.144.144-.357t-.144-.356t-.356-.143H7.269q-.212 0-.356.144t-.144.357t.144.356t.356.143m0-3.731h2.385q.212 0 .356-.144t.144-.356V8.27q0-.213-.144-.357t-.356-.144H7.269q-.212 0-.356.144t-.144.356V12q0 .213.144.356t.356.144m5.77 0h3.692q.212 0 .356-.144t.144-.357t-.144-.356t-.356-.143h-3.693q-.212 0-.356.144t-.144.357t.144.356t.356.143m0-3.73h3.693q.212 0 .356-.145t.144-.357t-.144-.356t-.356-.143h-3.693q-.212 0-.356.144t-.144.357t.144.356t.356.143"
		/>
	</svg>
{:else if icon === 'games'}
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 512 512"
		><path
			d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 00352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 00-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04z"
			fill="none"
			stroke="currentColor"
			stroke-miterlimit="10"
			stroke-width="32"
		/><circle cx="292" cy="224" r="20" fill="currentColor" /><path
			d="M336 288a20 20 0 1120-19.95A20 20 0 01336 288z"
		/><circle cx="336" cy="180" r="20" fill="currentColor" /><circle
			cx="380"
			cy="224"
			r="20"
			fill="currentColor"
		/><path
			fill="c"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="32"
			d="M160 176v96M208 224h-96"
		/></svg
	>
{:else if icon === 'search'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-6 w-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
		/>
	</svg>
{:else if icon === 'deals'}
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
		<path fill="currentColor" d="M12 2L2 22h20L12 2Z" />
	</svg>
{:else if icon === 'account'}
	<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 512 512">
		<path
			fill="currentColor"
			d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93M256 432a175.5 175.5 0 0 1-126-53.22a122.9 122.9 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.9 122.9 0 0 1 382 378.78A175.45 175.45 0 0 1 256 432"
		/>
	</svg>
{/if}
