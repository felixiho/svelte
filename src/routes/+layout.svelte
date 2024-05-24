<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.meta?.title || 'Savannah test'}</title>
	{#if $page.data.meta}
		<meta name="description" content={$page.data.meta.description} />
	{/if}
</svelte:head>

<section class="font-body">
	<slot />
</section>
