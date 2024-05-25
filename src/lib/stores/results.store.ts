import type { SearchResultsType } from '$lib/modules/search/types';
import { derived, writable } from 'svelte/store';

export const defaultSearchState: SearchResultsType = {
	loading: false,
	loadingNext: false,
	initialized: false,
	error: '',
	query: '',
	results: [],
	totalResults: 0,
	currentPage: 1,
	sortOrder: 'ASC'
};

export const searchStore = writable<SearchResultsType>(defaultSearchState);

export const searchResult = derived(searchStore, ($searchStore) => {
	const result = $searchStore.results.map((result) => [
		result.avatar_url,
		result.login,
		result.type
	]);
	result.sort((a, b) =>
		$searchStore.sortOrder === 'ASC' ? a[1].localeCompare(b[1]) : b[1].localeCompare(a[1])
	);
	return result;
});
