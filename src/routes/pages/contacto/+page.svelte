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
	<form
		on:submit|preventDefault={sendMail}
		class="flex gap-3 w-1/2 ml-auto mr-auto bg-gray-100 rounded-lg shadow-lg p-10 max-h-96 relative z-10"
	>
		<div class="flex flex-col gap-3 w-full">
			<div>
				<label
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					for="nombre-apellido">Nombre y apellido</label
				>
				<input
					id="nombre-apellido"
					type="text"
					class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
					class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
					bind:value={mail.email}
				/>
			</div>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					for="organismo">Organismo</label
				>
				<select
					id="organismo"
					class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
					bind:value={mail.organismo}
				>
					<option>Organismo 1</option>
					<option>Organismo 2</option>
				</select>
			</div>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					for="consulta">Motivo de consulta</label
				>
				<select
					id="consulta"
					class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
					bind:value={mail.reason}
				>
					<option>Quiero saber más acerca de IOP</option>
					<option>Quiero saber más acerca de algún servicio</option>
					<option>Quiero iniciar un proyecto de integración</option>
					<option>Quiero ofrecer un servicio para su consumo</option>
				</select>
			</div>
		</div>
		<div class="flex flex-col gap-3 w-full h-full">
			<div>
				<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="body"
					>Escriba su mensaje</label
				>
				<textarea
					id="body"
					class="h-full max-h-60 focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
					bind:value={mail.body}
				/>
			</div>
			<button
				class="w-full flex items-center justify-center m-0 h-10 focus:outline-none text-white bg-sky-400 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-900"
			>
				{#if loading}
					<Spinner />
				{:else}
					Enviar mail
				{/if}
			</button>
		</div>
	</form>
</Section>
