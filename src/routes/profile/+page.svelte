<script>

	import Switch from "$lib/components/switch.svelte";

	let isSwitchChecked = $state(false);
	let selectedTab = $state('first');
	let isOpen = $state(false);

</script>
<section class="flex flex-col gap-2 p-4">
	<h1 class="text-neutral-400">Linked Accounts</h1>
	<ul class="flex flex-col gap-2 overflow-auto rounded-xl bg-neutral-900">
		<li class="flex flex-row items-center justify-between border-b border-neutral-800 p-4">
			<span class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path
						d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
					/>
				</svg>
				<p>Steam</p>
			</span>
			<button class="font-bold text-rose-500">Link</button>
		</li>
		<li class="flex flex-row items-center justify-between border-b border-neutral-800 p-4">
			<span class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path
						d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-66.3 206.9c-48.5 36.3-89.3 33.9-119.4 15.8-11.1-6.7-20.4-15.4-27.6-25.2-2.4-3.2-5.9-5.1-9.7-5.1h-.3c-3.8 0-7.3 1.9-9.7 5.1-7.2 9.8-16.5 18.5-27.6 25.2-30.1 18.1-70.9 20.5-119.4-15.8-3.2-2.4-7.7-2.1-10.5.7-2.8 2.8-3.1 7.3-.7 10.5 48.5 64.5 123.2 71.9 162.8 46.3 13.2-8.6 24.3-19.7 32.7-32.7 8.4 13 19.5 24.1 32.7 32.7 39.6 25.6 114.3 18.2 162.8-46.3 2.4-3.2 2.1-7.7-.7-10.5-2.8-2.8-7.3-3.1-10.5-.7z"
					/>
				</svg>
				<p>Ubisoft</p>
			</span>
			<button class="font-bold text-rose-500">Link</button>
		</li>
		<li class="flex flex-row items-center justify-between border-b border-neutral-800 p-4 py-3">
			<span class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path
						d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
					/>
				</svg>
				<p>Steam</p>
			</span>
			<button class="font-bold text-rose-500">Link</button>
		</li>
	</ul>
</section>

<section class="flex flex-col gap-2 p-4">
	<h1 class="text-neutral-400">Devices</h1>
	<ul class="flex flex-col gap-2 overflow-auto rounded-xl bg-neutral-900">
		<li class="flex flex-row items-center justify-between border-b border-neutral-800 p-4">
			<span class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path
						d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
					/>
				</svg>
				<p>Steam Deck</p>
			</span>
			<Switch bind:value={isSwitchChecked} />
		</li>
		<li class="flex flex-row items-center justify-between border-b border-neutral-800 p-4">
			<span class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path
						d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4z"
					/>
				</svg>
				<p>Nintendo Switch</p>
			</span>
			<Switch value={isSwitchChecked} />
		</li>
		<li>
			<div class="relative p-4">
				<input type="text" 
					class="peer w-full rounded-lg bg-neutral-800 p-4 outline-none transition-all placeholder:text-transparent focus:outline-none" 
					placeholder="Enter text" />
				<label class="absolute left-8 top-8 text-neutral-400 transition-all peer-focus:-translate-y-3 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
					Enter text
				</label>
			</div>
		</li>

		<li>
			<div class="relative p-4">
				<button 
					class="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-neutral-400 hover:bg-neutral-700 transition-colors"
					onclick={() => {
						const popover = document.getElementById('options-popover');
						popover?.classList.toggle('opacity-0');
						popover?.classList.toggle('pointer-events-none');
						const arrow = document.getElementById('arrow-icon');
						arrow?.classList.toggle('rotate-180');
					}}
				>
					<span>Additional Options</span>
					<svg 
						id="arrow-icon"
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5 transition-transform duration-200"
					>
						<path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
					</svg>
				</button>

				<div 
					id="options-popover"
					class="absolute left-4 right-4 top-16 flex-col gap-2 rounded-lg bg-neutral-800 p-2 shadow-lg opacity-0 pointer-events-none transition-opacity duration-200"
				>
					<button class="rounded-md px-4 py-2 text-left hover:bg-neutral-700 transition-colors">
						Option 1
					</button>
					<button class="rounded-md px-4 py-2 text-left hover:bg-neutral-700 transition-colors">
						Option 2
					</button>
					<button class="rounded-md px-4 py-2 text-left hover:bg-neutral-700 transition-colors">
						Option 3
					</button>
				</div>
			</div>
		</li>
		<li>
			<div class="relative p-4">
				<div class="relative flex w-full max-w-[300px] rounded-lg bg-neutral-800 p-1">
					<div 
						class="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-md bg-neutral-700 transition-transform duration-200"
						style="transform: translateX({selectedTab === 'second' ? '100%' : '0%'})"
					>
					</div>
					<button 
						class="relative z-10 flex-1 rounded-md px-4 py-2 text-sm transition-colors"
						class:text-white={selectedTab === 'first'}
						class:text-neutral-400={selectedTab !== 'first'}
						onclick={() => selectedTab = 'first'}
					>
						First Tab
					</button>
					<button 
						class="relative z-10 flex-1 rounded-md px-4 py-2 text-sm transition-colors"
						class:text-white={selectedTab === 'second'}
						class:text-neutral-400={selectedTab !== 'second'}
						onclick={() => selectedTab = 'second'}
					>
						Second Tab
					</button>
				</div>
			</div>

			<script>
				let selectedTab = 'first';
			</script>
		</li>

		<li>
			<div class="relative p-4">
				<button 
					class="flex w-full items-center justify-between rounded-lg bg-neutral-800 p-4 text-left"
					onclick={() => isOpen = !isOpen}
				>
					<span>Accordion Title</span>
					<svg 
						class="h-5 w-5 transition-transform duration-200"
						style="transform: rotate({isOpen ? '180deg' : '0deg'})"
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor" 
						stroke-width="2"
						stroke-linecap="round" 
						stroke-linejoin="round"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</button>
				<div 
					class="overflow-hidden transition-all duration-200"
					style="max-height: {isOpen ? 'var(--content-height)' : '0px'}; opacity: {isOpen ? '1' : '0'}"
					
				>
					<div class="p-4">
						<p>Accordion content goes here. You can add any content you want inside this div.</p>
					</div>
				</div>
			</div>

			<script>
				let isOpen = false;
				let contentHeight = 0;
			</script>
		</li>

		<li>
			<div class="relative p-4">
				<div class="flex w-full items-center justify-between rounded-lg bg-neutral-800 p-4">
					<div class="h-4 w-1/3 animate-pulse rounded bg-neutral-700"></div>
					<div class="h-5 w-5 animate-pulse rounded bg-neutral-700"></div>
				</div>
				<div class="mt-2 p-4">
					<div class="h-4 w-3/4 animate-pulse rounded bg-neutral-700"></div>
					<div class="mt-2 h-4 w-1/2 animate-pulse rounded bg-neutral-700"></div>
				</div>
			</div>
		</li>
	</ul>
</section>
<a href="/onboarding/steamdeck">
	<button class="rounded-md bg-rose-500 px-4 py-2 text-white"> Steam Deck </button>
</a>
