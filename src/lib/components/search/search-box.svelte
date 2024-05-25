<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let value: string;

  const dispatch = createEventDispatcher<{
		onResetSearch: void;
	}>();
	let placeholder: string = 'Search Github';

	const reset = () => {
		value = '';
    dispatch('onResetSearch');
	};
</script>

<div
	class=" w-full max-w-[400px] border-[#dddddd] bg-white border h-12 rounded-lg flex my-auto
        hover:border-[#555555] hover:bg-[#00000008] transition ease-in-out focus:outline-none focus:shadow-lg"
>
	<span class="icon-[material-symbols-light--search] w-8 h-8 my-auto ml-3 text-[#dddddd]"></span>
	<input
		{placeholder}
		class=" px-2 text-md border-none rounded-lg w-full bg-transparent outline-none shadow-inherit"
		name="search"
		type="text"
		autocomplete="off"
		bind:value
	/>
	{#if value}
		<button
			on:click={reset}
			class="icon-[lucide--x] w-4 h-4 my-auto mr-3 text-[#bbbbbb]"
			aria-label="Reset"
		></button>
	{/if}
</div>
