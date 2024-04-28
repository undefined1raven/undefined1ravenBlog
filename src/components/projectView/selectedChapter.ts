import { writable, type Writable } from "svelte/store";
import type { Chapter } from "../../config/projects";


const selectedChapter: Writable<Chapter> = writable({ title: '', id: '', content: '' });


export { selectedChapter }