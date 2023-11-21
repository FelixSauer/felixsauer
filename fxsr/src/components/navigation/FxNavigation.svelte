<script lang="ts">
	import FxButton from '../button/FxButton.svelte';
	import FxLink from '../link/FxLink.svelte';
	import type { MenuItem } from '../../lib/models/menu';
	export let data: MenuItem[] = [];
	export let mode = '';
</script>

<nav class={mode}>
	{#each data as item}
		{#if mode === 'buttons'}
			<FxButton
				target={item.target}
				label={item.label}
				iconName={item.icon}
				state={item.state}
				internal={item.internal}
			/>
		{/if}

		{#if mode === 'links'}
			<FxLink
				target={item.target}
				label={item.label}
				iconName={item.icon}
				state={item.state}
				internal={item.internal}
			/>
		{/if}
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		&.buttons {
			gap: 0.5rem;
		}

		&.links {
			gap: 1rem;
		}
	}
</style>
