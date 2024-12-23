<script lang="ts">
	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div class="relative">
	<!-- Button to open the dropdown -->
	<button
		class="flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white"
		onclick={toggleDropdown}
	>
		Actions
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="ml-2 h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	<!-- Dropdown menu -->
	{#if isOpen}
		<div class="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg dark:bg-gray-800">
			<div class="p-2">
				<button
					class="flex w-full items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 10h11M9 21V3m12 8h-3m0 0v5m0-5h-6"
						/>
					</svg>
					New File
				</button>
				<button
					class="flex w-full items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 17l9-9m0 9l-9-9"
						/>
					</svg>
					Copy Link
				</button>
				<button
					class="flex w-full items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12h3m0 0v3m0-3h3m-6 0a9 9 0 110-6"
						/>
					</svg>
					Edit File
				</button>
				<div class="my-2 border-t"></div>
				<button
					class="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 13h6m2 0a9 9 0 11-6-6"
						/>
					</svg>
					Delete File
				</button>
			</div>
		</div>
	{/if}
</div>
