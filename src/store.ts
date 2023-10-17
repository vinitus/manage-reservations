import { writable } from 'svelte/store';

interface MyDate {
	month: number;
	day: number;
}

interface time {
	minute: number;
	second: number;
}

interface reservationInfo {
	name: string;
	phone: string;
	date: MyDate;
	time: time;
	guests: number;
	table: number[];
	note: string;
}

export const reservationList = writable<reservationInfo[]>([]);
