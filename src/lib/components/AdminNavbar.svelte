<script lang="ts">
	import { Server, ChartPie, Document, Newspaper, Photograph } from 'svelte-hero-icons';
	import AdminNavbarLink from './AdminNavbarLink.svelte';
	import SwitchDarkMode from './SwitchDarkMode.svelte';

	const links = [
		{
			href: '/admin/services',
			nombre: 'Servicios',
			icon: Server
		},
		{
			href: '/admin/graphs',
			nombre: 'Graficos',
			icon: ChartPie
		},
		{
			href: '/admin/files',
			nombre: 'Archivos',
			icon: Document
		},
		{
			href: '/admin/noveltys',
			nombre: 'Novedades',
			icon: Newspaper
		},
		{
			href: '/admin/images',
			nombre: 'Imagenes',
			icon: Photograph
		}
	];
</script>

<aside class="h-screen w-56 fixed bg-gray-50 dark:bg-gray-800 shadow-md z-10" aria-label="Sidebar">
	<div class=" overflow-y-auto py-4 px-3 h-full">
		<ul class="space-y-2 h-full">
			{#each links as link}
				<AdminNavbarLink href={link.href} nombre={link.nombre} icon={link.icon} />
			{/each}
		</ul>
	</div>
</aside>
<SwitchDarkMode />
