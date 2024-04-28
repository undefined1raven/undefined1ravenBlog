import { writable } from "svelte/store"
import { desktopBreakpoints } from "../config/screenBreakpoints";

const root = document.documentElement;
const displaySize = { width: window.screen.width, height: window.screen.height };
const isMinimizedThreshold = desktopBreakpoints.first;//% of screen width
const isMinimized2Threshold = desktopBreakpoints.second;

const screenSize = writable({ width: root.clientWidth, height: root.clientHeight, minimized: root.clientWidth < isMinimizedThreshold, mini2: root.clientWidth < isMinimized2Threshold });

export default screenSize;