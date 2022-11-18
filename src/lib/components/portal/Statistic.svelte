<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { BarChartSimple, PieChart } from '@carbon/charts-svelte';
	import { getColors } from './chartColors';

	export let graphs: any;

	const graphPie = graphs.find((graph) => graph.type == 'pie');
	const graphBar = graphs.find((graph) => graph.type == 'bar');
	const graphBarFloating = graphs.find((graph) => graph.type == 'bar-floating');
</script>

<div
	class="bg-neutral-50 rounded-lg shadow-lg p-10 grid grid-cols-4 gap-10 grid-flow-row-dense relative z-10"
>
	<div
		class="bg-neutral-50 h-[600px] justify-self-right rounded-lg relative p-3 flex justify-center items-center col-span-3 shadow-lg z-10"
	>
		<span class="absolute top-5 left-5 mb-3 font-light text-gray-500 dark:text-gray-400"
			>{graphBar.title}</span
		>
		<BarChartSimple
			data={graphBarFloating.data.map((data) => {
				return {
					group: data.name,
					value: data.value
				};
			})}
			options={{
				title: '',
				height: '500px',
				toolbar: { enabled: false },
				legend: { enabled: false },
				axes: {
					left: { mapsTo: 'value' },
					bottom: { mapsTo: 'group', scaleType: 'labels' }
				},
				color: {
					scale: getColors(graphBarFloating.data.map((data) => data.name))
				}
			}}
		/>
	</div>
	<div class="flex flex-col gap-10">
		<div
			class="bg-neutral-50 h-full justify-self-right rounded-lg relative p-3 flex justify-center items-center shadow-lg"
		>
			<span class="absolute top-5 left-5 mb-3 font-light text-gray-500 dark:text-gray-400"
				>total de servicios</span
			>
			<p class="text-6xl font-semibold">1500</p>
		</div>
		<div
			class="bg-neutral-50 h-full justify-self-right rounded-lg relative p-3 flex justify-center items-center shadow-lg"
		>
			<span class="absolute top-5 left-5 mb-3 font-light text-gray-500 dark:text-gray-400"
				>organismos conectados</span
			>
			<p class="text-6xl font-semibold">5173</p>
		</div>
	</div>
	<div
		class="bg-neutral-50 h-[600px] justify-self-right rounded-lg relative flex justify-center items-center col-span-2 shadow-lg"
	>
		<span class="absolute top-5 left-5 mb-3 font-light text-gray-500 dark:text-gray-400"
			>{graphPie.title}</span
		>
		<PieChart
			data={graphPie.data.map((data) => {
				return {
					group: data.name,
					value: data.value
				};
			})}
			options={{
				title: '',
				toolbar: { enabled: false },
				legend: { enabled: false },
				width: '500px',
				height: '500px',
				color: {
					scale: getColors(graphPie.data.map((data) => data.name))
				}
			}}
		/>
	</div>
	<div
		class="bg-neutral-50 h-[600px] justify-self-right rounded-lg relative p-3 flex justify-center items-center col-span-2 shadow-lg"
	>
		<span class="absolute top-5 left-5 mb-3 font-light text-gray-500 dark:text-gray-400"
			>{graphBar.title}</span
		>
		<BarChartSimple
			data={graphBarFloating.data.map((data) => {
				return {
					group: data.name,
					value: data.value
				};
			})}
			options={{
				title: '',
				height: '500px',
				toolbar: { enabled: false },
				legend: { enabled: false },
				axes: {
					bottom: { mapsTo: 'value' },
					left: { mapsTo: 'group', scaleType: 'labels' }
				},
				color: {
					scale: getColors(graphBarFloating.data.map((data) => data.name))
				}
			}}
		/>
	</div>
</div>
