<script lang="ts">
	export let slug: string;
	export let image: string;
	export let title: string;
	export let summary: string;
</script>

<div
	class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[300px] w-[350px] hover:transform hover:-translate-y-1 duration-75"
>
	<a href={slug} class="overflow-hidden">
		<img class="rounded-t-lg h-[200px] w-[350px]" src={image} alt="" />
	</a>
	<div class="p-5">
		<a href={slug}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
	</div>
</div>
