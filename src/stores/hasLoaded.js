import { writable } from "svelte/store";


const hasLoaded = writable(false);

export { hasLoaded }