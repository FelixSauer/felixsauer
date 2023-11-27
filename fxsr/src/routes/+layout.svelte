<script lang="ts">
	import { currentNavigationState } from '$lib/store';
	import '../app.scss';
	import FxFooter from '../components/footer/FxFooter.svelte';
	import FxNavigation from '../components/navigation/FxNavigation.svelte';

	let navActive: boolean = false;

	currentNavigationState.subscribe((value) => {
		navActive = value;
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
		integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<title>fxsr / Felix Sauer / consulting and development</title>
</svelte:head>

<FxNavigation />
<main class:nav-active={navActive}>
	<slot />
</main>
<FxFooter />

<style lang="scss">
	main {
		width: 100vw;
		height: 100vh;
		overflow-y: scroll;
	}

	.nav-active {
		animation: fadeBackground 2s;
		filter: blur(5px);

		@keyframes fadeBackground {
			from {
				filter: blur(0);
			}
			to {
				filter: blur(5px);
			}
		}
	}
</style>
