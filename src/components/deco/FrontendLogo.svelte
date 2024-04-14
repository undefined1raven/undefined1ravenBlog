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
	viewBox="0 0 51 47"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="25" y="25" width="1" height="12" fill={color} />
	<rect x="15" y="37" width="21" height="1" rx="0.5" fill={color} />
	<rect
		x="0.25"
		y="0.25"
		width="50.5"
		height="24.5"
		fill={color}
		fill-opacity="0.3"
		stroke={color}
		stroke-width="0.5"
	/>
	<rect x="14.5" y="43" width="4" height="4" rx="1" fill={color} />
	<rect x="23.5" y="43" width="4" height="4" rx="1" fill={color} />
	<rect x="32.5" y="43" width="4" height="4" rx="1" fill={color} />
</svg>
