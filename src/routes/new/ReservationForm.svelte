<script lang="ts">
	import { newReservation, dateTimeIsValid, reservationList, type ReservationInfo } from '$store';
	import GradationButton from './GradationButton.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import event_available from '$lib/images/event_available.svg';
	import ReservationInput from './ReservationInput.svelte';
	import ReservationGuestsCounter from './ReservationGuestsCounter.svelte';
	import ReservationAddNote from './ReservationAddNote.svelte';
	import { afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';

	let isInputStarted = false;
	let reservationInfo: ReservationInfo;
	let selectTableSet = new Set<number>();
	let dropdownIsOpen = false;
	let dateTimeDone: boolean;
	let isValid: boolean;

	newReservation.subscribe((item) => {
		reservationInfo = item;
	});

	dateTimeIsValid.subscribe((item) => {
		dateTimeDone = item;
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

	function finalCheckFn() {
		let flag = true;
		if (!reservationInfo.name || !reservationInfo.phone || !dateTimeDone) flag = false;

		isValid = flag;
	}

	afterUpdate(() => {
		finalCheckFn();
	});
</script>

<form action="">
	<div class="row">
		<ReservationInput
			value={reservationInfo.name}
			labelTarget="name"
			changeHandler={nameUpdateFn}
			escapeHandler={escapeFn}
			><p>Name</p>
			<p class="star-p">*</p>
		</ReservationInput>
		<ReservationInput
			value={reservationInfo.phone}
			labelTarget="phone"
			changeHandler={phoneUpdateFn}
			escapeHandler={escapeFn}
		>
			<p>Phone</p>
			<p class="star-p">*</p>
		</ReservationInput>
		<GradationButton imgSrc={event_available} alt="event_available"
			><a href="/new/schedule">Select Date</a></GradationButton
		>
	</div>
	<div class="row">
		<ReservationGuestsCounter {reservationInfo} />
		<MultiSelect {dropdownIsOpen} {selectTableSet} />
	</div>
	<div class="row">
		<ReservationAddNote {isInputStarted} {reservationInfo} />
	</div>
	<div class="row last">
		<button
			type="button"
			class="save-button"
			style={isValid ? 'opacity: 1' : ''}
			disabled={!isValid}
			on:click={() => {
				reservationList.update((item) => {
					const jsonStr = JSON.stringify(reservationInfo);
					const originData = JSON.parse(jsonStr);
					newReservation.update(() => {
						return {
							name: '',
							phone: '',
							date: {
								month: 'May',
								day: 10
							},
							time: {
								hour: 14,
								minute: 0
							},
							guests: 1,
							table: [],
							note: '',
							isSeated: false
						};
					});
					item.push(originData);
					return item;
				});

				goto('/');
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
