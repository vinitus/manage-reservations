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
			<input type="checkbox" name="1" id="1" value="1" />
			<label for="1">1</label>
		</div>
		<div class="option">
			<input type="checkbox" name="2" id="2" value="2" />
			<label for="2">2</label>
		</div>
		<div class="option">
			<input type="checkbox" name="3" id="3" value="3" />
			<label for="3">3</label>
		</div>
		<div class="option">
			<input type="checkbox" name="5" id="5" value="5" />
			<label for="5">5</label>
		</div>
		<div class="option">
			<input type="checkbox" name="6" id="6" value="6" />
			<label for="6">6</label>
		</div>
		<div class="option">
			<input type="checkbox" name="7" id="7" value="7" />
			<label for="7">7</label>
		</div>
		<div class="option">
			<input type="checkbox" name="8" id="8" value="8" />
			<label for="8">8</label>
		</div>
	</div>
</div>

<style>
	.option {
		display: flex;
	}

	.option:hover {
		background-color: #f6f8f9;
	}

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
		width: 100%;
	}
</style>
