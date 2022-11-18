<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/portal/Navbar.svelte';
	import Footer from '$lib/components/portal/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const menus = [
		{
			name: 'Informacion',
			drop: false,
			submenus: [
				{
					name: 'Acerca de este proyecto',
					slug: '/pages/informacion/acerca-del-proyecto',
					description: 'Informacion sobre quienes somos y que hacemos'
				},
				{
					name: 'Estadisticas',
					slug: '/pages/informacion/estadisticas',
					description: 'Todas las estadisticas de uso de nuestros servicios'
				},
				{
					name: 'Normativa',
					slug: '/pages/informacion/normativa',
					description: 'Informacion sobre las normativas con la que trabajamos'
				},
				{
					name: 'Recursos',
					slug: '/pages/informacion/recursos',
					description: 'Descarga todos los archivos necesarios para trabajar con nosotros'
				}
			]
		},
		{
			name: 'Catalogo',
			drop: false,
			submenus: [
				{
					name: 'Servicios',
					slug: '/pages/catalogo/servicios',
					description: 'Mira todos los servicios que ofrecemos!'
				},
				{
					name: 'Novedades',
					slug: '/pages/catalogo/novedades',
					description: 'Enterate de las ultimas novedades'
				}
			]
		},
		{
			name: 'Contacto',
			slug: '/pages/contacto'
		}
	];

	const linksFooter = [
		{
			title: 'titulo 1',
			links: [
				{
					name: 'link 1',
					href: '#'
				},
				{
					name: 'link 2',
					href: '#'
				}
			]
		},
		{
			title: 'titulo 2',
			links: [
				{
					name: 'link 1',
					href: '#'
				},
				{
					name: 'link 2',
					href: '#'
				}
			]
		},
		{
			title: 'titulo 3',
			links: [
				{
					name: 'link 1',
					href: '#'
				},
				{
					name: 'link 2',
					href: '#'
				}
			]
		}
	];
</script>

{#if data.admin}
	<slot />
{:else}
	<Navbar {menus} />
	<main class="min-h-screen bg-section z-10">
		<slot />
	</main>
	<Footer links={linksFooter} />
{/if}
