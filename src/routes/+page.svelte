<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import close from '$lib/images/close.svg';
	import add from '$lib/images/add.svg';
</script>

<svelte:head>
	<title>Reservation List</title>
	<meta name="description" content="Reservation List" />
</svelte:head>

<section class="wrapper">
	<header class="header">
		<button type="button">
			<img src={add} alt="add" />
			<p>New Reservation</p>
		</button>
		<h1>Reservation</h1>
		<img class="close" src={close} alt="close" />
	</header>
	<!-- <h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" /> 의미 파익하기
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app << 그냥 h1 렌더링
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter /> // 컴포넌트인 듯?-->
	<!-- <div class="" /> -->
</section>

<style>
	.header {
		top: 0px;
		position: absolute;
		height: 110px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.close {
		width: 32px;
		height: 32px;
		margin: 0px 36px 0px 172px;
	}

	.header button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fdfdfd;
		color: #ec551f;
		width: 220px;
		height: 60px;
		border: none;
		border-radius: 10px;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		margin-left: 20px;
	}

	.header button p {
		line-height: 5px;
		margin-top: 0px;
		border-bottom-width: 0px;
		margin-bottom: 0px;
		margin-left: 10px;
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
	}
</style>
