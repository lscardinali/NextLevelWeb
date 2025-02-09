<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card flex w-fit flex-col gap-4 p-4">
		{#if data.user}
			<p>Logged in as {data.user.username}</p>
			<form method="post" action="?/logout" use:enhance>
				<button>Sign out</button>
			</form>
		{:else}
			<p>Login with Google</p>

			<a href="/account/signin/google" class="rounded-md bg-red-500 px-4 py-2 text-white"
				>Login with Google</a
			>
		{/if}
	</div>
</div>
