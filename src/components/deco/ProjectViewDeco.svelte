<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import globalStyle from '../../stores/globalStyles';
	let lglobalStyles = $globalStyle;
	globalStyle.subscribe((gs) => {
		lglobalStyles = gs;
	});
	let height = '5vh';
	let width = '5vh';
	let left = 'auto';
	let top = 'auto';
	let style = '';
	let color = lglobalStyles.activeColor;

	let random: number[] = [];
	let interval;
	onMount(() => {
		interval = setInterval(() => {
			random = [];
			for (let ix = 0; ix < 4; ix++) {
				random.push(Math.random());
			}
		}, 400);
	});

	onDestroy(() => {
		if (interval !== undefined) {
			clearInterval(interval);
		}
	});

	export { height, width, left, top, style, color };
</script>

<svg
	{width}
	{height}
	style="position: absolute; top: {top}; left: {left}; {style}"
	viewBox="0 0 342 434"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M46.3305 170.753L108.542 63L232.964 63L295.176 170.753L232.965 278.506L108.542 278.506L46.3305 170.753Z"
		stroke={color}
		stroke-opacity={random[0]}
	/>
	<path
		d="M46.3305 216.753L108.542 109L232.964 109L295.176 216.753L232.965 324.506L108.542 324.506L46.3305 216.753Z"
		stroke={color}
		stroke-opacity={random[1]}
	/>
	<path
		d="M46.3305 262.753L108.542 155L232.964 155L295.176 262.753L232.965 370.506L108.542 370.506L46.3305 262.753Z"
		stroke={color}
		stroke-opacity={random[2]}
	/>
</svg>
<style>
	path,
	rect,
	circle {
		transition: all linear 0.4s;
	}
</style>
