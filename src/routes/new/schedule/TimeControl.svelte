<script>
	import upImg from '$lib/images/chevron-up.svg';
	import downImg from '$lib/images/chevron-down.svg';
</script>

<div class="row">
	<div class="col">
		<img src={upImg} alt="upImg" />
		<p>02</p>
		<img src={downImg} alt="downImg" />
	</div>
	<p>:</p>
	<div class="col">
		<img src={upImg} alt="upImg" />
		<p>00</p>
		<img src={downImg} alt="downImg" />
	</div>
	<p />
	<div class="col">
		<img src={upImg} alt="upImg" />
		<p style="font-size: 28px; margin: 23px 0px 20px 0;">PM</p>
		<img src={downImg} alt="downImg" />
	</div>
</div>

<style>
	.row p {
		font-size: 30px;
		margin: 20px 0px;
	}

	.col {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 0px 60px;
		width: 100%;
		margin-bottom: 20px;
	}
</style>
