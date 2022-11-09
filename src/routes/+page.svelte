<script lang="ts">
	import { Icon, Chip, LightningBolt, Home, PresentationChartBar, Beaker } from 'svelte-hero-icons';
	import Section from '$lib/components/portal/Section.svelte';
	import FancyList from '$lib/components/portal/FancyList.svelte';

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

	const ejes = [
		{
			title: 'Interoperabilidad Semantica',
			content:
				'Asegurar que el significado de la información intercambiada sea interpretada de forma precisa, inteligible y sin ambigüedades',
			image: '/img/banner.jpg'
		},
		{
			title: 'Interoperabilidad Juridica',
			content:
				'Definir los lineamientos legales de los intercambios de información entre los sujetos comprendidos, asegurando el cumplimiento de la normativa vigente y garantizando los principios, derechos y obligaciones de las partes involucradas',
			image: '/img/banner.jpg'
		},
		{
			title: 'Interoperabilidad Tecnica',
			content:
				'Permitir el intercambio de información entre los sistemas de los sujetos comprendidos en la interoperabilidad, asegurando las exigencias de calidad, seguridad y nivel de servicio. Incluye aspectos claves como interfaces abiertas, servicios de interconexión, software de integración de datos, accesibilidad y seguridad de servicios',
			image: '/img/banner.jpg'
		},
		{
			title: 'Interoperabilidad Organizacional',
			content:
				'Brindar el soporte necesario, a través del portal web de Interoperabilidad, que posibilite a los Organismos Productores y Consumidores gestionar los servicios disponibles',
			image: '/img/banner.jpg'
		}
	];

	const proyectos = [
		{
			name: 'Titulo de proyecto 1',
			content: 'Descripcion breve del proyecto 1',
			icon: Beaker,
			colorIcon: 'bg-[#2EBDF855]'
		},
		{
			name: 'Titulo de proyecto 2',
			content: 'Descripcion breve del proyecto 2',
			icon: Beaker,
			colorIcon: 'bg-[#2EBDF855]'
		},
		{
			name: 'Titulo de proyecto 2',
			content: 'Descripcion breve del proyecto 2',
			icon: Beaker,
			colorIcon: 'bg-[#2EBDF855]'
		},
		{
			name: 'Titulo de proyecto 2',
			content: 'Descripcion breve del proyecto 2',
			icon: Beaker,
			colorIcon: 'bg-[#2EBDF855]'
		}
	];
</script>

<div class="h-128 w-fu bg-cover bg-center bg-hero-pattern flex items-center justify-center">
	<img src="/img/IOP.png" class="h-56" alt="logo interoperabilidad" />
</div>
<Section title="Objetivos/Beneficios" overview="¿Que es IOP?">
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
					class="w-10 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
				/>
				<p class="font-normal text-gray-700 dark:text-gray-400 text-center">{objetivo.content}</p>
			</div>
		{/each}
	</div>
</Section>
<Section
	title="Ejes de Interoperabilidad"
	overview="Conoce un poco mas sobre nosotros"
	direction="left"
>
	<FancyList items={ejes} />
</Section>

<Section title="Proyectos" overview="Conoce un poco mas sobre nuestros proyectos" direction="left">
	<div class="flex gap-10 justify-center">
		{#each proyectos as proyecto}
			<div
				class="flex flex-col gap-5 items-center w-[400px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden "
			>
				<div class={`${proyecto.colorIcon} w-full p-2 flex justify-center items-center`}>
					<Icon
						src={proyecto.icon}
						class="w-14 h-14 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</div>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{proyecto.name}
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400 pb-4">{proyecto.content}</p>
			</div>
		{/each}
	</div>
</Section>
