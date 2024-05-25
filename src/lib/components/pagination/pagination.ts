import { PAGINATION_LIMIT } from './constants';
import type { PaginateType } from './types';

export const getPages = ({ totalPages, pages, currentPage }: PaginateType) => {
	if (totalPages <= PAGINATION_LIMIT) {
		return pages;
	}
	const midPage =
		currentPage === 1
			? currentPage + 1
			: currentPage === totalPages
				? currentPage - 1
				: currentPage;
	return [1, midPage, totalPages];
};
