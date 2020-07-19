import { writable } from "svelte/store";

// theme
export const theme = writable("light");

// filters
export const filters = writable({});
export const previous_filters = writable({});
export const filtersToggled = writable(false);
