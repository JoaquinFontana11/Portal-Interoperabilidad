<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { type IconSource, Icon, CheckCircle } from 'svelte-hero-icons';

	interface Iitem {
		title: string;
		content: string;
	}

	export let items: Array<Iitem>;

	let itemSelecteds = [true, false, false, false];
	let itemSelected = 0;
	let itemHover: number | null = null;
</script>

<div class="flex gap-10">
	<ul class="w-2/3">
		{#each items as item, i}
			<li
				class={`border-l-2 ${
					itemSelecteds[i] ? 'border-sky-500' : 'border-sky-200'
				} p-2 pb-3 flex flex-col items-start justify-center hover:cursor-pointer`}
				on:mouseenter={() => {
					itemHover = i;
				}}
				on:mouseleave={() => {
					itemHover = null;
				}}
				on:click={() => {
					itemSelecteds[i] = true;
					itemSelected = i;
				}}
				on:keypress={() => {
					// itemSelected = i;
				}}
			>
				<p
					class={`flex gap-2 items-center font-semibold  dark:text-white ${
						itemSelecteds[i] ? 'text-gray-500' : 'text-gray-400'
					} mb-3 text-lg font-medium`}
				>
					{#if itemSelecteds[i]}
						<Icon
							src={CheckCircle}
							class={`w-6 h-6  ${
								itemSelected == i ? 'text-sky-500' : 'text-gray-500'
							} transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
						/>
					{/if}
					{item.title}
				</p>
				{#if itemSelecteds[i]}
					<span
						class=" text-gray-900 text-justify dark:text-gray-400 font-light"
						in:slide={{ duration: 500, easing: quintOut }}>{item.content}</span
					>
				{/if}
			</li>
		{/each}
	</ul>
</div>
