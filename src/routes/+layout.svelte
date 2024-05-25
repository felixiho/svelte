<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/modules/layout/header.svelte';
</script>

<svelte:head>
	<title>{$page.data.meta?.title || 'Savannah test'}</title>
	{#if $page.data.meta}
		<meta name="description" content={$page.data.meta.description} />
	{/if}
</svelte:head>

<Header />
<section class="font-body mb-6">
	<slot />
</section>

 
