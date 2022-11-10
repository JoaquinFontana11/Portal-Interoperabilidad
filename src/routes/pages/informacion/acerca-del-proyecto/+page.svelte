<script lang="ts">
	import Section from '$lib/components/portal/Section.svelte';
	import FancyList from '$lib/components/portal/FancyList.svelte';

	const ejes = [
		{
			title: 'Interoperabilidad Semantica',
			content:
				'Asegurar que el significado de la información intercambiada sea interpretada de forma precisa, inteligible y sin ambigüedades'
		},
		{
			title: 'Interoperabilidad Juridica',
			content:
				'Definir los lineamientos legales de los intercambios de información entre los sujetos comprendidos, asegurando el cumplimiento de la normativa vigente y garantizando los principios, derechos y obligaciones de las partes involucradas'
		},
		{
			title: 'Interoperabilidad Tecnica',
			content:
				'Permitir el intercambio de información entre los sistemas de los sujetos comprendidos en la interoperabilidad, asegurando las exigencias de calidad, seguridad y nivel de servicio. Incluye aspectos claves como interfaces abiertas, servicios de interconexión, software de integración de datos, accesibilidad y seguridad de servicios'
		},
		{
			title: 'Interoperabilidad Organizacional',
			content:
				'Brindar el soporte necesario, a través del portal web de Interoperabilidad, que posibilite a los Organismos Productores y Consumidores gestionar los servicios disponibles'
		}
	];
</script>

<div class="h-10" />
<Section
	title="Acerca de este proyecto"
	config={{
		titleColor: 'text-sky-400',
		backgroundColor: 'bg-white'
	}}
>
	<p class="mb-3 text-lg font-medium text-gray-500 md:text-xl dark:text-gray-400">
		El portal de interoperabilidad es el sitio web de gestión y canal institucional, a través del
		cual se dará publicidad a los servicios de información disponibles, detallando las bases y
		condiciones de acceso y utilización; sus modalidades de consumo, consulta e interacción; los
		protocolos funcionales o técnicos necesarios; y las condiciones de seguridad aplicables.
	</p>
	<h4 class=" font-semibold text-gray-500 dark:text-gray-400 text-3xl mb-2 mt-2">Objetivos</h4>
	<p class="mb-3 text-lg font-medium text-gray-500 md:text-xl dark:text-gray-400">
		Facilitar de manera permanente el acceso, consulta y transferencia de información pública para
		lograr la interconexión y operación simultánea de los sistemas operantes en la órbita de la
		administración pública, posibilitando un cambio de paradigma que simplifique la vida a los
		ciudadanos, colaborando con un estado más justo con administración de recursos equitativos y
		disminución de brechas sociales.
	</p>
	<h4 class="font-semibold text-gray-500 dark:text-gray-400 text-3xl mb-2 mt-2">Ejes</h4>
	<FancyList items={ejes} />
	<h4 class="font-semibold text-gray-500 dark:text-gray-400 text-3xl mb-2 mt-2">
		Proyectos de Integracion
	</h4>
	<p class="mb-3 text-lg font-medium text-gray-500 md:text-xl dark:text-gray-400">
		Nacen de la voluntad por parte de un organismo productor de información (para disponibilizar sus
		servicios), como también del interés un organismo consumidor (para acceder a los mismos) a
		través del BUS de Interoperabilidad. Todos los proyectos que se inicien deberán pasar por una
		etapa de testeo de servicios, para luego, comprobado su correcto funcionamiento, avanzar a una
		etapa de consumo en ambiente productivo, según los procesos de gestión definidos por la
		Dirección Provincial de Mejora Administrativa.
	</p>
</Section>
