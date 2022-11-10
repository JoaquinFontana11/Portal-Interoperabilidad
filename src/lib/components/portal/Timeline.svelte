<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { lazyLoad } from './lazyLoad.js';
	import { DonutChart } from '@carbon/charts-svelte';
	export let info: any;

	let current = 0;

	// const scrollTimeline = (e: Event) => {
	// 	console.log(e);
	// 	current++;
	// 	const target = e.target as Element;
	// 	console.log(target.scrollTop);
	// 	target.scroll(0, current * 92);
	// };

	const gotToTimeline = (i: number) => {
		current = i;
		const div = document.querySelector('.div-parent') as Element;
		div.scroll({
			top: 84 * current - 84,
			behavior: 'smooth'
		});
	};
</script>

<div class="h-[420px] flex gap-10 justify-center">
	{#each info as hito, i}
		<figure style={current == i ? 'display:block' : 'display: none'}>
			{#if hito.image}
				<img
					use:lazyLoad={hito.image}
					alt="imagen de timeline"
					class="w-[600px]  rounded-lg shadow-lg"
					src="/img/placeholder.jpg"
				/>
			{:else}
				<DonutChart
					data={hito.graph.data.map((data) => {
						return {
							group: data.name,
							value: data.value
						};
					})}
					options={{
						title: '',
						toolbar: { enabled: false },
						legend: { enabled: false },
						pie: {
							labels: {
								enabled: false
							}
						},
						width: '600px',
						height: '400px',
						donut: {
							alignment: 'center',
							center: {
								label: 'Organismos'
							}
						}
					}}
				/>
			{/if}
		</figure>
	{/each}
	<div
		class="overflow-y-scroll div-parent scrollbar-hide  p-5"
		style={`border: 1px solid rgb(229 231 235 / var(--tw-border-opacity));`}
	>
		<ol
			style={`border-left: 1px solid rgb(229 231 235 / var(--tw-border-opacity));`}
			class="relative border-l border-gray-200 ml-[6px] duration-200 "
		>
			{#each info as hito, i}
				<li
					class={`mb-10 ml-4 ${current == i ? 'ml-8' : ''} cursor-pointer `}
					on:click={(e) => gotToTimeline(i)}
					on:keydown={() => (current = i)}
				>
					<div
						class={`absolute w-3 h-3 ${
							current == i ? 'bg-sky-400' : 'bg-gray-200 '
						} rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700`}
					/>
					<time
						class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 border-"
						>{hito.date.toLocaleDateString()}</time
					>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						{hito.name}
					</h3>
					{#if current == i}
						<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 w-[500px]">
							{hito.description}
						</p>
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.pie-label {
		display: none !important;
	}
	.callout {
		display: none !important;
	}
</style>
