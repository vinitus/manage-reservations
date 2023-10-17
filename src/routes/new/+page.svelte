<script>
	import Header from '../Header.svelte';
	import ReservationForm from './ReservationForm.svelte';
</script>

<svelte:head>
	<title>New Reservation</title>
</svelte:head>

<section>
	<Header title={'New Reservation'} />
	<ReservationForm />
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
