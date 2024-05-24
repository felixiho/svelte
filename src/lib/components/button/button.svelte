<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let classStyles: string = '';
	export let disabled: boolean = false;

	const disabledClass = disabled
		? 'cursor-not-allowed opacity-50 '
		: 'transition-transform hover:translate-x-[-3px] group';
	const styles = `${classStyles} ${disabledClass}   duration-100 text-white h-12 items-center flex bg-black px-10 py-2 my-auto rounded-lg shadow-md`;
</script>

<button class={styles} {type} {disabled}>
	<slot></slot>
	<span
		class="icon-[formkit--arrowright] w-6 h-6 ml-2 my-auto text-[#dddddd] transition-transform duration-300 group-hover:translate-x-2"
	></span>
</button>
