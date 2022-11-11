<script lang="ts">
    import { ExclamationCircle,CheckCircle, Icon} from 'svelte-hero-icons';

    export let status: boolean
    export let message: string
    let buttonClass = status ? "text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" : "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2";
</script>

<div id="popup-modal" tabindex="-1" class=" fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full ">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-6 text-center">
                {#if status}
                <Icon 
                    src={CheckCircle} class= "mx-auto w-20 h-20 text-green-500 transition duration-75 dark:text-green-400"> 
                </Icon>
                {:else}
                <Icon
                    src={ExclamationCircle} class= "mx-auto w-20 h-20 text-red-500 transition duration-75 dark:text-red-400"> 
                </Icon>
                {/if}
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>
                <button data-modal-toggle="popup-modal" type="button" class={buttonClass}>
                    OK
                </button>
            </div>
        </div>
    </div>
</div>