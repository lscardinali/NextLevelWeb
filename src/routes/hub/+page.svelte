<script lang="ts">
	import type { HumbleBundle } from '$lib/services/humbleBundleService';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col">
	<h2 class="p-2 text-xl font-bold mt-safe-offset-2">Free Games</h2>
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		<a
			href="/hub/subscriptions"
			class="relative m-2 flex h-32 overflow-hidden rounded-xl bg-gradient-to-tr from-green-950 to-green-700 p-4 transition-all hover:scale-95"
		>
			<img
				class="absolute left-0 top-4 h-32"
				src="https://i.pinimg.com/originals/fa/74/b6/fa74b637b8ec162257e17dcedd06dc7a.png"
				alt="Gamepass"
			/>
			<h1 class="absolute bottom-4 left-4 text-2xl font-bold">
				Current games on<br /> GAMEPASS
			</h1>
		</a>

		<div
			class="relative m-2 flex h-32 overflow-hidden rounded-xl bg-gradient-to-br from-blue-950 to-blue-700 p-4"
		>
			<img
				class="absolute left-0 top-4 h-64"
				alt=""
				src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb6a00b4-9cdc-401d-9a61-41fdbe9d09ce/dfmag4u-f0271d8c-f4ad-4c08-bc52-f18d984c34f1.png/v1/fill/w_705,h_1134/kratos__render__by_yessing_dfmag4u-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA2MCIsInBhdGgiOiJcL2ZcL2ZiNmEwMGI0LTljZGMtNDAxZC05YTYxLTQxZmRiZTlkMDljZVwvZGZtYWc0dS1mMDI3MWQ4Yy1mNGFkLTRjMDgtYmM1Mi1mMThkOTg0YzM0ZjEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VcIknFKwzKxRDagtMAk2Wln_8HFeyJR6Lbr-uXFGcTk"
			/>

			<h1 class="absolute bottom-4 left-4 text-2xl font-bold">
				Current games on <br />
				Playstation Plus
			</h1>
		</div>

		<div
			class="relative m-2 flex h-32 overflow-hidden rounded-xl bg-gradient-to-br from-neutral-950 to-neutral-700 p-4"
		>
			<img
				class="absolute left-4 top-4 h-24"
				alt="Epic Games Store"
				src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Epic_games_store_logo.png"
			/>

			<img
				class="absolute right-4 top-4 h-44 rounded shadow-xl"
				alt="Wizard of Legend"
				src="https://www.humblegames.com/wp-content/uploads/2020/03/Wizard-of-Legend-Poster-720x1080-1.jpg"
			/>

			<h1 class="absolute bottom-4 left-24 text-2xl font-bold drop-shadow-xl">
				Epic Games Store Free Game
			</h1>
		</div>
	</div>
	<div
		class="flex h-[50px] w-[320px] flex-col items-center justify-center self-center bg-neutral-700"
	>
		Mobile Banner Ad
	</div>
	<section>
		<h2 class="p-2 text-2xl font-bold">Upcoming Games</h2>
	</section>
	<div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each data.bundles as bundle}
			<a
				href={'https://humblebundle.com' + bundle.product_url}
				target="_blank"
				class="relative m-2 flex h-32 overflow-hidden rounded-xl"
			>
				<img
					class="absolute h-full w-full object-cover"
					alt="Humble Bundle"
					src={bundle.tile_image}
				/>
				<div class="absolute h-full w-full bg-black/50"></div>
				<h1 class="absolute bottom-2 left-2 font-bold">
					{bundle.tile_name}
				</h1>
			</a>
		{/each}
	</div>
</div>
