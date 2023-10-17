import { writable } from 'svelte/store';

interface MyDate {
	month: number;
	day: number;
}

interface Time {
	hour: number;
	minute: number;
}

export interface ReservationInfo {
	name: string;
	phone: string;
	date: MyDate;
	time: Time;
	guests: number;
	table: number[];
	note: string;
}

export const reservationList = writable<ReservationInfo[]>([]);
export const newReservation = writable<ReservationInfo>({
	name: '',
	phone: '',
	date: {
		month: 1,
		day: 1
	},
	time: {
		hour: 1,
		minute: 1
	},
	guests: 1,
	table: [],
	note: ''
});
