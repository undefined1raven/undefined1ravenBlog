<script>
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

	let random = new Array(10).fill(0.1);

	let aniInterval = setInterval(() => {
		for (let ix = 0; ix < random.length; ix++) {
			random[ix] = Math.random().toFixed(3);
		}
	}, 300);

	onDestroy(() => {
		clearInterval(aniInterval);
	});

	export { height, width, left, top, style, color };
</script>

<svg
	{width}
	{height}
	style="position: absolute; top: {top}; left: {left}; {style}"
	viewBox="0 0 125 125"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_110_25)">
		<circle
			className="circle"
			cx="62"
			cy="117"
			r="84.5"
			stroke={color}
			stroke-opacity={random[0]}
		/>
		<circle
			className="circle"
			cx="63"
			cy="129"
			r="84.5"
			stroke={color}
			stroke-opacity={random[1]}
		/>
		<circle
			className="circle"
			cx="63"
			cy="140"
			r="84.5"
			stroke={color}
			stroke-opacity={random[2]}
		/>
		<circle
			className="circle"
			cx="63"
			cy="150"
			r="84.5"
			stroke={color}
			stroke-opacity={random[3]}
		/>
		<circle
			className="circle"
			cx="143"
			cy="78"
			r="84.5"
			stroke={color}
			stroke-opacity={random[4]}
		/>
		<circle
			className="circle"
			cx="144"
			cy="90"
			r="84.5"
			stroke={color}
			stroke-opacity={random[5]}
		/>
		<circle
			className="circle"
			cx="144"
			cy="101"
			r="84.5"
			stroke={color}
			stroke-opacity={random[6]}
		/>
		<circle
			className="circle"
			cx="144"
			cy="111"
			r="84.5"
			stroke={color}
			stroke-opacity={random[7]}
		/>
		<circle className="circle" cx="2" cy="148" r="84.5" stroke={color} stroke-opacity={random[8]} />
		<circle className="circle" cx="3" cy="160" r="84.5" stroke={color} stroke-opacity={random[9]} />
		<circle
			className="circle"
			cx="3"
			cy="171"
			r="84.5"
			stroke={color}
			stroke-opacity={random[10]}
		/>
		<circle
			className="circle"
			cx="3"
			cy="181"
			r="84.5"
			stroke={color}
			stroke-opacity={random[11]}
		/>
		<circle
			className="circle"
			cx="-45"
			cy="-51"
			r="84.5"
			stroke={color}
			stroke-opacity={random[12]}
		/>
		<circle
			className="circle"
			cx="-44"
			cy="-39"
			r="84.5"
			stroke={color}
			stroke-opacity={random[13]}
		/>
		<circle
			className="circle"
			cx="-44"
			cy="-28"
			r="84.5"
			stroke={color}
			stroke-opacity={random[14]}
		/>
		<circle
			className="circle"
			cx="-44"
			cy="-18"
			r="84.5"
			stroke={color}
			stroke-opacity={random[15]}
		/>
		<path
			d="M87.3971 34.7466L110.055 50.8572L86.8503 62.5426L87.3971 34.7466Z"
			fill={color}
			fill-opacity={random[10]}
		/>
		<path
			d="M89.3626 38.6494L112.02 54.76L88.8157 66.4454L89.3626 38.6494Z"
			fill={color}
			fill-opacity={random[7]}
		/>
		<path
			d="M41.3971 22.7466L64.0548 38.8572L40.8503 50.5426L41.3971 22.7466Z"
			fill={color}
			fill-opacity={random[5]}
		/>
		<path
			d="M43.3626 26.6494L66.0202 42.76L42.8157 54.4454L43.3626 26.6494Z"
			fill={color}
			fill-opacity={random[2]}
		/>
		<path
			d="M26.7406 68.7466L49.3983 84.8572L26.1938 96.5426L26.7406 68.7466Z"
			fill={color}
			fill-opacity={random[3]}
		/>
		<path
			d="M28.2754 72.6494L50.9331 88.76L27.7285 100.445L28.2754 72.6494Z"
			fill={color}
			fill-opacity={random[1]}
		/>
	</g>
	<defs>
		<clipPath id="clip0_110_25">
			<rect width="125" height="125" fill="white" />
		</clipPath>
	</defs>
</svg>

<style>
	circle {
		transition: all linear 0.5s;
	}
	path {
		transition: all linear 1.1s;
	}
</style>
