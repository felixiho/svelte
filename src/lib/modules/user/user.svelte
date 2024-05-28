<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Moon } from 'svelte-loading-spinners';

	import { getUserByUsername } from './user';
	import { userStore } from '$lib/stores/user.store';
	import UserCard from './user-card.svelte';

	let userName = $page.params.user;

	onMount(async () => {
		userStore.update((val) => ({ ...val, loading: true }));
		try {
			const userInfo = await getUserByUsername(userName);
			userStore.update((val) => ({ ...val, loading: false, user: userInfo }));
		} catch (error: any) {
			const message =
				error.response?.data?.message || 'An error occurred getting results. Please try again.';
			userStore.set({ error: message, loading: false, user: null });
		}
	});
</script>

<div class="flex sm:flex-row flex-wrap justify-center w-full px-4 mt-2">
	{#if $userStore.loading}
		<div class="text-center mt-16"><Moon size="70" color="#000000" unit="px" duration="1s" /></div>
	{:else if $userStore.user}
		<UserCard user={$userStore.user} />
	{:else}
		<div class="text-center max-w-xl text-red-500 mt-6">{$userStore.error}</div>
	{/if}
</div>
