<script lang="ts">
	export let overview: string;
	export let title: string;
	export let direction = 'center';
</script>

<section class="h-auto w-screen p-10">
	<p
		class={`text-lg font-normal text-gray-500 lg:text-xldark:text-gray-400 ${
			direction == 'center' ? 'text-center' : 'text-left '
		}`}
	>
		{overview}
	</p>
	<h2
		class={`${
			direction == 'center' ? 'text-center' : 'text-left'
		} mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}
	>
		{title}
	</h2>
	<slot />
</section>
