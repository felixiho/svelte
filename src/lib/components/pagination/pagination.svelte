<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getPages } from './pagination';

	export let currentPage: number = 1;
	export let totalPages: number = 1;
	const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
	$: pages = getPages({ currentPage, totalPages, pages: pagesArray });

	const changePage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		dispatch('onPageChange', { page });
	};

	const dispatch = createEventDispatcher<{
		onPageChange: { page: number };
	}>();
</script>

<div class="flex justify-center items-center space-x-2 my-6">
	<button
		class=" flex justify-center items-center rounded-md  "
		on:click={() => changePage(currentPage - 1)}
		disabled={currentPage === 1}
	>
		<span class="icon-[ooui--previous-ltr]"></span>
	</button>
	{#each pages as page}
		<button
			class=" {currentPage === page ? "underline" :""}   flex justify-center items-center rounded-md "
			on:click={() => changePage(page)}
			disabled={currentPage === page}
		>
			{page}
		</button>
	{/each}
	<button
		class="  flex justify-center items-center rounded-md "
		on:click={() => changePage(currentPage + 1)}
		disabled={currentPage === totalPages}
	>
		<span class="icon-[ooui--previous-rtl]"></span>
	</button>
</div>
