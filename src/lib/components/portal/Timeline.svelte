<script lang="ts">
	import { type IconSource, Icon, Bookmark } from 'svelte-hero-icons';
	export let info: any;

	let current = 0;

	const getPorcentaje = () => {
		return 'h-[' + (16 + 52 * current) + 'px]';
	};
</script>

<ul class="cursor-pointer  relative ml-[14px]">
	<div class="absolute top-0 left-0 w-1 h-full bg-sky-100" />
	<div class={`absolute top-0 left-0 h-[16px] w-1 bg-sky-500 `} />
	{#each info as hito, i}
		<li
			class="cursor-pointer transform mb-5"
			on:click={() => {
				current = i;
			}}
			on:keydown={() => {
				current = i;
			}}
		>
			<div class="flex gap-1 trasform items-center -translate-x-[14px] z-10">
				<Icon
					src={Bookmark}
					class={`bg-white border-2 rounded-full p-1 ${
						current >= i ? 'border-sky-500 text-sky-500' : 'border-sky-100 text-sky-100'
					}  w-[32px] h-[32px]  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white z-20`}
				/>
				<div>
					<p class="font-medium text-gray-800">{hito.name}</p>
					{#if current == i}
						<span class="font-light text-gray-500">{hito.description}</span>
					{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>
