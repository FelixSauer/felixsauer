<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	export let target: string = '';
	export let label: string = '';
	export let iconName: string = '';
	export let state: string = '';
	export let internal: boolean = false;

	//let isFocused: boolean = false;

	function handleClick() {
		if (internal) {
			const element = document.getElementById('#' + target);
			element?.scrollIntoView({ behavior: 'smooth' });
		} else {
			goto(target);
		}
	}

	function isDisabled(state: string) {
		return state === 'disabled' ? true : null;
	}
</script>

<button title={label} on:click={handleClick} disabled={isDisabled(state)}>
	{#if iconName}
		<Icon icon={iconName} />
	{/if}
	{#if label}
		<span>{label}</span>
	{/if}
</button>
