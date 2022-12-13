<script>
	export let links;
</script>

<footer class="p-4 relative bg-slate-200">
	<!-- <img src="/img/textura_footer.png" alt="textura del footer" class="w-full h-50" /> -->
	<div class="w-full h-56 absolute bottom-[100%] left-0 z-0 bg-footer bg-[length:800px]" />
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="/home" class="flex items-center justify-center">
				<img src="/img/PBA_footer.png" class="mr-3 h-44" alt="FlowBite Logo" />
			</a>
		</div>
		<div class={`grid grid-cols-1 text-center gap-8 sm:text-left sm:gap-6 sm:grid-cols-3`}>
			{#each links as linkList}
				<div class="">
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						{linkList.title}
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						{#each linkList.links as link}
							<li class="mb-4">
								<a href={link.href} class="hover:underline">{link.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<!-- <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" /> -->
</footer>
