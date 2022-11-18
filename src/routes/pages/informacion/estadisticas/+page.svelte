<script lang="ts">
	import Section from '$lib/components/portal/Section.svelte';
	import Statistic from '$lib/components/portal/Statistic.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data.graphs);
</script>

<Section
	title="Estadisticas de uso"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<Statistic graphs={JSON.parse(data.graphs)} />
</Section>
