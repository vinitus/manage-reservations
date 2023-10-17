<script>
	import GradationButton from './GradationButton.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import event_available from '$lib/images/event_available.svg';
	import mathMinus from '$lib/images/math-minus.svg';
	import mathPlus from '$lib/images/math-plus.svg';
	import edit from '$lib/images/edit.svg';

	let isInputStarted = false;
	let note = '';
	let textareaValue = '';
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
		<GradationButton imgSrc={event_available} alt="event_available">Select Date</GradationButton>
	</div>
	<div class="row">
		<div class="counter-wrapper">
			<p>Guests</p>
			<GradationButton imgSrc={mathMinus} alt="mathMinus" style="width:70px; height:70px;" />
			<p class="count-num">1</p>
			<GradationButton imgSrc={mathPlus} alt="mathPlus" style="width:70px; height:70px;" />
		</div>
		<MultiSelect />
	</div>
	<div class="row">
		{#if isInputStarted}
			<textarea
				autofocus
				bind:value={textareaValue}
				name=""
				id=""
				class="add-note"
				on:input={(e) => (textareaValue = e.currentTarget.value)}
				on:blur={() => {
					if (textareaValue.length === 0) isInputStarted = false;
				}}
			/>
		{:else}
			<div
				class="add-note"
				role="button"
				tabindex="0"
				on:click={() => {
					isInputStarted = true;
				}}
				on:keydown={() => {
					isInputStarted = true;
				}}
			>
				<div class="add-note-img-wrapper">
					Add Note... <img src={edit} alt="edit" />
				</div>
			</div>
		{/if}
	</div>
</form>

<style>
	.add-note {
		width: 100%;
		height: 205px;
		border: 1px solid #d6d3d1;
		border-radius: 10px;
		padding: 20px;
		resize: none;
		box-shadow: 0px 1px 1px 1px rgba(214, 211, 209, 0.1);
	}

	.add-note-img-wrapper {
		display: flex;
		align-items: center;
		color: #a8a29e;
	}

	.count-num {
		font-size: 24px;
		font-weight: 600;
	}

	.counter-wrapper {
		width: 310px;
		display: flex;
		justify-content: space-around;
		align-items: center;
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
		width: 100%;
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
