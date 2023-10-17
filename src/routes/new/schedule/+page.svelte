<script>
	import GradationButton from '../GradationButton.svelte';
	import TimeControl from './TimeControl.svelte';
	import alarmOn from '$lib/images/alarm_on.svg';
	import today from '$lib/images/today.svg';
	import trash from '$lib/images/trash.svg';
</script>

<section>
	<div class="schedule-select-form">
		<div class="row">
			<img src={alarmOn} alt="alarmOn" />
			<input value="2:00 PM" />
		</div>
		<div class="row">
			<img src={today} alt="today" />
			<input value="May 10" />
		</div>
		<TimeControl />
		<div class="row">
			<GradationButton imgSrc={trash} alt="trash" style="width: 68px; height: 52px;" />
			<GradationButton
				style="margin-left:35px; width: 100%; height: 52px; background: none; background-color: #E5501B; color:white; font-size: 18px;"
				>Save</GradationButton
			>
		</div>
	</div>
</section>

<style>
	.row {
		display: flex;
		align-items: center;
		width: 100%;
		margin-bottom: 20px;
	}

	section {
		width: 977px;
		height: 793px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: fixed;
	}

	.schedule-select-form {
		padding: 20px 25px;
		position: absolute;
		width: 400px;
		height: 420px;
		background-color: #ffffff;
		border: none;
		border-radius: 10px;
	}

	.row input {
		display: flex;
		align-items: center;
		margin-left: 15px;
		height: 70px;
		width: 100%;
		padding: 0px 29px;
		border: 1px solid #d6d3d1;
		border-radius: 10px;
	}

	.row input:focus {
		border: 3px solid #fa8960;
		padding: 0px 27px;
		outline: none;
	}
</style>
