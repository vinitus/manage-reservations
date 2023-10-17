<script lang="ts">
	import type { ReservationInfo } from '$store';
	import edit from '$lib/images/edit.svg';

	export let isInputStarted: boolean;
	export let reservationInfo: ReservationInfo;
</script>

{#if isInputStarted}
	<!-- textarea가 조건부로 렌더링되기 때문에 autofocus를 사용해도 괜찮을 것이라고 판단 -->
	<!-- svelte-ignore a11y-autofocus -->
	<textarea
		autofocus
		bind:value={reservationInfo.note}
		name=""
		id=""
		class="add-note"
		on:input={(e) => (reservationInfo.note = e.currentTarget.value)}
		on:blur={() => {
			if (reservationInfo.note.length === 0) isInputStarted = false;
		}}
	/>
{:else}
	<div
		class="add-note"
		role="button"
		tabindex="0"
		on:click={() => {
			isInputStarted = true;
		}}
		on:keydown={() => {
			isInputStarted = true;
		}}
	>
		<div class="add-note-img-wrapper">
			Add Note... <img src={edit} alt="edit" />
		</div>
	</div>
{/if}

<style>
	.add-note {
		width: 100%;
		height: 205px;
		border: 1px solid #d6d3d1;
		border-radius: 10px;
		padding: 20px;
		resize: none;
		box-shadow: 0px 1px 1px 1px rgba(214, 211, 209, 0.1);
	}

	.add-note-img-wrapper {
		display: flex;
		align-items: center;
		color: #a8a29e;
	}
</style>
