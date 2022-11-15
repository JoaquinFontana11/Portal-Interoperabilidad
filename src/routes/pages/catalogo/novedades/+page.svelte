<script lang="ts">
	import type { PageData } from './$types';
	import Section from '$lib/components/portal/Section.svelte';
	import CardNoveltySmall from '$lib/components/portal/CardNoveltySmall.svelte';

	export let data: PageData;
	let noveltys = JSON.parse(data.noveltys);
</script>

<Section
	title="Ultimas novedades"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<div class="grid grid-cols-5 md:grid-cols-3 items-center w-full">
		{#each noveltys as novelty}
			<CardNoveltySmall
				slug={novelty.slug}
				title={novelty.title}
				summary={novelty.summary}
				image={novelty.image}
			/>
		{/each}
	</div>
</Section>
