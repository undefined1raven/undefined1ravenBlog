<script>
	import globalStyle from '../../stores/globalStyles';
	let height = '5vh';
	let width = '5vh';
	let left = 'auto';
	let top = 'auto';
	let style = '';
	let color = $globalStyle.activeColor;

	export { height, width, left, top, style, color };
</script>

<svg
	{width}
	{height}
	style="position: absolute; top: {top}; left: {left}; {style}"
	viewBox="0 0 68 68"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="23" y="59" width="4" height="4" rx="1" fill={color} />
	<rect x="32" y="59" width="4" height="4" rx="1" fill={color} />
	<rect x="41" y="59" width="4" height="4" rx="1" fill={color} />
	<rect
		x="23.2782"
		y="52.4769"
		width="29"
		height="29"
		transform="rotate(-90 23.2782 52.4769)"
		fill={color}
		fill-opacity="0.3"
		stroke={color}
	/>
	<rect
		x="19.0355"
		y="48.2343"
		width="29"
		height="29"
		transform="rotate(-90 19.0355 48.2343)"
		fill={color}
		fill-opacity="0.3"
		stroke={color}
	/>
	<rect
		x="15.6508"
		y="44.548"
		width="29"
		height="29"
		transform="rotate(-90 15.6508 44.548)"
		fill={color}
		fill-opacity="0.3"
		stroke={color}
	/>
</svg>
