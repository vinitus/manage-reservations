<script lang="ts">
	import close from '$lib/images/close.svg';
	import add from '$lib/images/add.svg';
	import keyboard_backspace from '$lib/images/keyboard_backspace.svg';
	import { reservationList } from '$store';
	export let isNew: boolean;

	let length: number;
	reservationList.subscribe((item) => {
		let cnt = 0;
		item.forEach((info) => !info.isSeated && cnt++);
		length = cnt;
	});
</script>

<header class="header">
	<div>
		{#if !isNew}
			<a href="/new">
				<img src={add} alt="add" />
				<p>New Reservation</p>
			</a>
		{:else}
			<a href="/">
				<img src={keyboard_backspace} alt="keyboard_backspace" />
			</a>
		{/if}
	</div>
	<div class="row">
		{#if length > 0 && !isNew}
			<h1 style="">{isNew ? 'New Reservation' : 'Reservation'}</h1>
			<p class="length-p" style="margin-right: auto;">{length}</p>
		{:else}
			<h1 style="">{isNew ? 'New Reservation' : 'Reservation'}</h1>
		{/if}
	</div>
	<div>
		<img class="close" src={close} alt="close" />
	</div>
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
		margin-right: 36px;
		right: 0px;
		position: absolute;
		top: calc((100% - 32px) / 2);
	}

	.length-p {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		font-size: 20px;
		border-radius: 25px;
		background-color: #e9531d;
		color: #ffffff;
	}

	.row h1 {
		margin-left: auto;
	}

	.row {
		width: 33%;
		display: flex;
		align-items: center;
	}

	.header div {
		width: 33%;
		height: 60px;
	}

	.header a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fdfdfd;
		color: #ec551f;
		padding: 0px 15px;
		height: 60px;
		width: fit-content;
		border: none;
		border-radius: 10px;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		margin-left: 20px;
	}

	.header a p {
		line-height: 5px;
		margin-top: 0px;
		border-bottom-width: 0px;
		margin-bottom: 0px;
		margin-left: 10px;
	}
</style>
