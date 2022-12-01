<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Section from '$lib/components/portal/Section.svelte';
	import CardNoveltySmall from '$lib/components/portal/CardNoveltySmall.svelte';
	import AdminSearchInput from '$lib/components/AdminSearchInput.svelte';

	export let data: PageData;
	let noveltys = JSON.parse(data.noveltys);
	let filterNoveltys = '';
</script>

<Section
	title="Ultimas novedades"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<div class="mb-6 flex flex-col z-10 relative">
		<div class="w-96 relative self-end">
			<AdminSearchInput placeholder="Ingrese nombre de la novedad..." bind:value={filterNoveltys} />
		</div>
	</div>

	<div class="grid grid-cols-5 md:grid-cols-3 items-center w-full z-10 relative gap-5">
		{#each noveltys.filter((novelty) => novelty.title
				.toLowerCase()
				.includes(filterNoveltys)) as novelty (novelty._id)}
			<div in:fade={{ duration: 300 }} animate:flip={{ duration: 300 }}>
				<CardNoveltySmall
					slug={novelty.slug}
					title={novelty.title}
					summary={novelty.summary}
					image={novelty.image}
				/>
			</div>
		{/each}
	</div>
</Section>
