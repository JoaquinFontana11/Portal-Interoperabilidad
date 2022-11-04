<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/portal/Navbar.svelte';
	import Footer from '$lib/components/portal/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log(data);

	const menus = [
		{
			name: 'Inicio',
			slug: '/'
		},
		{
			name: 'Informacion',
			drop: false,
			submenus: [
				{
					name: 'Acerca de este proyecto',
					slug: '/info/acerca-del-proyecto',
					description: 'Informacion sobre quienes somos y que hacemos'
				},
				{
					name: 'Estadisticas',
					slug: '/estadisticas',
					description: 'Todas las estadisticas de uso de nuestros servicios'
				},
				{
					name: 'Normativa',
					slug: '/normativa',
					description: 'Informacion sobre las normativas con la que trabajamos'
				},
				{
					name: 'Recursos',
					slug: '/recursos',
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
					slug: '/catalogo/servicios',
					description: 'Mira todos los servicios que ofrecemos!'
				},
				{
					name: 'Novedades',
					slug: '/catalogo/novedades',
					description: 'Enterate de las ultimas novedades'
				}
			]
		},
		{
			name: 'Contacto',
			slug: '/contacto'
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
	<main class="min-h-screen">
		<slot />
	</main>
	<Footer links={linksFooter} />
{/if}
