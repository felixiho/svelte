<script lang="ts">
	import Button from '$lib/components/button/button.svelte';
	import { PAGE_SIZE } from '$lib/components/pagination/constants';
	import SearchBox from '$lib/components/search/search-box.svelte';
	import { defaultSearchState, searchStore } from '$lib/stores/results.store';
	import { searchUser } from './search';

	let query = '';

	const onSearch = async () => {
		if (query.length < 1) return;
		searchStore.update((value) => ({ ...value, error: '', loading: true }));
		try {
			const results = await searchUser({ query, page: 1, perPage: PAGE_SIZE });
			const { items, total_count } = results;
			searchStore.update((value) => ({
				...value,
				query,
				results: items,
				currentPage: 1,
				totalResults: Math.floor(total_count / PAGE_SIZE),
				loading: false,
				initialized: true
			}));
		} catch (error: any) {
			const message =
				error.response?.data?.message || 'An error occurred getting results. Please try again.';
			searchStore.update((value) => ({
				...value,
				results: [],
				totalResults: 0,
				error: message,
				loading: false
			}));
		}
	};

	const onReset = async () => {
		searchStore.set(defaultSearchState);
	};
</script>

<section>
	<div class="flex sm:flex-row flex-wrap justify-center w-full px-4 mt-2">
		<SearchBox bind:value={query} on:onResetSearch={onReset} />
		<Button on:click={onSearch} classStyles="sm:mx-4 sm:w-auto w-full sm:mt-0 mt-4" disabled={false}
			>Search</Button
		>
	</div>
</section>
