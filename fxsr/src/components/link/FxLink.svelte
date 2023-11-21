<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import type { MenuItem } from '../../lib/models/menu';

	export let target: string = '';
	export let label: string = '';
	export let iconName: string = '';
	export let state: string = '';
	export let internal: boolean = false;

	function handleClick(): string {
		if (internal) {
			return '#' + target;
		} else {
			return target;
		}
	}

	function isDisabled(state: string) {
		return state === 'disabled' ? 'disabled' : null;
	}
</script>

<a href={handleClick()} class={isDisabled(state)}>
	{#if iconName}
		<Icon icon={iconName} />
	{/if}
	<span>{label}</span>
</a>
