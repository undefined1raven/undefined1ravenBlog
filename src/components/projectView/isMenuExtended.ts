
import { writable, type Writable } from "svelte/store";


const isMenuExtended: Writable<boolean> = writable(true);


export { isMenuExtended }