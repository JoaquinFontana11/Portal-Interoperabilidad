<script lang="ts">
	import { Document, Table, VideoCamera, PresentationChartBar, Icon } from 'svelte-hero-icons';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Section from '$lib/components/portal/Section.svelte';
	import AdminSearchInput from '$lib/components/AdminSearchInput.svelte';

	export let data: PageData;
	let filterFiles = '';

	const iconAndColor: any = {
		pdf: [Document, 'border-rose-300 hover:border-rose-500'],
		doc: [Document, 'border-blue-300 hover:border-blue-500'],
		docx: [Document, 'border-blue-300 hover:border-blue-500'],
		xlsx: [Table, 'border-green-300 hover:border-green-500'],
		xls: [Table, 'border-green-300 hover:border-green-500'],
		csv: [Table, 'border-green-300 hover:border-green-500'],
		pptx: [PresentationChartBar, 'border-orange-300 hover:border-orange-500'],
		mp4: [VideoCamera, 'border-cyan-300 hover:border-cyan-500']
	};
</script>

<Section
	title="Recursos"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<div class="bg-gray-50 rounded-lg shadow-lg p-10 ">
		<AdminSearchInput placeholder="Ingrese nombre de archivo..." bind:value={filterFiles} />
		<ul class="w-full divide-y divide-gray-200 dark:divide-gray-700">
			{#each JSON.parse(data.files).filter((file) => file.name
					.toLowerCase()
					.includes(filterFiles)) as file (file._id)}
				<div in:fade={{ duration: 300 }} animate:flip={{ duration: 300 }}>
					<li class="pb-3 sm:pb-4 pt-3 hover:transition hover:-translate-y-1 duration-75">
						<div class="flex items-center space-x-4">
							<div
								class={`flex-shrink-0 border-2 ${
									iconAndColor[file.name.split('.').at(-1)]
										? iconAndColor[file.name.split('.').at(-1)][1]
										: 'border-gray-300 hover:border-gray-300'
								} rounded-full p-1`}
							>
								<Icon
									src={iconAndColor[file.name.split('.').at(-1)]
										? iconAndColor[file.name.split('.').at(-1)][0]
										: Document}
									class="w-5 h-5 text-gray-800 transition duration-75 dark:text-indigo-700 group-hover:text-gray-900 dark:group-hover:text-white"
								/>
							</div>
							<div class="flex-1 min-w-0">
								<a
									href={file.url}
									class="text-sm font-medium text-gray-900 truncate dark:text-white"
								>
									{file.name}</a
								>
							</div>
							<div class="flex gap-3">
								<p
									class="inline-flex items-center text-base font-light text-gray-900 dark:text-white"
								>
									{file.description ? file.description : ''}
								</p>
								<p
									class="inline-flex items-center text-base font-light text-gray-900 dark:text-white"
								>
									{(file.size / 1048576).toFixed(0)} MB
								</p>
							</div>
						</div>
					</li>
				</div>
			{/each}
		</ul>
	</div>
</Section>
