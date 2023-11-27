<script lang="ts">
	import type { Page } from '$lib/models/pages';
	import { currentNavigationState } from '$lib/store';
	import { blur, fly } from 'svelte/transition';

	export let page: Page;

	let isCurrentNavigationState: boolean = false;

	currentNavigationState.subscribe((value) => {
		isCurrentNavigationState = value;
	});
</script>

<article>
	<h1 in:fly={{ x: -1000, duration: 750 }}>{page.content.title}</h1>
	<!-- <h2 in:fly={{ x: 1000, duration: 750 }}>{page.content.firstSubtitle}</h2> -->
	<span>
		<h3 in:fly={{ x: -1000, duration: 750 }}>{page.content.firstSubtitle}</h3>
		<p in:fly={{ x: 1000, duration: 750 }}>{page.content.firstText}</p>
	</span>
	<span>
		<h3 in:fly={{ x: -1000, duration: 750 }}>{page.content.secondSubtitle}</h3>
		<p in:fly={{ x: 1000, duration: 750 }}>{page.content.secondText}</p>
	</span>
</article>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(12, 1fr);
		gap: 0.75rem;
		height: 100%;
		width: 100%;
		grid-column: 2 / 16;
		grid-row: 2 / 12;
		overflow: visible;

		span {
			grid-row: 3 / 8;
			grid-column: 2 / 6;

			&:last-child {
				grid-row: 3 / 8;
				grid-column: 7 / 12;
			}
		}

		h1 {
			grid-row: 2 / 2;
			grid-column: 2 / 11;
			font-size: 6em;
			margin: 0;
		}

		h2 {
			font-size: 2em;
			margin: 0;
		}

		h3 {
			font-size: 3em;
			margin: 0;
		}

		p {
			font-size: 1.25em;
		}
	}
</style>
