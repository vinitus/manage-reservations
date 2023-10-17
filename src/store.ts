import { writable } from 'svelte/store';

export interface MyDate {
	month:
		| 'Jan'
		| 'Feb'
		| 'Mar'
		| 'Apr'
		| 'May'
		| 'Jun'
		| 'Jul'
		| 'Aug'
		| 'Sep'
		| 'Oct'
		| 'Nov'
		| 'Dec';
	day: number;
}

export interface Time {
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
		month: 'May',
		day: 10
	},
	time: {
		hour: 14,
		minute: 0
	},
	guests: 1,
	table: [],
	note: ''
});
export const dateTimeIsValid = writable<boolean>(false);
