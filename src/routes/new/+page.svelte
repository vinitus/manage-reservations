<script>
	import Header from '../Header.svelte';
	import event_available from '$lib/images/event_available.svg';
</script>

<svelte:head>
	<title>New Reservation</title>
</svelte:head>

<section>
	<Header isNew={true} />
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
			<button type="button">
				<img src={event_available} alt="event_available" />
				<p>Select Date</p>
			</button>
		</div>
	</form>
</section>

<style>
	section {
		width: 977px;
		height: 793px;
		background-color: #f5f5f4;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: fixed;
	}

	.placeholder-div {
		display: flex !important;
		align-items: center !important;
		border: none !important;
		color: #a8a29e;
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
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 30px 0px 30px;
	}

	.row div {
		border: 1px solid #d6d3d1;
		border-radius: 10px;
		width: calc((100% - 40px) / 3);
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.row button {
		width: calc((100% - 40px) / 3);
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 10px;
		background: linear-gradient(to right bottom, #ffffff, #f1f1f1);
		box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
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
