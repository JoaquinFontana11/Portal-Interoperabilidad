<script lang="ts">
	import AdminForm from '$lib/components/AdminForm.svelte';

	let loading = false;

	interface IOption {
		name: string;
		value: string | boolean | number;
	}
	interface Icomponent {
		type: string;
		label: string;
		name: string;
		value: any;
		required?: boolean;
		files?: FileList | Array<File>;
		options?: IOption[];
	}

	const components: Icomponent[] = [
		{
			type: 'file',
			label: 'Imagen a agregar',
			name: 'image',
			value: '',
			files: []
		},
		{
			type: 'text',
			label: 'Texto alternativo',
			name: 'alt',
			value: ''
		}
	];

	const imageSubmit = async (e: CustomEvent) => {
		console.log(e.detail);
		if (loading) return;

		const { data } = e.detail;
		const files = data[0].value;

		if (!files[0].type.includes('image'))
			throw new Error('No podes subir algo que no sea una imagen');

		loading = true;

		const reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = async (e) => {
			const target = e.target as FileReader;
			const fileReaderResult = target.result as string;
			const imgData = fileReaderResult.split(',');
			const body = {
				image: imgData[1],
				alt: data[1].value
			};
			console.log(body);
			try {
				await fetch(`/api/image`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify(body)
				});
				// location.reload();
			} catch (err) {
				console.log('asdasd', err);
			} finally {
				loading = false;
			}
		};
	};
</script>

<main class="ml-56 dark:bg-gray-900 bg-gray-100 h-screen relative overflow-y-scroll">
	<div class="w-3/4 h-3/4 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
		<AdminForm
			title="Formulario de alta de imagenes"
			{components}
			submitMessage="Subir imagen"
			{loading}
			on:custom-submit={imageSubmit}
		/>
	</div>
</main>
