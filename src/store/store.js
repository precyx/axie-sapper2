import { writable } from "svelte/store";

export const theme = writable("light");

export const filters = writable({});
