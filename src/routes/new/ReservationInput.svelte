<script lang="ts">
	import type { FormEventHandler, KeyboardEventHandler } from 'svelte/elements';

	export let changeHandler: FormEventHandler<HTMLInputElement>;
	export let escapeHandler: KeyboardEventHandler<HTMLInputElement>;
	export let labelTarget: string;
</script>

<div class="input-wrapper">
	<input
		type="text"
		name="name"
		id={labelTarget}
		required
		on:input={changeHandler}
		on:change={changeHandler}
		on:keydown={escapeHandler}
	/>
	<label for={labelTarget}>
		<div class="placeholder-div">
			<slot />
		</div>
	</label>
</div>

<style>
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
</style>
