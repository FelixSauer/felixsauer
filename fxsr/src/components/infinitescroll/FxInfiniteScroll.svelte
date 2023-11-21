<script lang="ts">
	import type { Page } from '$lib/models/pages';

	export let page: Page;
</script>

<section id={page.htmlTarget}>
	<article>
		<h2>{page.title}</h2>
		<p>{page.content}</p>
	</article>
</section>
