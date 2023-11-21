<script lang="ts">
	import FxInfiniteScroll from '../components/infinitescroll/FxInfiniteScroll.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import type { Page } from '../lib/models/pages';
	import type { pages } from './$types';

	export let pages: Page[] = [];

	let currentPage = 1;

	async function fetchPages() {
		const response = await fetch(`/api/pages`);

		console.log(response);

		const fetchedPages = await response.json();
		pages = [...pages, ...fetchedPages];
		currentPage++;
	}

	function handleScroll() {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			fetchPages();
		}
	}

	onMount(() => {
		fetchPages();
		window.addEventListener('scroll', handleScroll);
	});

	afterUpdate(() => {
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#each pages as page}
	<FxInfiniteScroll {page} />
{/each}
