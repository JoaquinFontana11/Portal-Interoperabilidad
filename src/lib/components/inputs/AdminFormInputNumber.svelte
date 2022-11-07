<script lang="ts">
	export let value: number;
	export let label: string;
	export let required = false;

	const inputStyleSucces = "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
	const inputStyleError = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"

	const messageStyleSucces = "block text-green-600 dark:text-green-500 mb-2 text-sm font-medium"
	const messageStyleError = "block text-red-600 dark:text-red-500 mb-2 text-sm font-medium"

	let styleInput = "focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	let styleMessage = "hidden"
	let errorMsg = ""

	const validateInput  = (e: Event) => {

		if(!value) {
			styleInput = inputStyleError;
			styleMessage = messageStyleError
			errorMsg = "Debe completar este campo"
		}else {
			styleInput = inputStyleSucces;
			styleMessage = messageStyleSucces
			errorMsg = "Correcto!"
		};

	}

</script>

<div>
	<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for={label}
		>{label}</label
	>
	<input
		id={label}
		type="number"
		class={styleInput}
		{required}
		bind:value
		on:blur|preventDefault={validateInput}
	/>
	<label class={styleMessage} for={label}
	>{errorMsg}</label
>
</div>
