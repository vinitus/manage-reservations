<script>
	/**
	 * @type {string}
	 */
	export let imgSrc;
</script>

<button type="button" class="calendar-open-button">
	<img src={imgSrc} alt="event_available" />
	<p>Select Date</p>
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
