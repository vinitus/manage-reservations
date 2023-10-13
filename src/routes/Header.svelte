<script>
	import close from '$lib/images/close.svg';
	import add from '$lib/images/add.svg';
	/**
	 * @type {Boolean}
	 */
	export let isNew;
</script>

<header class="header">
	<a href="/new">
		<button type="button">
			<img src={add} alt="add" />
			<p>New Reservation</p>
		</button>
	</a>
	<h1>{isNew ? 'New Reservation' : 'Reservation'}</h1>
	<img class="close" src={close} alt="close" />
</header>

<style>
	.header {
		top: 0px;
		position: absolute;
		height: 110px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
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
</style>
