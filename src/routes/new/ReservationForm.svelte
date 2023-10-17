<script lang="ts">
	import { newReservation, type ReservationInfo } from '$store';
	import GradationButton from './GradationButton.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import event_available from '$lib/images/event_available.svg';
	import edit from '$lib/images/edit.svg';
	import ReservationInput from './ReservationInput.svelte';
	import ReservationGuestsCounter from './ReservationGuestsCounter.svelte';

	let isInputStarted = false;
	let textareaValue = '';

	let reservationInfo: ReservationInfo;

	newReservation.subscribe((item) => {
		reservationInfo = item;
	});

	type ComposedEvent<T, U> = U & {
		currentTarget: EventTarget & T;
	};

	type InputComposedEvent = ComposedEvent<HTMLInputElement, Event>;
	type InputComposedKeyboradEvent = ComposedEvent<HTMLInputElement, KeyboardEvent>;

	function nameUpdateFn(e: InputComposedEvent) {
		const value = e.currentTarget.value;
		newReservation.update((item) => {
			item.name = value;
			return item;
		});
	}
	function phoneUpdateFn(e: InputComposedEvent) {
		const value = e.currentTarget.value;
		newReservation.update((item) => {
			item.phone = value;
			return item;
		});
	}

	function escapeFn(e: InputComposedKeyboradEvent) {
		e.key === 'Escape' && e.currentTarget.blur();
	}
</script>

<form action="">
	<div class="row">
		<ReservationInput labelTarget="name" changeHandler={nameUpdateFn} escapeHandler={escapeFn}
			><p>Name</p>
			<p class="star-p">*</p>
		</ReservationInput>
		<ReservationInput labelTarget="phone" changeHandler={phoneUpdateFn} escapeHandler={escapeFn}>
			<p>Phone</p>
			<p class="star-p">*</p>
		</ReservationInput>
		<GradationButton imgSrc={event_available} alt="event_available"
			><a href="/new/schedule">Select Date</a></GradationButton
		>
	</div>
	<div class="row">
		<ReservationGuestsCounter {reservationInfo} />
		<MultiSelect />
	</div>
	<div class="row">
		{#if isInputStarted}
			<!-- textarea가 조건부로 렌더링되기 때문에 autofocus를 사용해도 괜찮을 것이라고 판단 -->
			<!-- svelte-ignore a11y-autofocus -->
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
	<div class="row last">
		<button
			type="button"
			class="save-button"
			on:click={() => {
				console.log(reservationInfo);
			}}>Save</button
		>
	</div>
</form>

<style>
	.last {
		bottom: 0px;
		position: absolute;
	}

	.save-button {
		width: 100%;
		height: 90px;
		border: none;
		border-radius: 10px;
		color: #ffffff;
		font-size: 20px;
		background-color: #e55222;
		opacity: 0.5;
		margin-top: auto;
		margin-bottom: 30px;
	}

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

	.star-p {
		color: #ed602d;
		margin-left: 5px;
	}

	form {
		width: 100%;
		height: 100%;
		margin-top: 110px;
		background-color: #ffffff;
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
</style>
