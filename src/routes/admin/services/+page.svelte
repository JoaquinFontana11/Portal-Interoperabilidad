<script lang="ts">
	import type { PageData } from './$types';
	import { Plus, Table } from 'svelte-hero-icons';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import AdminList from '$lib/components/AdminList.svelte';
	import AdminButton from '$lib/components/AdminButton.svelte';
	import { validateInputText } from '$lib/components/inputs/validators';
	import AdminModalConfirm from '$lib/components/modals/AdminModalConfirm.svelte';

	export let data: PageData;
	let list = true;
	let loading = false;
	let modalConfirm = false;
	let messageSubmit = { status: false, message: '' };

	const components: IComponent[] = [
		{
			type: 'text',
			label: 'Nombre del servicio',
			name: 'name',
			value: '',
			required: true
		},
		{
			type: 'text',
			label: 'Modulo al que pertenece',
			name: 'module',
			value: '',
			required: true
		},
		{
			type: 'editor',
			label: 'Funcion del servicio',
			name: 'function',
			value: '',
			required: true
		},
		{
			type: 'text',
			label: 'Organismo',
			name: 'organism',
			value: '',
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
		console.log(data);
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
			await fetch(`/api/services`, {
				method: 'POST',
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
		}
	};

	const deleteService = async (e: CustomEvent) => {
		try {
			await fetch(`/api/services/${e.detail.id}`, {
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

	const modifyService = (e: CustomEvent) => {
		location.href = `/admin/services/${e.detail.id}`;
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
				headers={['nombre', 'modulo', 'funcion', 'organismo']}
				attributes={['name', 'module', 'function', 'organism']}
				data={JSON.parse(data.services)}
				on:delete-doc={deleteService}
				on:modify-doc={modifyService}
				caption="Servicios"
			/>
		{:else}
			<AdminForm
				title="Formulario de servicios"
				{components}
				submitMessage="Subir servicio"
				{loading}
				on:custom-submit={serviceSubmit}
			/>
		{/if}
	</div>
	<div>
		{#if modalConfirm}
			<AdminModalConfirm
				status={messageSubmit.status}
				message={messageSubmit.message}
				on:close={() => {
					modalConfirm = false;
					messageSubmit.status ? location.reload() : (list = false);
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
