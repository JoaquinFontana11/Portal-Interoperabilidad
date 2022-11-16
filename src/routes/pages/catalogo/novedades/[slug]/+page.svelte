<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let novelty = JSON.parse(data.novelty);
	console.log(novelty);
</script>

<div
	class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[300px] w-[350px] hover:transform hover:-translate-y-1 duration-75"
>
	<a href="#" class="overflow-hidden">
		<img class="rounded-t-lg h-[200px]" src="#" alt="" />
	</a>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hola</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">AA</p>
	</div>
</div>
