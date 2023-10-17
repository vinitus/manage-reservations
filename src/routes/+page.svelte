<script>
	import Header from './Header.svelte';
	import ReservationInfo from './ReservationInfo.svelte';
</script>

<svelte:head>
	<title>Reservation List</title>
	<meta name="description" content="Reservation List" />
</svelte:head>

<section class="wrapper">
	<Header isNew={false} />
	<div class="reservation-wrapper">
		<ReservationInfo />
		<ReservationInfo />
		<ReservationInfo />
		<ReservationInfo />
	</div>
</section>

<style>
	.reservation-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 110px;
		width: 100%;
		height: 100%;
		padding: 20px 20px 0 20px;
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
