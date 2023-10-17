<script lang="ts">
	import GradationButton from './GradationButton.svelte';
	import mathMinus from '$lib/images/math-minus.svg';
	import mathPlus from '$lib/images/math-plus.svg';
	import type { ReservationInfo } from '$store';

	export let reservationInfo: ReservationInfo;
</script>

<div class="counter-wrapper">
	<p>Guests</p>
	<GradationButton
		imgSrc={mathMinus}
		alt="mathMinus"
		style="width:70px; height:70px;"
		onClick={() => {
			reservationInfo.guests -= 1;
		}}
	/>
	<p class="count-num">{reservationInfo.guests}</p>
	<GradationButton
		imgSrc={mathPlus}
		alt="mathPlus"
		style="width:70px; height:70px;"
		onClick={() => {
			reservationInfo.guests += 1;
		}}
	/>
</div>

<style>
	.count-num {
		font-size: 24px;
		font-weight: 600;
	}

	.counter-wrapper {
		width: 310px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.counter-wrapper * {
		width: min-content;
	}
</style>
