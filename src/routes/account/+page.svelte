<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	import { page } from '$app/state';
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card flex w-fit flex-col gap-4 p-4">
		<form method="post" action="?/sendtestemail" use:enhance>
			<button class="rounded-md bg-neutral-800 px-4 py-2 text-white">Send Test Email</button>
		</form>
		{#if data.user}
			<p>Logged in as {data.user.username}</p>

			{#if data.user.steamId}
				<p>Steam ID: {data.user.steamId}</p>
			{:else}
				<form method="post" action="?/linksteam" use:enhance>
					<input
						type="text"
						name="steamid"
						class="rounded-md bg-neutral-800 px-4 py-2 text-white"
					/>

					<button class="rounded-md bg-neutral-800 px-4 py-2 text-white">Link Steam Account</button>
				</form>
			{/if}
			<form method="post" action="?/logout" use:enhance>
				<button class="rounded-md bg-red-800 px-4 py-2 text-white">Sign out</button>
			</form>
		{:else}
			<p>Login with Google</p>

			<a href="/account/signin/google" class="rounded-md bg-red-500 px-4 py-2 text-white"
				>Login with Google</a
			>
		{/if}
	</div>
</div>
