<script lang="ts">
	export let overview: string = '';
	export let title: string;
	export let direction = 'center';
	export let titleColor = 'text-gray-900';
</script>

<section class="h-auto w-screen p-10">
	<p
		class={`text-lg font-normal text-gray-500 lg:text-xldark:text-gray-400 ${
			direction == 'center' ? 'text-center' : direction == 'left' ? 'text-left' : 'text-right'
		}`}
	>
		{overview}
	</p>
	<h2
		class={`${
			direction == 'center' ? 'text-center' : direction == 'left' ? 'text-left' : 'text-right'
		} mb-8 text-4xl font-extrabold tracking-tight leading-none ${titleColor} md:text-5xl lg:text-6xl dark:text-white`}
	>
		{title}
	</h2>
	<slot />
</section>
