<script lang="ts">
	import type { PageData } from './$types';
	import Section from '$lib/components/portal/Section.svelte';

	export let data: PageData;
</script>

<Section title="Recursos" titleColor="text-cyan-500">
	{#each JSON.parse(data.files) as file}
		<a href={file.url} class="block"> {file.name}</a>
	{/each}
	<!-- {JSON.stringify(data)} -->
</Section>
