export interface QueryType {
	query: string;
	page: number;
	perPage: number;
}

export interface ResultsType {
	id: number;
	login: string;
	avatar_url: string;
	type: string;
}

export interface SearchResultsType {
	loading: boolean;
	loadingNext: boolean;
	error: string;
	results: ResultsType[];
	totalResults: number;
	currentPage: number;
	initialized: boolean;
	query: string;
	sortOrder: 'ASC' | 'DESC';
}
