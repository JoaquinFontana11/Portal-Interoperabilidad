<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Section from '$lib/components/portal/Section.svelte';

	export let data: PageData;
	let services = JSON.parse(data.services).map((s) => {
		s.drop = false;
		return s;
	});
</script>

<Section
	title="Servicios"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<div class="bg-gray-50 rounded-lg shadow-lg p-10">
		<div
			id="accordion-flush"
			data-accordion="collapse"
			data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
			data-inactive-classes="text-gray-500 dark:text-gray-400"
		>
			{#each services as service}
				<h2 id="accordion-flush-heading-1">
					<button
						type="button"
						class={`flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 ${
							service.drop ? 'r' : 'border-b border-gray-200'
						} dark:border-gray-700 dark:text-gray-400 duration-75`}
						data-accordion-target="#accordion-flush-body-1"
						aria-expanded="true"
						aria-controls="accordion-flush-body-1"
						on:click={(e) => {
							service.drop = !service.drop;
						}}
					>
						<span>{service.name}</span>
						<svg
							data-accordion-icon
							class={`w-6 h-6  ${service.drop ? 'rotate-180' : ''} shrink-0`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</h2>
				{#if service.drop}
					<div
						id="accordion-flush-body-1"
						aria-labelledby="accordion-flush-heading-1"
						transition:fly={{
							duration: 200,
							x: 0,
							y: -10,
							opacity: 0.1,
							easing: quintOut
						}}
					>
						<div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								{service.function}
							</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</Section>
