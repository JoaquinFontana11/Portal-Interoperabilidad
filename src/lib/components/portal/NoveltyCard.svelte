<script lang="ts">
	export let title: string;
	export let slug: string;
	export let image: string;
	export let date: Date;
</script>

<div
	class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:transform hover:-translate-y-2 duration-75"
>
	<a href={slug}>
		<img class="rounded-t-lg" src={image} alt="" />
	</a>
	<div class="p-5">
		<a href={slug}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{new Date(date).toLocaleDateString()}
		</p>
	</div>
</div>
