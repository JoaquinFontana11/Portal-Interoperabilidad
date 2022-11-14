<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import CardNoveltySmall from '$lib/components/portal/CardNoveltySmall.svelte';
	import CardNoveltyBig from '$lib/components/portal/CardNoveltyBig.svelte';

	export let noveltys: any;

	const [send, receive] = crossfade({
		duration: 600
	});

	let hover = false;
	let noveltyBig = [noveltys[0]];
	let noveltySide = noveltys.filter((novelty) => novelty._id != noveltys[0]._id);

	setInterval(() => {
		if (hover) return;
		noveltySide = [...noveltySide, noveltyBig[0]];
		noveltyBig = [noveltySide[0]];
		noveltySide = noveltySide.filter((novelty) => novelty._id != noveltyBig[0]._id);
	}, 5000);
</script>

<div class="w-full flex justify-center">
	<div class="grid grid-cols-3 grid-rows-2  gap-4 justify-items-end w-auto">
		{#each noveltyBig as novelty (novelty._id)}
			<div
				class="col-span-2 row-span-2 place-self-center"
				in:send={{ key: novelty._id }}
				out:receive={{ key: novelty._id }}
				animate:flip={{ duration: 600 }}
				on:mouseenter={() => {
					hover = true;
				}}
				on:mouseleave={() => {
					hover = false;
				}}
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
				animate:flip={{ duration: 600 }}
				class="justify-self-start"
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
</div>
