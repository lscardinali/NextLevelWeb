<script lang="ts">
	interface Props {
		value: boolean;
	}

	let { value = $bindable() }: Props = $props();

	function toggleSwitch() {
		value = !value;
	}
</script>

<button
	onclick={toggleSwitch}
	aria-label="Toggle switch"
	class="relative inline-flex h-7 w-11 {value && 'shadow-lg shadow-lime-500'} items-center rounded-full bg-{value ? 'lime-500' : 'neutral-500'} transition-colors duration-300 ease-in-out hover:cursor-pointer"
>
	<div
		class="absolute h-5 w-5 translate-x-{value ? '5' : '1'}  transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out"
	></div>
</button>
