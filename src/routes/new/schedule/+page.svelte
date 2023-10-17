<script lang="ts">
	import { newReservation, type MyDate, type Time } from '$store';
	import GradationButton from '../GradationButton.svelte';
	import TimeControl from './TimeControl.svelte';
	import alarmOn from '$lib/images/alarm_on.svg';
	import today from '$lib/images/today.svg';
	import trash from '$lib/images/trash.svg';

	let time: Time;
	let date: MyDate;
	let monthIdx: number;
	const months: MyDate['month'][] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const daysInMonth = [
		31,
		new Date().getUTCFullYear() % 4 === 0 ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];

	newReservation.subscribe((item) => {
		({ time, date } = item);
		monthIdx = months.indexOf(date.month);
	});

	function reset() {
		newReservation.update((item) => {
			item.date = {
				month: 'May',
				day: 10
			};
			item.time = {
				hour: 14,
				minute: 0
			};
			return item;
		});
	}

	function dateControlReducer() {
		return (type: 'month' | 'day') => {
			return {
				increase: () => {
					newReservation.update((item) => {
						if (type === 'day') {
							if (item.date[type] >= daysInMonth[monthIdx]) item.date[type] = 1;
							else item.date[type] += 1;
							return item;
						} else {
							if (monthIdx >= 11) monthIdx = 0;
							else monthIdx += 1;
							item.date[type] = months[monthIdx];
							return item;
						}
					});
				},
				decrease: () => {
					newReservation.update((item) => {
						if (type === 'day') {
							if (item.date[type] <= 1) item.date[type] = daysInMonth[monthIdx];
							else item.date[type] -= 1;
							return item;
						} else {
							if (monthIdx <= 0) monthIdx = 11;
							else monthIdx -= 1;
							item.date[type] = months[monthIdx];
							return item;
						}
					});
				}
			};
		};
	}

	const reducer = dateControlReducer();
</script>

<section>
	<div class="schedule-select-form">
		<div class="row">
			<img src={alarmOn} alt="alarmOn" />
			<div class="input-wrapper">
				<input
					class="time-input"
					type="number"
					value={`${time.hour - 12 <= 0 ? time.hour : time.hour - 12}`}
				/>
				<p>:</p>
				<input
					class="time-input"
					type="number"
					value={`${
						time.minute.toString().length === 1
							? '0' + time.minute.toString()
							: time.minute.toString()
					}`}
				/>
				<input
					type="text"
					class="time-input"
					style="width: 30px;"
					value={`${Number(time.hour) - 12 < 0 ? 'AM' : 'PM'}`}
				/>
			</div>
		</div>
		<div class="row">
			<img src={today} alt="today" />
			<div class="input-wrapper">
				<input
					type="text"
					class="month-input"
					value={months[monthIdx]}
					on:wheel={(e) => {
						if (e.deltaY < 0) reducer('month').increase();
						else reducer('month').decrease();
					}}
				/>
				<input
					type="number"
					class="day-input"
					value={date.day}
					on:wheel={(e) => {
						if (e.deltaY < 0) reducer('day').increase();
						else reducer('day').decrease();
					}}
				/>
			</div>
		</div>
		<TimeControl />
		<div class="row">
			<GradationButton style="width: 68px; height: 52px;" onClick={reset}
				><a href="/new" style=""> <img src={trash} alt="trash" /></a></GradationButton
			>
			<GradationButton
				style="margin-left:35px; width: 100%; height: 52px; background: none; background-color: #E5501B;"
				><a href="/new" class="save">Save</a></GradationButton
			>
		</div>
	</div>
</section>

<style>
	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save {
		color: white;
		font-size: 18px;
	}

	a img {
		width: 28px;
	}

	.row {
		display: flex;
		align-items: center;
		width: 100%;
		margin-bottom: 20px;
	}

	section {
		width: 977px;
		height: 793px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: fixed;
	}

	.schedule-select-form {
		padding: 20px 25px;
		position: absolute;
		width: 400px;
		height: 420px;
		background-color: #ffffff;
		border: none;
		border-radius: 10px;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		margin-left: 15px;
		height: 70px;
		width: 100%;
		padding: 0px 29px;
		border: 1px solid #d6d3d1;
		border-radius: 10px;
	}

	.day-input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
	}

	.month-input {
		width: 40px;
		height: 100%;
		border: none;
		outline: none;
	}

	.time-input {
		width: 22px;
		height: 100%;
		border: none;
		outline: none;
	}

	.input-wrapper:focus-within {
		border: 3px solid #fa8960;
		padding: 0px 27px;
		outline: none;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: none;
	}
</style>
