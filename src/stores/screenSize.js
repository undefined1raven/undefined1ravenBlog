import { writable } from "svelte/store"
import { desktopBreakpoints } from "../config/screenBreakpoints";


function percentageOf(value, referenceVal) {
    if (!isNaN(parseFloat(value)) && !isNaN(parseFloat(referenceVal))) {
        return parseFloat(((value * 100) / referenceVal).toFixed(2));
    } else {
        throw new Error('Invalid Input');
    }
}

const root = document.documentElement;
const displaySize = { width: window.screen.width, height: window.screen.height };
const isMinimizedThreshold = percentageOf(desktopBreakpoints.first, 1920);//% of screen width
const isMinimized2Threshold = percentageOf(desktopBreakpoints.second, 1920);
const maxAvailWidth = window.screen.availWidth;

const screenSize = writable({
    width: root.clientWidth, height: root.clientHeight,
    minimized: percentageOf(displaySize.width, maxAvailWidth) < isMinimizedThreshold,
    mini2: percentageOf(displaySize.width, maxAvailWidth) < isMinimized2Threshold
});

export default screenSize;