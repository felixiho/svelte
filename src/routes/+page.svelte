<script lang="ts">
	import SearchBox from '$lib/components/search/search-box.svelte';
	import Button from '$lib/components/button/button.svelte';
  import Table from '$lib/components/table/table.svelte';
	let value: string = '';

  const data = [
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
    ['https://avatars.githubusercontent.com/u/4426?v=4', 'felixiho', 'User'],
  ]

  const columns = ['Avatar', 'Username', 'Type']
</script>

<div class="flex  justify-center w-full px-4 mt-12">
	<SearchBox {value} />
	<Button classStyles="mx-4" disabled={false}>Search</Button>
</div>
  <div class="mt-20 flex  justify-center w-full px-4">
    <Table {columns} {data} />
  </div>

