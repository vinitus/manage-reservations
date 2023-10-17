<script lang="ts">
	import upImg from '$lib/images/chevron-up.svg';
	import downImg from '$lib/images/chevron-down.svg';
	import { newReservation, type MyDate, type Time } from '$store';
	import { afterUpdate } from 'svelte';

	let hour: number;
	let minute: number;
	let renderTime = {
		hour: '',
		minute: '',
		ampm: ''
	};

	newReservation.subscribe((item) => {
		({ hour, minute } = item.time);
		renderTime = {
			hour: transformDigit(hour24Tohour12(hour)),
			minute: transformDigit(minute),
			ampm: hour >= 12 ? 'PM' : 'AM'
		};
	});

	function transformDigit(value: string | number) {
		let word = value.toString();
		if (word.length === 1) return '0' + word;
		return word;
	}

	function hour24Tohour12(h: number) {
		if (h >= 12) return h - 12;
		return h;
	}

	function timeControlReducer() {
		return (type: 'hour' | 'minute' | 'ampm') => {
			return {
				increase: () => {
					newReservation.update((item) => {
						if (type === 'ampm') {
							if (hour >= 12) item.time['hour'] -= 12;
							else item.time['hour'] += 12;
							return item;
						}
						if (item.time[type] >= 59) item.time[type] = 0;
						else if (type === 'hour' && item.time[type] >= 23) item.time[type] = 0;
						else item.time[type] += 1;
						return item;
					});
				},
				decrease: () => {
					newReservation.update((item) => {
						if (type === 'ampm') {
							if (hour >= 12) item.time['hour'] -= 12;
							else item.time['hour'] += 12;
							return item;
						}
						if (item.time[type] <= 0) return item;
						item.time[type]--;
						return item;
					});
				}
			};
		};
	}

	afterUpdate(() => {
		renderTime = {
			hour: transformDigit(hour24Tohour12(hour)),
			minute: transformDigit(minute),
			ampm: hour >= 12 ? 'PM' : 'AM'
		};
	});

	const reducer = timeControlReducer();
</script>

<div class="row">
	<div
		class="col"
		on:wheel={(e) => {
			if (e.deltaY < 0) reducer('hour').increase();
			else reducer('hour').decrease();
		}}
	>
		<button type="button" on:keydown={reducer('hour').increase} on:click={reducer('hour').increase}>
			<img src={upImg} alt="upImg" />
		</button>
		<p>{renderTime.hour}</p>
		<button type="button" on:keydown={reducer('hour').decrease} on:click={reducer('hour').decrease}>
			<img src={downImg} alt="downImg" />
		</button>
	</div>
	<p>:</p>
	<div
		class="col"
		on:wheel={(e) => {
			if (e.deltaY < 0) reducer('minute').increase();
			else reducer('minute').decrease();
		}}
	>
		<button
			type="button"
			on:keydown={reducer('minute').increase}
			on:click={reducer('minute').increase}
		>
			<img src={upImg} alt="upImg" />
		</button>
		<p>{renderTime.minute}</p>
		<button
			type="button"
			on:keydown={reducer('minute').decrease}
			on:click={reducer('minute').decrease}
		>
			<img src={downImg} alt="downImg" />
		</button>
	</div>
	<p />
	<div
		class="col"
		on:wheel={(e) => {
			if (e.deltaY < 0) reducer('ampm').increase();
			else reducer('ampm').decrease();
		}}
	>
		<img src={upImg} alt="upImg" />
		<p style="font-size: 28px; margin: 23px 0px 20px 0;">{renderTime.ampm}</p>
		<img src={downImg} alt="downImg" />
	</div>
</div>

<style>
	.row p {
		font-size: 30px;
		margin: 20px 0px;
	}

	.col {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 0px 60px;
		width: 100%;
		margin-bottom: 20px;
	}

	button {
		border: none;
		background-color: #ffffff;
	}

	button:hover {
		background-color: #f6f8f9;
	}
</style>
