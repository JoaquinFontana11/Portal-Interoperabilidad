<script lang="ts">
	import { slide } from 'svelte/transition';
	import { type IconSource, Icon, Beaker } from 'svelte-hero-icons';

	interface Iitem {
		title: string;
		content: string;
		image: string;
	}

	export let items: Array<Iitem>;

	let imageSelected = items[0].image;
	let itemSelected = 0;
	let itemHover: number | null = null;
</script>

<div class="flex gap-10">
	<ul>
		{#each items as item, i}
			<li
				class={`border-l-2 ${
					i == itemSelected ? 'border-sky-500' : 'border-sky-200'
				} p-2 pb-3 flex flex-col items-start justify-center hover:cursor-pointer`}
				on:mouseenter={() => {
					itemHover = i;
				}}
				on:mouseleave={() => {
					itemHover = null;
				}}
				on:click={() => {
					itemSelected = i;
				}}
				on:keypress={() => {
					itemSelected = i;
				}}
			>
				<p
					class={`flex gap-2 items-center font-semibold  dark:text-white ${
						i == itemSelected ? 'text-gray-700' : 'text-gray-400'
					}`}
				>
					{#if i == itemSelected || i == itemHover}
						<Icon
							src={Beaker}
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					{/if}
					{item.title}
				</p>
				{#if i == itemSelected}
					<span class="font-light text-gray-500 dark:text-gray-400" in:slide>{item.content}</span>
				{/if}
			</li>
		{/each}
	</ul>
	<img src={imageSelected} class="w-1/2 rounded-lg shadow-xl" />
</div>
