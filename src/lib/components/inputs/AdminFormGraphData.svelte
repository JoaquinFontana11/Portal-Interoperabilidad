<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import type { IComponent } from '$lib/types/Components';
	import AdminForm from '$lib/components/AdminForm.svelte';
	import AdminList from '$lib/components/AdminList.svelte';
	import { BarChartSimple, PieChart } from '@carbon/charts-svelte';
	import { validateInputText, validateEmptyInput } from '$lib/components/inputs/validators';
	import AdminModalConfirm from '$lib/components/modals/AdminModalConfirm.svelte';

	export let graph: any;
	let loading = false;
	let error = false;
	let messageSubmit = { status: false, message: '' };

	let components: IComponent[] = [
		{
			type: 'text',
			label: 'Nombre del dato',
			name: 'name',
			value: '',
			required: true
		},
		{
			type: 'number',
			label: 'Valor del dato',
			name: 'value',
			value: '',
			required: true
		}
	];

	if (graph.type == 'bar-floating')
		components.push({
			type: 'number',
			label: 'Valor de inicio del dato',
			name: 'valueInit',
			value: '',
			required: true
		});

	const validateInputs = (data: any) => {
		if (validateInputText(data[0].value).status && validateEmptyInput(data[1].value).status) {
			return { status: true, message: 'Se subio correctamente' };
		} else {
			return { status: false, message: 'Alguno de los datos ingresados es incorrecto' };
		}
	};

	const dataSubmit = async (e: CustomEvent) => {
		if (loading) return;

		loading = true;
		const { data } = e.detail;
		console.log(data);

		messageSubmit = validateInputs(data);
		if (!messageSubmit.status) {
			loading = false;
			return (error = true);
		}

		if (graph.type !== 'bar-floating')
			graph.data = [
				...graph.data,
				{
					name: data[0].value,
					value: data[1].value
				}
			];
		else
			graph.data = [
				...graph.data,
				{
					name: data[0].value,
					value: data[1].value,
					valueInit: data[2].value
				}
			];

		try {
			await fetch(`/api/graphs/${graph._id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(graph)
			});
			error = false;
		} catch (err) {
			console.log(err);
		} finally {
			loading = false;
		}
	};
	const deleteData = async (e: CustomEvent) => {
		graph.data = graph.data.filter(
			(data) => data.value != e.detail.doc.value && data.name != e.detail.doc.name
		);
		try {
			await fetch(`/api/graphs/${graph._id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(graph)
			});
		} catch (err) {
			console.log(err);
		}
	};
</script>

<AdminForm
	title="Ingreso de datos"
	{components}
	submitMessage="Agregar dato"
	{loading}
	on:custom-submit={dataSubmit}
/>
{#if error}
	<div class="w-full flex justify-center">
		<span class="block text-red-600 dark:text-red-500 mb-2 text-base font-medium"
			>Algunos de los datos ingresados es Incorrecto</span
		>
	</div>
{/if}

<p>Previsualizacion</p>
<div class="w-full flex justify-center gap-1">
	{#if graph.data.length != 0}
		{#if graph.type == 'pie'}
			<PieChart
				data={graph.data.map((data) => {
					return {
						group: data.name,
						value: data.value
					};
				})}
				options={{
					title: graph.title,
					height: '500px',
					width: '500px',
					toolbar: { enabled: false }
				}}
			/>
		{:else if graph.type == 'bar-floating'}
			<BarChartSimple
				data={graph.data.map((data) => {
					return {
						group: data.name,
						value: [data.valueInit, data.value]
					};
				})}
				options={{
					title: graph.title,
					height: '400px',
					toolbar: { enabled: false },
					axes: {
						bottom: { mapsTo: 'value' },
						left: { mapsTo: 'group', scaleType: 'labels' }
					}
				}}
			/>
		{:else}
			<BarChartSimple
				data={graph.data.map((data) => {
					return {
						group: data.name,
						value: data.value
					};
				})}
				options={{
					title: graph.title,
					height: '400px',
					toolbar: { enabled: false },
					axes: {
						left: { mapsTo: 'value' },
						bottom: { mapsTo: 'group', scaleType: 'labels' }
					}
				}}
			/>
		{/if}
	{:else}
		<p>Agrega datos para visualizar el grafico!</p>
	{/if}
	{#if graph.type == 'bar-floating'}
		<AdminList
			headers={['nombre', 'valor', 'inicio de valor']}
			attributes={['name', 'value', 'valueInit']}
			data={graph.data}
			on:delete-doc={deleteData}
			caption="Datos del grafico"
			actions={['delete']}
		/>
	{:else}
		<AdminList
			headers={['nombre', 'valor']}
			attributes={['name', 'value']}
			data={graph.data}
			on:delete-doc={deleteData}
			caption="Datos del grafico"
			actions={['delete']}
		/>
	{/if}
</div>
