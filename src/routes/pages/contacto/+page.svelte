<script lang="ts">
	import Section from '$lib/components/portal/Section.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let loading = false;
	const mail = {
		from: '',
		email: '',
		organismo: '',
		reason: '',
		body: ''
	};

	const sendMail = async () => {
		if (loading) return;
		loading = true;
		try {
			await fetch(`/api/email`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(mail)
			});
		} catch (err) {
			console.log(err);
		} finally {
			loading = false;
		}
	};
</script>

<Section
	title="Formulario de contacto"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-transparent'
	}}
>
	<form on:submit|preventDefault={sendMail} class="flex flex-col gap-3 w-1/2 ml-auto mr-auto">
		<div>
			<label
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				for="nombre-apellido">Nombre y apellido</label
			>
			<input
				id="nombre-apellido"
				type="text"
				class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				bind:value={mail.from}
			/>
		</div>
		<div>
			<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="email"
				>Email</label
			>
			<input
				id="email"
				type="email"
				class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				bind:value={mail.email}
			/>
		</div>
		<div>
			<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="organismo"
				>Organismo</label
			>
			<select
				id="organismo"
				class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				bind:value={mail.organismo}
			>
				<option>Organismo 1</option>
				<option>Organismo 2</option>
			</select>
		</div>
		<div>
			<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="consulta"
				>Motivo de consulta</label
			>
			<select
				id="consulta"
				class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				bind:value={mail.reason}
			>
				<option>Motivo 1</option>
				<option>Motivo 2</option>
			</select>
		</div>
		<div>
			<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="body"
				>Escriba su mensaje</label
			>
			<textarea
				id="body"
				class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				bind:value={mail.body}
			/>
		</div>
		<button
			class="w-full flex items-center justify-center m-0 h-16 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
		>
			{#if loading}
				<Spinner />
			{:else}
				Enviar mail
			{/if}
		</button>
	</form>
</Section>
