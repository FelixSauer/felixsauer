<script lang="ts">
	import clip from '$lib/assets/mixkit-traffic.mp4';
</script>

<video autoplay muted src={clip} loop />

<style lang="scss">
	video {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
		z-index: -1;
	}
</style>
