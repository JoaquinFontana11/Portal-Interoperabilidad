<script lang="ts">
	import type { PageData } from './$types';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
	let loading = false;
	const service = JSON.parse(data.service);

	const components: IComponent[] = [
		{
			type: 'text',
			label: 'Nombre del servicio',
			name: 'name',
			value: service.name,
			required: true
		},
		{
			type: 'text',
			label: 'Modulo al que pertenece',
			name: 'module',
			value: service.module,
			required: true
		},
		{
			type: 'editor',
			label: 'Funcion del servicio',
			name: 'function',
			value: service.function,
			required: true
		},
		{
			type: 'text',
			label: 'Organismo',
			name: 'organism',
			value: service.organism,
			required: true
		}
	];

	const serviceSubmit = async (e: CustomEvent) => {
		if (loading) return;

		loading = true;
		const { data } = e.detail;
		const body = {
			name: data[0].value,
			module: data[1].value,
			function: data[2].value,
			organism: data[3].value
		};

		try {
			await fetch(`/api/services/${service._id}`, {
				method: 'PATCH',
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
			location.href = '/admin/services';
		}
	};
</script>

<main class="ml-56 dark:bg-gray-900 bg-gray-100 h-screen relative overflow-y-scroll">
	<div class="w-3/4 h-3/4 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
		<AdminForm
			title="Formulario de servicios"
			{components}
			submitMessage="Editar servicio"
			{loading}
			on:custom-submit={serviceSubmit}
		/>
	</div>
</main>
