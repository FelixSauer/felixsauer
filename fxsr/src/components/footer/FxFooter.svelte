<script lang="ts">
	import Navigation from '../navigation/FxNavigation.svelte';
	import { menu } from '../../lib/models/menu';
</script>

<footer>
	<Navigation data={menu.footerMenu} mode={'links'} />
</footer>

<style lang="scss">
</style>
