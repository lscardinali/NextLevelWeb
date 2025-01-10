<script lang="ts">
	interface IconProps {
		icon: string;
	}

	let { icon }: IconProps = $props();
</script>

{#if icon === 'home'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-6 w-6"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
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
{/if}
