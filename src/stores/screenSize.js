import { writable } from "svelte/store"
import { desktopBreakpoints } from "../config/screenBreakpoints";

const root = document.documentElement;
const displaySize = { width: window.screen.width, height: window.screen.height };
const isMinimizedThreshold = desktopBreakpoints.first;//% of screen width

const screenSize = writable({ width: root.clientWidth, height: root.clientHeight, minimized: root.clientWidth < isMinimizedThreshold });

export default screenSize;