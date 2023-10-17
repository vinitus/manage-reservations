<script lang="ts">
	import Header from '../../Header.svelte';
	import ReservationForm from '../../new/ReservationForm.svelte';
	import { page } from '$app/stores';
	import { reservationList, newReservation, dateTimeIsValid, type ReservationInfo } from '$store';

	const idx = $page.url.pathname.split('/')[2];

	let reservationInfo: ReservationInfo;

	reservationList.subscribe((item) => (reservationInfo = item[Number(idx)]));

	newReservation.update(() => reservationInfo);

	dateTimeIsValid.update(() => true);
</script>

<svelte:head>
	<title>Edit Reservation</title>
</svelte:head>

<section>
	<Header title={'Edit Reservation'} />
	<ReservationForm
		submitHandler={() => {
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
				item[Number(idx)] = originData;
				return item;
			});
		}}
	/>
</section>

<style>
	section {
		width: 977px;
		height: 793px;
		background-color: #f5f5f4;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: fixed;
	}
</style>
