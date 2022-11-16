<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let novelty = JSON.parse(data.novelty);
</script>

<div class="p-10">
	<img class="rounded-t-lg p-5 float-right w-1/2 h-1/2" src={novelty.image} alt="" />
	<h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
		{novelty.title}
	</h5>
	<p class="text-2xl font-bold tracking-tight text-gray-600 dark:text-white mb-2">
		{novelty.summary}
	</p>
	<div class="text-justify indent-5">
		{@html novelty.body}
	</div>
</div>
