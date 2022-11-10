<script lang="ts">
	import NoveltyCard from './NoveltyCard.svelte';
	export let noveltys: any;
</script>

<div class=" grid grid-cols-4 justify-items-center ">
	{#each noveltys as novelty}
		<NoveltyCard
			title={novelty.title}
			slug={novelty.slug}
			image={novelty.image}
			date={novelty.date}
		/>
	{/each}
</div>
