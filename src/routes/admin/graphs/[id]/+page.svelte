<script lang="ts">
	import type { PageData } from './$types';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import AdminFormGraphData from '$lib/components/inputs/AdminFormGraphData.svelte';
	import { validateInputText, validateEmptyInput } from '$lib/components/inputs/validators';
	import AdminModalConfirm from '$lib/components/modals/AdminModalConfirm.svelte';

	export let data: PageData;
	let loading = false;
	const graph = JSON.parse(data.graph);
	let modalConfirm = false;
	let messageSubmit = { status: false, message: '' };

	const components: IComponent[] = [
		{
			type: 'text',
			label: 'Titulo del grafico',
			name: 'title',
			value: graph.title,
			required: true
		},
		{
			type: 'select',
			label: 'Tipo de grafico',
			name: 'type',
			value: graph.type,
			required: true,
			options: [
				{ value: 'pie', name: 'torta' },
				{ value: 'bar', name: 'barras' },
				{ value: 'bar-floating', name: 'barras flotantes' }
			]
		}
	];

	const validateInputs = (data: any) => {
		if (validateInputText(data[0].value).status && validateEmptyInput(data[1].value).status) {
			return { status: true, message: 'Se subio correctamente' };
		} else {
			return { status: false, message: 'Alguno de los datos ingresados es incorrecto' };
		}
	};

	const graphSubmit = async (e: CustomEvent) => {
		if (loading) return;

		loading = true;
		const { data } = e.detail;
		const body = {
			title: data[0].value,
			type: data[1].value
		};

		messageSubmit = validateInputs(data);
		if (!messageSubmit.status) {
			loading = false;
			return (modalConfirm = true);
		}

		try {
			await fetch(`/api/graphs/${graph._id}`, {
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
		}
	};
</script>

<main class="ml-56 dark:bg-gray-900 bg-neutral-50 h-screen relative overflow-y-scroll">
	<div class="w-3/4 h-3/4 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
		<AdminForm
			title="Formulario de graficos"
			{components}
			submitMessage="Modificar grafico"
			{loading}
			on:custom-submit={graphSubmit}
		>
			<AdminFormGraphData slot="bottom-slot" {graph} />
		</AdminForm>
	</div>
	<div>
		{#if modalConfirm}
			<AdminModalConfirm
				status={messageSubmit.status}
				message={messageSubmit.message}
				on:close={() => {
					modalConfirm = false;
					messageSubmit.status ? (location.href = '/admin/graphs') : '';
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
