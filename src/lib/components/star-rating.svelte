<script lang="ts">
	let rating = $state(0);
	let hoveredRating = $state(0);

	let { initialRating = 0, onRate } = $props<{
		initialRating?: number;
		onRate?: (rating: number) => void;
	}>();

	$effect(() => {
		rating = initialRating;
	});

	function handleRate(value: number) {
		rating = value;
		onRate?.(value);
	}
</script>

<div class="flex gap-1">
	{#each Array(5) as _, i}
		<button
			class="group"
			on:mouseenter={() => (hoveredRating = i + 1)}
			on:mouseleave={() => (hoveredRating = 0)}
			on:click={() => handleRate(i + 1)}
			type="button"
		>
			<svg
				class={`h-5 w-5 transition-colors ${
					hoveredRating
						? i < hoveredRating
							? 'text-yellow-400'
							: 'text-gray-300'
						: i < rating
							? 'text-yellow-400'
							: 'text-gray-300'
				} group-hover:scale-110`}
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
				/>
			</svg>
		</button>
	{/each}
</div>
