import axios from 'axios';
import type { QueryType } from './types';

export const searchUser = async ({ query, page, perPage }: QueryType) => {
	const response =  await axios.get(
		`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`
	);
  return response.data
};
