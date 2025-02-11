<script lang="ts">
	import { Chart, type ChartConfiguration, type ChartData } from 'chart.js/auto';
	import { onMount } from 'svelte';

	let chartCanvas: HTMLCanvasElement;
	let chart: Chart;

	interface ChartProps {
		//data: ChartData;
		//config: ChartConfiguration;
		class?: string;
	}

	let {
		// data = [], config,
		class: className = ''
	}: ChartProps = $props();

	const chartData: ChartData = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		datasets: [
			{
				label: 'Players',
				data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
				backgroundColor: '#32CD32',
				borderWidth: 1
			}
		]
	};

	const chartConfig: ChartConfiguration = {
		type: 'bar',
		data: chartData,
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	};

	onMount(() => {
		if (chartCanvas) {
			chart = new Chart(chartCanvas, chartConfig);
		}

		return () => {
			// Cleanup on component destruction
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

<canvas bind:this={chartCanvas} class={className}></canvas>
