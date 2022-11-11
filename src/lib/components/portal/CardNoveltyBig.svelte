<script lang="ts">
	export let slug: string;
	export let image: string;
	export let title: string;
	export let summary: string;
	export let body: string;
</script>

<div
	class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[600px] w-[700px]"
>
	<a href={slug}>
		<img class="rounded-t-lg h-[400px]" src={image} alt="" />
	</a>
	<div class="p-5">
		<a href={slug}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
		<p class="mb-3 font-light text-gray-700 dark:text-gray-400">{summary}</p>
		<div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			"{@html body.substring(0, 300)}..."
		</div>
	</div>
</div>
