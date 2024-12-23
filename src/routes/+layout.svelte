<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-auto flex w-full flex-col lg:w-[1200px]">
	<header
		class="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-gray-800 bg-black bg-opacity-70 px-4 py-3 backdrop-blur-xl"
	>
		<a
			href="/"
			class="bg-gradient-to-tr from-blue-500 via-pink-500 to-rose-500 bg-clip-text text-2xl font-bold text-transparent"
		>
			NextLevel
		</a>
		<div class="flex flex-row gap-2">
			<p class="flex flex-row items-center text-sm text-pink-500">
				2345
				<img
					src="https://www.pngall.com/wp-content/uploads/14/Crystal-PNG-Photos.png"
					class="h-6 w-6"
				/>
			</p>

			<a
				href="/profile"
				class="flex h-8 w-8 items-center justify-center rounded-full border border-white border-opacity-25 bg-white bg-opacity-10 transition-all duration-300 hover:opacity-50 active:scale-95 active:opacity-30"
			>
				<img
					src="https://avatarfiles.alphacoders.com/148/148991.jpg"
					class="h-full w-full rounded-full"
				/>
			</a>
			<!-- <a
				href=""
				class="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white bg-opacity-10"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</a> -->
		</div>
	</header>
	<div class="flex flex-row">
		<aside class="mr-4 hidden w-1/5 flex-col gap-1 md:flex">
			<a
				href="/games/1"
				class="flex flex-row items-center gap-2 rounded p-2 text-rose-500 transition-all duration-300 hover:bg-rose-500 hover:bg-opacity-20"
			>
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
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
					/>
				</svg>
				Games</a
			>
			<a
				href="/games/1"
				class="flex flex-row items-center gap-2 rounded p-2 transition-all duration-300 hover:bg-rose-500 hover:bg-opacity-20"
			>
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
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
				Wishlist</a
			>
			<a
				href="/games/1"
				class="flex flex-row items-center gap-2 rounded p-2 transition-all duration-300 hover:bg-rose-500 hover:bg-opacity-20"
			>
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
						d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
					/>
				</svg>
				AI Assistant</a
			>
			<div class="h-0.5 w-full bg-neutral-500 bg-opacity-20"></div>
			<a
				href="/games/1"
				class="flex flex-row items-center gap-2 rounded p-2 transition-all duration-300 hover:bg-rose-500 hover:bg-opacity-20"
			>
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
						d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
				</svg>
				Settings</a
			>
		</aside>
		<main class="flex w-full flex-col md:w-4/5">
			{@render children()}
		</main>
	</div>
	<footer
		class="sticky bottom-0 left-0 right-0 z-10 flex flex-row justify-evenly border-t border-gray-900 bg-[#040a13] bg-opacity-70 p-2 backdrop-blur-xl md:hidden"
	>
		<a href="/" class="flex flex-col items-center text-rose-500">
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
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</svg>
			<span class="text-sm">Hub</span>
		</a>
		<a href="/games" class="flex flex-col items-center">
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
			<span class="text-sm">Search</span>
		</a>
		<a href="/games" class="flex flex-col items-center">
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
					d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
			<span class="text-sm">Games</span>
		</a>
	</footer>
</div>
