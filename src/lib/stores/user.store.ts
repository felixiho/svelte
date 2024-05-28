import type { UserType } from '$lib/modules/user/types';
import { writable } from 'svelte/store';

export const defaultUserState: UserType = {
	loading: false,
	error: '',
	user: null
};

export const userStore = writable<UserType>(defaultUserState);