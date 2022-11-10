<script lang="ts">
	import type { PageData } from './$types';
	import { Icon, Chip, LightningBolt, Home, PresentationChartBar } from 'svelte-hero-icons';
	import Section from '$lib/components/portal/Section.svelte';
	// import FancyList from '$lib/components/portal/FancyList.svelte';
	import Timeline from '$lib/components/portal/Timeline.svelte';
	import Noveltys from '$lib/components/portal/Noveltys.svelte';

	export let data: PageData;

	const objetivos = [
		{
			content: 'Gestion publica de calidad',
			icon: Chip
		},
		{
			content: 'Mayor integracion y desarrollo de la sociedad',
			icon: Home
		},
		{
			content: 'Agilidad y facilidad en las gestiones administrativas',
			icon: LightningBolt
		},
		{
			content: 'Optimización de recursos minimizando los datos registrados manualmente',
			icon: PresentationChartBar
		}
	];

	const timeline = [
		{
			name: 'Presentacion del proyecto',
			description: 'Se presenta la propuesta del proceso de interoperabilidad',
			date: new Date(),
			image: '/img/timeline-presentacion.jpg'
		},
		{
			name: 'Aprobacion del proyecto',
			description: 'Comienzan a operar los servicios de interoperabilidad',
			date: new Date(),
			image: '/img/timeline-aprobacion.jpg'
		},
		{
			name: 'Ampliacion de servicios',
			description: 'Aumentamos el alcance del proyect con nuevos servicios',
			date: new Date(),
			image: '/img/timeline-ampliacion.jpg'
		},
		{
			name: 'Migracion de servicios',
			description:
				'Se realizo una migracion de los servicios para aumentar al eficiencia y la escalabilidad de los mismos',
			date: new Date(),
			image: '/img/timeline-migracion.jpg'
		},
		{
			name: 'Actualidad',
			description:
				'Actualmante el proyecto de interoperabilidad seencuentra trabajando con X organismos',
			date: new Date(),
			graph: JSON.parse(data.graphs).find((graph: any) => graph.type == 'pie')
		}
	];
</script>

<div class="h-128 w-fu bg-cover bg-center bg-hero-pattern flex items-center justify-center">
	<img src="/img/IOP.png" class="h-56" alt="logo interoperabilidad" />
</div>
<Section
	title="Objetivos/Beneficios"
	overview="¿Que es IOP?"
	config={{
		titleColor: 'text-gray-900',
		backgroundColor: 'bg-slate-50'
	}}
>
	<p
		class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center"
	>
		El proyecto de Interoperabilidad busca impulsar el trabajo colaborativo y el intercambio de
		información entre los organismos de la Administración Pública de la Provincia de Buenos Aires,
		en distintos niveles y jurisdicciones y con la ciudadanía.
	</p>
	<p
		class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center"
	>
		Objetivos y beneficios de habilitar el diálogo entre los sistemas informáticos a través de un
		BUS de Interoperabilidad promoviendo
	</p>
	<div class="flex gap-10 justify-center mt-20">
		{#each objetivos as objetivo}
			<div
				class="flex flex-col gap-5 items-center w-[300px] p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<Icon
					src={objetivo.icon}
					class="w-10 h-10 text-sky-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
				/>
				<p class="font-normal text-gray-700 dark:text-gray-400 text-center">{objetivo.content}</p>
			</div>
		{/each}
	</div>
</Section>
<Section title="Nuestro recorrido" overview="Conoce un poco mas sobre nosotros" direction="center">
	<Timeline info={timeline} />
	<a
		href="/pages/informacion/acerca-del-proyecto"
		class="inline-flex items-center justify-end font-medium text-sky-600 dark:text-blue-500 hover:underline relative w-full mt-10 hover:gap-1 duration-75"
	>
		Saber mas acerca de nosotros
		<svg
			aria-hidden="true"
			class="ml-1 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	</a>
</Section>
<Section
	title="Ultimas novedades"
	overview="Las ultimas noticias sobre el proyecto de Interoperabilidad"
	direction="center"
	config={{
		titleColor: 'text-gray-900',
		backgroundColor: 'bg-slate-50'
	}}
>
	<Noveltys noveltys={JSON.parse(data.noveltys)} />
	<a
		href="/pages/catalogo/novedades"
		class="inline-flex items-center justify-end font-medium text-sky-600 dark:text-blue-500 hover:underline relative w-full mt-10 hover:gap-2 duration-75"
	>
		Ver mas novedades
		<svg
			aria-hidden="true"
			class="ml-1 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	</a>
</Section>
