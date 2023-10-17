<script>
	import arrowDropDown from '$lib/images/arrow_drop_down.svg';
	let dropdownIsOpen = false;
</script>

<div class="select-list">
	<div
		role="button"
		class="title"
		on:click={() => (dropdownIsOpen = !dropdownIsOpen)}
		tabindex={0}
		on:keydown={() => (dropdownIsOpen = !dropdownIsOpen)}
	>
		Select Table
		<img src={arrowDropDown} alt="arrowDropDown" />
	</div>
	<div class="select-options" style={dropdownIsOpen ? 'display: block' : 'none'}>
		<div class="option">
			<input type="checkbox" name="vehicle" id="option1" value="" />
			<label for="option1">Platform</label>
		</div>
		<div class="option">
			<input type="checkbox" name="vehicle" id="option2" />
			<label for="option2">Device ID</label>
		</div>
		<div class="option">
			<input type="checkbox" name="vehicle" id="option3" />
			<label for="option3">Token</label>
		</div>
		<div class="option">
			<input type="checkbox" name="vehicle" id="option4" />
			<label for="option4">Option 1</label>
		</div>
	</div>
</div>

<style>
	.select-list {
		font-family: 'Open Sans', sans-serif;
		color: #555;
		background: #fff;
	}

	.select-list .title {
		display: flex;
		align-items: center;
		cursor: pointer;
		background: #fff;
		border: 1px solid #eaeaec;
		border-radius: 5px;
		padding: 10px 15px 10px 15px;
		height: 70px;
		width: 480px;
	}

	.title img {
		display: inline-block;
		margin-left: auto;
	}

	.select-list .select-options {
		display: none;
		position: absolute;
		z-index: 500;
		border: 1px solid #eaeaec;
		background: #fff;
		width: 480px;
	}

	.select-list .select-options .option input {
		margin: 10px 0 12px 15px;
	}

	input[type='checkbox' i] {
		background-color: initial;
		cursor: default;
		appearance: auto;
		box-sizing: border-box;
		margin: 3px 3px 3px 4px;
		padding: initial;
		border: initial;
	}

	.select-list .select-options .option label {
		display: inline-block;
		padding: 10px 30px 10px 10px;
	}
</style>
