<script lang="ts">
	import FxNavigation from '../navigation/FxNavigation.svelte';
	import { menu } from '../../lib/models/menu';
</script>

<header>
	<span> logo </span>
	<FxNavigation data={menu.mainMenu} mode={'buttons'} />
</header>
