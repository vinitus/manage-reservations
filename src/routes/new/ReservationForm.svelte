<script>
	import event_available from '$lib/images/event_available.svg';
	import mathMinus from '$lib/images/math-minus.svg';
	import mathPlus from '$lib/images/math-plus.svg';
</script>

<form action="">
	<div class="row">
		<div class="input-wrapper">
			<input type="text" name="name" id="name" required />
			<label for="name">
				<div class="placeholder-div">
					<p>Name</p>
					<p>*</p>
				</div>
			</label>
		</div>
		<div class="input-wrapper">
			<input type="text" name="phone" id="phone" required />
			<label for="phone">
				<div class="placeholder-div">
					<p>Phone</p>
					<p>*</p>
				</div>
			</label>
		</div>
		<button type="button" class="calendar-open-button">
			<img src={event_available} alt="event_available" />
			<p>Select Date</p>
		</button>
	</div>
	<div class="row">
		<div class="counter-wrapper">
			<p>Guests</p>
			<button type="button">
				<img src={mathMinus} alt="mathMinus" />
			</button>
			<p>1</p>
			<button type="button">
				<img src={mathPlus} alt="mathPlus" />
			</button>
		</div>
	</div>
</form>

<style>
	.counter-wrapper {
		display: flex;
		width: 100%;
	}

	.counter-wrapper * {
		width: min-content;
	}

	.placeholder-div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border: none;
		color: #a8a29e;
		width: calc((100% - 40px) / 3);
		height: 70px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.placeholder-div p:last-child {
		color: #ed602d;
		margin-left: 5px;
	}

	form {
		width: 100%;
		height: 100%;
		margin-top: 110px;
		background-color: #ffffff;
	}

	.input-wrapper {
		position: relative;
		padding: 0px 35px;
		width: calc((100% - 40px) / 3);
		height: 70px;
		border: 1px solid #d6d3d1;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 30px 0px 30px;
	}

	.row button p {
		margin-left: 5px;
	}

	input {
		max-width: -webkit-fill-available;
		height: fit-content;
		border: none;
	}

	input:focus {
		outline: none;
	}

	label {
		transition: all 0.2s ease-in-out;
		position: absolute;
		pointer-events: none;
		top: 0px;
		padding-left: 3px;
	}

	input:valid + label {
		top: -20px;
		font-size: 12px;
	}

	input:focus + label {
		top: -20px;
		font-size: 12px;
	}
</style>