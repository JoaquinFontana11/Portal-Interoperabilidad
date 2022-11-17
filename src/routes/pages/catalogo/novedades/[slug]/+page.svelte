<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let novelty = JSON.parse(data.novelty);
	console.log(novelty);
</script>

<div class="p-10 min-h-screen">
	<div class="bg-gray-50 rounded-md shadow-md p-10 h-full">
		<img class="rounded-lg p-5 float-right w-1/2 " src={novelty.image} alt="" />
		<p class="text-gray-500 text-sm">{novelty.date.split('T')[0]}</p>
		<h2
			class="mb-2 tracking-tight text-sky-400 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl"
		>
			{novelty.title}
		</h2>
		<p class=" tracking-tight font-semibold text-gray-500 text-xl mb-2 mt-2">
			{novelty.summary}
		</p>
		<div class="text-justify indent-5 mb-3 text-lg font-light text-gray-500 md:text-xl">
			{@html novelty.body}
		</div>
	</div>
</div>
