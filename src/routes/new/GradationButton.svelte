<script lang="ts">
	export let imgSrc: string | undefined = undefined;
	export let alt: string | undefined = undefined;
	export let style: string | undefined = undefined;
</script>

<button type="button" class="calendar-open-button" {style}>
	<img src={imgSrc} {alt} />
	<slot />
</button>

<style>
	.calendar-open-button {
		width: calc((100% - 40px) / 3);
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 10px;
		background: linear-gradient(to right bottom, #ffffff, #f9f9f8);
		box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
	}
</style>
