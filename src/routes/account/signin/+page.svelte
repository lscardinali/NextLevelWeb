<script lang="ts">
	import { page } from '$app/state';
	import IconEmojiElf from '$lib/icons/emoji/IconEmojiElf.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Modal from '$lib/components/modal.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import LanguageChooser from '$lib/components/language-chooser.svelte';

	let showModal = $state(false);
</script>

<div class="pt-safe-offset-4 flex flex-col p-2" in:fade={{ duration: 150 }}>
	<h2 class="m-2 mb-4 text-2xl font-bold">{m.signin()}</h2>
	<div class="card mx-auto flex w-full flex-col p-4 md:border lg:w-[600px]">
		<div class="flex flex-row items-center">
			<IconEmojiElf class="size-10" />
			<div class="relative mr-2">
				<div
					class="absolute top-1/2 -left-2 -translate-y-1/2 border-8 border-transparent border-r-neutral-700"
				></div>
			</div>
			<div class="flex flex-col rounded-md border border-neutral-700 p-2">
				<h2 class="text-lg font-bold">{m.welcome_adventurer()}</h2>
				<p class="text-sm text-neutral-400">{m.youve_made_it_to_the_secret_level()}</p>
			</div>
		</div>

		<div class="mt-8 flex flex-col gap-2">
			<div class="flex w-full flex-col gap-3">
				<a
					href="/account/signin/email"
					class="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-white transition-colors hover:bg-neutral-700"
				>
					<svg class="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<rect
							x="3"
							y="5"
							width="18"
							height="14"
							rx="2"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					{m.email()}
				</a>

				<a
					href="/account/signin/google"
					class="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-black transition-colors hover:bg-neutral-100"
				>
					<svg class="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					Google
				</a>

				<a
					href="/account/signin/apple"
					class="flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-black px-4 py-2 text-white transition-colors hover:bg-neutral-900"
				>
					<svg
						class="size-5"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.52-3.2 0-1.44.68-2.2.53-3.08-.4-4.56-4.84-3.8-11.87 1.4-12.1 1.09.05 1.88.56 2.57.62.96-.2 1.88-.71 2.92-.77 1.81-.12 3.17.76 4.03 2.06-3.73 2.11-3.15 7.23.44 8.65-.56 1.45-1.28 2.84-2 4.54zM12.76 7.18c-.09-2.47 2.11-4.64 4.78-4.64.16 2.42-2.25 4.77-4.78 4.64z"
						/>
					</svg>
					Apple
				</a>

				<a
					href="/account/signin/facebook"
					class="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-4 py-2 text-white transition-colors hover:bg-[#0c63d4]"
				>
					<svg
						class="size-5"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
					Facebook
				</a>

				<div class="divider"></div>
				<button
					onclick={() => (showModal = true)}
					class="text-gradient interactable w-fit cursor-pointer self-center bg-gradient-to-r from-pink-400 to-purple-400 text-sm"
					>Forgot Password?</button
				>
			</div>
		</div>
	</div>
	<button
		class="interactable m-2 w-fit cursor-pointer self-center rounded-xl border border-neutral-800 p-2 py-1 text-2xl"
		onclick={() => (showModal = true)}>🇺🇸</button
	>
</div>

{#if showModal}
	<Modal bind:showModal>
		<!-- <div class="flex items-center justify-between">
			<h2 class="text-lg font-medium">Modal Title</h2>
		</div>
		<div class="mt-4">
			<p class="text-neutral-400">
				Modal content goes here. You can add any content you want inside this area. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div class="mt-6 flex justify-end gap-3">
			<button
				onclick={() => (showModal = false)}
				class="rounded-xl bg-neutral-800 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700"
			>
				Cancel
			</button>
			<button
				class="rounded-xl bg-white px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200"
			>
				Confirm
			</button>
		</div> -->
		<LanguageChooser onSelect={() => (showModal = false)} />
	</Modal>
{/if}
