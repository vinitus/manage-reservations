<script lang="ts">
	import Header from './Header.svelte';
	import ReservationInfoComponent from './ReservationInfoComponent.svelte';
	import { reservationList, type ReservationInfo } from '$store';

	let list: ReservationInfo[];

	reservationList.subscribe((item) => (list = item));
</script>

<svelte:head>
	<title>Reservation List</title>
	<meta name="description" content="Reservation List" />
</svelte:head>

<section class="wrapper">
	<Header title={'Reservation'} />
	<div class="reservation-wrapper">
		{#each Object.entries(list) as [key, reservationInfo]}
			{#if !reservationInfo.isSeated}
				<ReservationInfoComponent {reservationInfo} reservationIdx={Number(key)} />
			{/if}
		{/each}
	</div>
</section>

<style>
	.reservation-wrapper {
		display: flex;
		flex-wrap: wrap;
		margin-top: 110px;
		width: 100%;
		height: 100%;
		padding: 20px 0px 0 20px;
		padding-right: calc(1px);
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.reservation-wrapper::-webkit-scrollbar {
		display: none;
	}

	.wrapper {
		width: 977px;
		height: 793px;
		background-color: #f5f5f4;
		border-radius: 10px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: fixed;
		background-color: #f5f5f4;
	}
</style>
