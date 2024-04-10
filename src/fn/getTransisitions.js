import { fly } from "svelte/transition";

function getTransition(stage, delay, axis) {
    let delayActual = 50;
    if (delay !== undefined && typeof (delay) === 'number') {
        delayActual = delay;
    }
    let axisActual = 'y';
    if (axis === 'x' || axis === 'y') {
        axisActual = axis;
    }
    let out = {
        in: { func: fly, options: { delay: stage * delayActual, duration: 200 } }
    }
    out['in']['options'][axisActual] = '-4%';
    return out;
}

function getDesktopTransition(stage, delay) {
    let delayActual = 50;
    if (delay !== undefined && typeof (delay) === 'number') {
        delayActual = delay;
    }
    return {
        in: { func: fly, options: { delay: stage * delayActual, duration: 200, y: '-10%' } }
    };
}

export { getTransition, getDesktopTransition }
