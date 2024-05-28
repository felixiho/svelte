import axios from 'axios';
import type { QueryType } from './types';

export const searchUser = async ({ query, page, perPage }: QueryType) => {
	const response = await axios.get(
		`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`
	);
	return response.data;
};
