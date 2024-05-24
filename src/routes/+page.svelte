<script lang="ts">
	import SearchBox from '$lib/components/search/search-box.svelte';
	import Button from '$lib/components/button/button.svelte';
	let value: string = '';
</script>

<div class="flex justify-center w-full px-4 mt-12">
	<SearchBox {value} />
	<Button classStyles="mx-4" disabled={false}>Search</Button>
</div>
