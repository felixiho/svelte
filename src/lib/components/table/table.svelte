<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let columns: string[];
	export let data: string[][];
	export let loadingNext: boolean = false;

	const dispatch = createEventDispatcher<{
		changeSortOrder: void;
	}>();
</script>

<table class="{loadingNext ? ' opacity-15' : ''} break-words table-fixed w-full max-w-xl">
	<thead class="bg-black rounded-md">
		<tr class="mb-8">
			{#each columns as column}
				<th class="mb-8 py-4 text-white text-center">
					{#if column === 'Username'}
						<button
							on:click={() => dispatch('changeSortOrder')}
							class="icon-[bx--sort] my-auto cursor-pointer"
						></button>
					{/if}
					{column}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr class="border-b-[1px] hover:bg-[#00000008] transition ease-in duration-300">
				{#each row as row_data, i}
					{#if i === 0}
						<td class=" flex justify-center py-2 mt-1"
							><img src={row_data} alt="avatar" class="w-10 h-10" /></td
						>
					{:else}
						<td class="text-center py-2">{row_data}</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table th:first-child {
		border-radius: 10px 0 0 10px;
	}

	table th:last-child {
		border-radius: 0 10px 10px 0;
	}
</style>
