<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import FxSection from '../components/section/FxSection.svelte';
	import type { Page } from '$lib/models/pages';
	import { currentNavigationState } from '$lib/store';

	export let pages: Page[] = [];
	let isCurrentNavigationState: boolean = false;
	let currentPage = 1;

	async function fetchPages() {
		const response = await fetch(`/api/pages`);
		const fetchedPages = await response.json();
		pages = [...pages, ...fetchedPages];
		currentPage++;
	}

	currentNavigationState.subscribe((value) => {
		isCurrentNavigationState = value;
		console.log('isCurrentNavigationState', isCurrentNavigationState);
	});

	function handleScroll() {
		if (window.innerHeight + window.scrollX >= document.body.offsetHeight) {
			fetchPages();
		}
	}

	onMount(() => {
		fetchPages();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	afterUpdate(() => {
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#each pages as page}
	<FxSection {page} />
{/each}
