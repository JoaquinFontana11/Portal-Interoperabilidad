<script lang="ts">
	export let slug: string;
	export let image: string;
	export let title: string;
	export let summary: string;
	export let body: string;
</script>

<div
	class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[600px] w-[700px] hover:transform hover:-translate-y-1 duration-75 truncate pb-2"
>
	<a href={slug}>
		<img class="rounded-t-lg h-[400px] w-[700px]" src={image} alt="" />
	</a>
	<div class="p-5 truncate max-h-48">
		<a href={slug}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
		<p class="mb-3 font-light text-gray-700 dark:text-gray-400">{summary}</p>
		<div class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
			{@html body}
		</div>
	</div>
</div>
