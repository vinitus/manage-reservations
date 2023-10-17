<script lang="ts">
	import arrowDropDown from '$lib/images/arrow_drop_down.svg';
	import { newReservation } from '$store';

	export let selectTableSet: Set<number>;
	export let dropdownIsOpen: boolean;

	let tableNums = [1, 2, 3, 4, 5, 6, 7, 8];
	function makeTimeout() {
		let timeout: number | null = null;
		return {
			make: () => {
				timeout = setTimeout(() => {
					dropdownIsOpen = false;
				}, 0);
			},
			reset: () => {
				timeout && clearTimeout(timeout);
			}
		};
	}

	const dropdownController = makeTimeout();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:focusin={(e) => {
		dropdownController.reset();
	}}
	on:focusout={(e) => {
		dropdownController.make();
	}}
>
	<div class="select-list" role="button" tabindex={0}>
		<div
			role="button"
			class="title"
			tabindex={0}
			on:click={(e) => {
				dropdownIsOpen = !dropdownIsOpen;
			}}
			on:keydown={() => (dropdownIsOpen = !dropdownIsOpen)}
		>
			Select Table
			<img src={arrowDropDown} alt="arrowDropDown" />
		</div>
		<div class="select-options" style={dropdownIsOpen ? 'display: block' : 'none'}>
			{#each tableNums as tableNum}
				<div class="option">
					<input
						type="checkbox"
						name={`${tableNum}`}
						id={`${tableNum}`}
						value={tableNum}
						data-table-num={tableNum}
						on:change={(e) => {
							const { checked } = e.currentTarget;
							const { tableNum } = e.currentTarget.dataset;
							if (checked) selectTableSet.add(Number(tableNum));
							else selectTableSet.delete(Number(tableNum));

							newReservation.update((item) => {
								item.table = Array.from(selectTableSet).sort();
								return item;
							});
						}}
					/>
					<label for={`${tableNum}`}>{tableNum}</label>
				</div>
			{/each}
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
