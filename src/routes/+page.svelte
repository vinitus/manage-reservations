<script>
	// import Counter from './Counter.svelte';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Reservation List</title>
	<meta name="description" content="Reservation List" />
</svelte:head>

<section class="wrapper">
	<Header isNew={false} />
	<!-- <Counter /> // 컴포넌트인 듯? -->
</section>

<style>
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
