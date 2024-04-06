import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
type colorIDs = 'main' | 'arc' | 'ringRelay' | 'eagle' | 'devLogs' | 'droneBuzz';

const activeColorSchemeID: Writable<colorIDs> = writable('main');


export { activeColorSchemeID }
export type { colorIDs }