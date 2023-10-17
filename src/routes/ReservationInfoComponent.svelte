<script lang="ts">
	import { reservationList, type ReservationInfo } from '$store';
	import phoneSrc from '$lib/images/phone.svg';
	import checkedCalendar from '$lib/images/event_available.svg';
	import group from '$lib/images/group.svg';
	import edit from '$lib/images/edit.svg';
	import trash from '$lib/images/trash.svg';
	import { goto } from '$app/navigation';

	export let reservationInfo: ReservationInfo;
	export let reservationIdx: number;

	const { name, phone, date, time, guests, table, note } = reservationInfo;

	function transformDigit(value: string | number) {
		let word = value.toString();
		if (word.length === 1) return '0' + word;
		return word;
	}

	const months = [
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

	console.log(months.indexOf(new Date().getMonth().toString()).toString());
	console.log(new Date().getMonth());
</script>

<div
	role="button"
	tabindex={0}
	class="reservation"
	on:click={() => {
		goto(`/edit/${reservationIdx}`);
	}}
	on:keydown={() => {
		goto(`/edit/${reservationIdx}`);
	}}
>
	<div class="row">
		<p class="name">{name}</p>
		<div class="row phone-wrapper">
			<img src={phoneSrc} alt="phoneSrc" class="img-margin" />
			<p>{phone}</p>
		</div>
	</div>
	<div class="row">
		<img src={checkedCalendar} alt="checkedCalendar" class="img-margin" />
		<div class="row">
			{#if date.month === months[new Date().getMonth()] && date.day === new Date().getDate()}
				<p>Today</p>
			{:else}
				<p>{date.month} {date.day}</p>
			{/if}
			<p>,</p>
			<p>
				{time.hour > 12 ? time.hour - 12 : time.hour}:{transformDigit(time.minute)}
				{time.hour < 12 ? 'AM' : 'PM'}
			</p>
		</div>
	</div>
	<div class="row">
		<img src={group} alt="group" style="margin-left: 3px;" class="img-margin" />
		<p>{guests}</p>
	</div>
	<div class="row">
		{#if table.length}
			<p>Reserved Table {table.join(', ')}</p>
			<p class="dot">·</p>
			<p>Floor 1</p>
		{:else}
			<p style="color:#A8A29E">No Selected Table</p>
		{/if}
	</div>
	<div class="row">
		{#if note}
			<p>{note}</p>
			<img src={edit} alt="edit" style="margin-left: 5px;" />
		{/if}
	</div>
	<div class="row last">
		<button
			class="trash-button"
			on:click={() => {
				reservationList.update((item) => {
					item.splice(reservationIdx, 1);
					return item;
				});
			}}><img src={trash} alt="trash" /></button
		>
		<button
			class="seated-button"
			on:click={() => {
				reservationList.update((item) => {
					item[reservationIdx].isSeated = true;
					return item;
				});
			}}>Seated</button
		>
	</div>
</div>

<style>
	button {
		border: none;
		border-radius: 10px;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
	}

	.trash-button {
		height: 60px;
		width: 60px;
		background-color: #fbfbfa;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.seated-button {
		margin-left: 20px;
		width: 180px;
		height: 60px;
		background: none;
		background-color: #e5501b;
		color: #ffffff;
	}

	.last {
		bottom: 20px;
		position: absolute;
	}

	.dot {
		font-weight: 700;
		margin: 0px 5px;
	}

	.img-margin {
		margin-right: 10px;
	}

	.name {
		margin-right: 10px;
		font-weight: 600;
	}

	.phone-wrapper {
		width: 150px;
		height: 40px;
		border: none;
		border-radius: 30px;
		justify-content: center;
		background: linear-gradient(#fefefe, #f6f6f5);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	.row {
		display: flex;
		align-items: center;
		height: 45px;
	}

	.reservation {
		position: relative;
		width: 300px;
		height: 340px;
		background-color: #ffffff;
		margin-bottom: 20px;
		border: none;
		border-radius: 10px;
		padding: 20px;
		margin-right: calc(37px / 2);
	}
</style>
