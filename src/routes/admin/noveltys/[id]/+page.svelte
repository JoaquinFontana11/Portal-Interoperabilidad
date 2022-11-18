<script lang="ts">
	import type { PageData } from './$types';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import { validateInputText, validateEmptyInput } from '$lib/components/inputs/validators';
	import AdminModalConfirm from '$lib/components/modals/AdminModalConfirm.svelte';

	export let data: PageData;
	let loading = false;
	const novelty = JSON.parse(data.novelty);
	let modalConfirm = false;
	let messageSubmit = { status: false, message: '' };

	const components: IComponent[] = [
		{
			type: 'text',
			label: 'Titulo de la novedad',
			name: 'title',
			value: novelty.title,
			required: true
		},
		{
			type: 'text',
			label: 'Resumen de la novedad',
			name: 'summary',
			value: novelty.summary,
			required: true
		},
		{
			type: 'editor',
			label: 'Contenido de la novedad',
			name: 'body',
			value: novelty.body
		},
		{
			type: 'text',
			label: 'Url de la novedad (Poner un selector de imagen)',
			name: 'image',
			value: novelty.image,
			required: true
		},
		{
			type: 'date',
			label: 'Fecha de la novedad',
			name: 'date',
			value: new Date(novelty.date).toLocaleDateString().split('/').reverse().join('-'),
			required: true
		}
	];

	const validateInputs = (data: any) => {
		if (
			validateInputText(data[0].value).status &&
			validateInputText(data[1].value).status &&
			validateInputText(data[3].value).status &&
			validateEmptyInput(data[4].value).status
		) {
			return { status: true, message: 'Se subio correctamente' };
		} else {
			return { status: false, message: 'Alguno de los datos ingresados es incorrecto' };
		}
	};

	console.log(new Date(novelty.date).toLocaleDateString().split('/').reverse().join('-'));

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
				'/pages/catalogo/novedades/' +
				data[0].value
					.toLowerCase()
					.replace(/[^a-zA-Z]/g, ' ')
					.replace(/ /g, '-')
					.replace(/^(-)/g, '')
					.replace(/(-)$/g, ''),
			date: data[4].value
		};

		messageSubmit = validateInputs(data);
		if (!messageSubmit.status) {
			loading = false;
			return (modalConfirm = true);
		}

		try {
			await fetch(`/api/noveltys/${novelty._id}`, {
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
			title="Formulario de novedades"
			{components}
			submitMessage="Editar novedad"
			{loading}
			on:custom-submit={noveltySubmit}
		/>
	</div>
	<div>
		{#if modalConfirm}
			<AdminModalConfirm
				status={messageSubmit.status}
				message={messageSubmit.message}
				on:close={() => {
					modalConfirm = false;
					messageSubmit.status ? (location.href = '/admin/noveltys') : '';
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
