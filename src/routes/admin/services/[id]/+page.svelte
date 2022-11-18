<script lang="ts">
	import type { PageData } from './$types';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import { page } from '$app/stores';
	import { validateInputText } from '$lib/components/inputs/validators';
	import AdminModalConfirm from '$lib/components/modals/AdminModalConfirm.svelte';

	export let data: PageData;
	let loading = false;
	const service = JSON.parse(data.service);
	let modalConfirm = false;
	let messageSubmit = { status: false, message: '' };

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

	const validateInputs = (data: any) => {
		if (
			validateInputText(data[0].value).status &&
			validateInputText(data[1].value).status &&
			validateInputText(data[3].value).status
		) {
			return { status: true, message: 'Se subio correctamente' };
		} else {
			return { status: false, message: 'Alguno de los datos ingresados es incorrecto' };
		}
	};

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
		messageSubmit = validateInputs(data);
		if (!messageSubmit.status) {
			loading = false;
			return (modalConfirm = true);
		}

		try {
			await fetch(`/api/services/${service._id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(body)
			});
			modalConfirm = true;
		} catch (err) {
			console.log(err);
		} finally {
			loading = false;
			location.href = '/admin/services';
		}
	};
</script>

<main class="ml-56 dark:bg-gray-900 bg-neutral-50 h-screen relative overflow-y-scroll">
	<div class="w-3/4 h-3/4 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
		<AdminForm
			title="Formulario de servicios"
			{components}
			submitMessage="Editar servicio"
			{loading}
			on:custom-submit={serviceSubmit}
		/>
	</div>
	<div>
		{#if modalConfirm}
			<AdminModalConfirm
				status={messageSubmit.status}
				message={messageSubmit.message}
				on:close={() => {
					modalConfirm = false;
					messageSubmit.status ? (location.href = '/admin/services') : '';
					// if (messageSubmit.status) {
					// 	location.reload();
					// } else {
					// 	list = false;
					// }
				}}
			/>
		{/if}
	</div>
</main>
