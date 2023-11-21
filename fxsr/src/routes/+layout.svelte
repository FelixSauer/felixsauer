<script>
	import '../app.scss';
	import Header from '../components/header/FxHeader.svelte';
	import Footer from '../components/footer/FxFooter.svelte';
	import FxVideo from '../components/video/FxVideo.svelte';
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

<FxVideo />

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
