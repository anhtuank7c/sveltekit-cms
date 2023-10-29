import { writable } from 'svelte/store';

type Message = {
	status: 'success' | 'warning' | 'error' | 'info';
	text: string;
	timeout?: number;
};

export const notificationStore = writable<{
	messages: Message[];
}>({
	messages: []
});
