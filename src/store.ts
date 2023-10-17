import { writable } from 'svelte/store';

interface MyDate {
	month: number;
	day: number;
}

interface Time {
	minute: number;
	second: number;
}

export interface ReservationInfo {
	name: string;
	phone: string;
	date: MyDate;
	Time: Time;
	guests: number;
	table: number[];
	note: string;
}

export const reservationList = writable<ReservationInfo[]>([]);
export const newReservation = writable<ReservationInfo>();
