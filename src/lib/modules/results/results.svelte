<script lang="ts">
	import { Moon } from 'svelte-loading-spinners';

	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Table from '$lib/components/table/table.svelte';
	import { searchResult, searchStore } from '$lib/stores/results.store';
	import Loader from '$lib/components/loader/loader.svelte';
	import { searchUser } from '../search/search';
	import { PAGE_SIZE } from '$lib/components/pagination/constants';
	import type { AxiosError } from 'axios';

	const columns = ['Avatar', 'Username', 'Type'];

	const handlechange = async (page: number) => {
		// If the page is the same as the current page or the next page is loading, return
		if (page === $searchStore.currentPage || $searchStore.loadingNext) return;
		searchStore.update((value) => ({ ...value, currentPage: page, error: '', loadingNext: true }));
		try {
			const results = await searchUser({ query: $searchStore.query, page, perPage: PAGE_SIZE });
			const { items } = results;
			searchStore.update((value) => ({
				...value,
				results: items,
				loadingNext: false
			}));
		} catch (error: any) {
			const message =
				error.response?.data?.message || 'An error occurred getting results. Please try again.';

			console.log(message);
			searchStore.update((value) => ({ ...value, error: message, loadingNext: false }));
		}
	};
</script>

<section class="px-4 mt-2 flex w-full justify-center items-center">
	{#if $searchStore.loading}
		<div class="text-center mt-16"><Moon size="70" color="#000000" unit="px" duration="1s" /></div>
	{:else if $searchStore.error}
		<div class="text-center max-w-xl text-red-500 mt-16">{$searchStore.error}</div>
	{:else if $searchResult.length}
		<div class="mt-8 flex flex-col flex-wrap items-center w-full px-4 relative">
			{#if $searchStore.loadingNext}
				<Loader />
			{/if}
			<Table loadingNext={$searchStore.loadingNext} {columns} data={$searchResult} />
			<Pagination
				currentPage={$searchStore.currentPage}
				totalPages={$searchStore.totalResults}
				on:onPageChange={({ detail }) => handlechange(detail.page)}
			/>
		</div>{:else if $searchStore.initialized}
		<div class="text-center mt-16 max-w-xl p-2 rounded-md bg-red-100 w-full text-red-500">
			No results found
		</div>
	{:else}
		<div class="text-center mt-16">Search above to see results.</div>
	{/if}
</section>
