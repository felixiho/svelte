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
	currentPage: 1
};

export const searchStore = writable<SearchResultsType>(defaultSearchState);

export const searchResult = derived(searchStore, ($searchStore) => {
	return $searchStore.results.map((result) => [result.avatar_url, result.login, result.type]);
});
