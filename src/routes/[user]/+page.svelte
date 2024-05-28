<script lang="ts">
	import { page } from '$app/stores';
	import User from '$lib/modules/user/user.svelte';
</script>

<svelte:head>
	<title>{$page.params.user + '- details'}</title> 
</svelte:head>


<section>
	<User />
</section>
