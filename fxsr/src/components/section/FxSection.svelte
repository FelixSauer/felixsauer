<script lang="ts">
	import viewport from '$lib/actions/userViewportAction';
	import type { Page, Section } from '$lib/models/pages';
	import { currentSectionState } from '$lib/store';
	import FxArticle from '../article/FXArticle.svelte';

	export let page: Page;
	let isCurrentSectionState: boolean = false;

	const setCurrentSectionState = (value: Section['isVisible']) => {
		currentSectionState.set({ id: page.id, name: page.name, isVisible: value });
		isCurrentSectionState = value;
	};
</script>

<section
	id={page.htmlTarget}
	use:viewport
	on:enterViewport={() => {
		setCurrentSectionState(true);
	}}
	on:exitViewport={() => {
		setCurrentSectionState(false);
	}}
>
	{#if isCurrentSectionState}
		<FxArticle {page} />
	{/if}
</section>

<style lang="scss">
	section {
		margin-bottom: 5rem;
		height: 100%;
		width: 100%;
	}
</style>
