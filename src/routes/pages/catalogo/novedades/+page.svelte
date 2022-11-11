<script lang="ts">
	import type { PageData } from './$types';
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import Section from '$lib/components/portal/Section.svelte';
	import CardNoveltySmall from '$lib/components/portal/CardNoveltySmall.svelte';
	import CardNoveltyBig from '$lib/components/portal/CardNoveltyBig.svelte';

	export let data: PageData;
	let noveltys = JSON.parse(data.noveltys);
	let current = 0;
	let noveltyBig = [noveltys[0]];
	let noveltySide = noveltys.filter((novelty) => novelty._id != noveltys[0]._id);

	const [send, receive] = crossfade({
		duration: 600
	});

	// setInterval(() => {
	// 	if (current == 2) current = 0;
	// 	else current++;

	// 	noveltySide = [...noveltySide, noveltyBig[0]];
	// 	noveltyBig = [noveltySide[0]];
	// 	noveltySide = noveltySide.filter((novelty) => novelty._id != noveltyBig[0]._id);
	// }, 5000);

	const x = (e: Event) => {
		if (current == 2) current = 0;
		else current++;

		noveltySide = [...noveltySide, noveltyBig[0]];
		noveltyBig = [noveltySide[0]];
		noveltySide = noveltySide.filter((novelty) => novelty._id != noveltyBig[0]._id);
	};
</script>

<div class="h-10" />
<svelte:window on:click={x} />
<Section
	title="Novedades recientes"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-white'
	}}
>
	<div class="grid grid-cols-3 grid-rows-2 w-full gap-4 justify-items-center ">
		{#each noveltyBig as novelty (novelty._id)}
			<div
				class="col-span-2 row-span-2"
				in:send={{ key: novelty._id }}
				out:receive={{ key: novelty._id }}
				animate:flip={{ duration: 400 }}
			>
				<CardNoveltyBig
					slug={novelty.slug}
					title={novelty.title}
					summary={novelty.summary}
					image={novelty.image}
					body={novelty.body}
				/>
			</div>
		{/each}
		{#each noveltySide as novelty (novelty._id)}
			<div
				in:send={{ key: novelty._id }}
				out:receive={{ key: novelty._id }}
				animate:flip={{ duration: 400 }}
			>
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
<!-- <Section
	title="Todas las novedades"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-white'
	}}
>
	<div class="grid grid-cols-4 justify-center w-full gap-10 ">
		{#each JSON.parse(data.noveltys) as novelty, i}
			<CardNoveltySmall
				slug={novelty.slug}
				title={novelty.title}
				summary={novelty.summary}
				image={novelty.image}
			/>
		{/each}
	</div>
</Section> -->
