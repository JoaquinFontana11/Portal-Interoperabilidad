<script lang="ts">
	import type { PageData } from './$types';
	import { Plus, Table } from 'svelte-hero-icons';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import AdminList from '$lib/components/AdminList.svelte';
	import AdminListRowNovelty from '$lib/components/rows/AdminListRowNovelty.svelte';
	import AdminButton from '$lib/components/AdminButton.svelte';

	export let data: PageData;
	let list = true;
	let loading = false;

	const components: IComponent[] = [
		{
			type: 'text',
			label: 'Titulo de la novedad',
			name: 'title',
			value: '',
			required: true
		},
		{
			type: 'text',
			label: 'Resumen de la novedad',
			name: 'summary',
			value: '',
			required: true
		},
		{
			type: 'editor',
			label: 'Contenido de la novedad',
			name: 'body',
			value: ''
		},
		{
			type: 'text',
			label: 'Url de la novedad (Poner un selector de imagen)',
			name: 'image',
			value: '',
			required: true
		},
		{
			type: 'date',
			label: 'Fecha de la novedad',
			name: 'date',
			value: '',
			required: true
		}
	];

	const noveltySubmit = async (e: CustomEvent) => {
		if (loading) return;

		loading = true;
		const { data } = e.detail;
		const body = {
			title: data[0].value,
			summary: data[1].value,
			body: data[2].value,
			image: data[3].value,
			slug:
				'/novedades/' +
				data[0].value
					.toLowerCase()
					.replace(/[^a-zA-Z]/g, ' ')
					.replace(/ /g, '-')
					.replace(/^(-)/g, '')
					.replace(/(-)$/g, ''),
			date: new Date(data[4].value).setDate(new Date(data[4].value).getDate() + 1)
		};

		try {
			await fetch(`/api/noveltys`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(body)
			});
		} catch (err) {
			console.log(err);
		} finally {
			loading = false;
		}
	};

	const deleteNovelty = async (e: CustomEvent) => {
		try {
			await fetch(`/api/noveltys/${e.detail.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			});
		} catch (err) {
			console.log(err);
		} finally {
			location.href = location.href;
		}
	};

	const modifyNovelty = (e: CustomEvent) => {
		location.href = `/admin/noveltys/${e.detail.id}`;
	};
</script>

<AdminButton
	icon={list ? Plus : Table}
	on:click={() => {
		list = !list;
	}}
/>
<main class="ml-56 dark:bg-gray-900 bg-gray-100 h-screen relative overflow-y-scroll">
	<div class="w-3/4 h-3/4 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
		{#if list}
			<AdminList
				headers={['titulo', 'resumen', 'slug', 'imagen', 'fecha']}
				attributes={['title', 'summary', 'slug', 'image', 'date']}
				data={JSON.parse(data.noveltys)}
				on:delete-doc={deleteNovelty}
				on:modify-doc={modifyNovelty}
				caption="Novedades"
				customRow={AdminListRowNovelty}
			/>
		{:else}
			<AdminForm
				title="Formulario de novedades"
				{components}
				submitMessage="Subir novedad"
				{loading}
				on:custom-submit={noveltySubmit}
			/>
		{/if}
	</div>
</main>
