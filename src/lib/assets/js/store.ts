import { writable } from 'svelte/store';

export const currentPage = writable<string>('');
export const isMenuOpen = writable<boolean>(false);
