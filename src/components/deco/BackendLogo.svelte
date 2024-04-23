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
	viewBox="0 0 62 52"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="20" y="48" width="4" height="4" rx="1" fill={color} />
	<rect x="29" y="48" width="4" height="4" rx="1" fill={color} />
	<rect x="38" y="48" width="4" height="4" rx="1" fill={color} />
	<rect
		x="0.25"
		y="0.25"
		width="61.5"
		height="19.5"
		rx="4.75"
		fill={color}
		fill-opacity="0.2"
		stroke={color}
		stroke-width="0.5"
	/>
	<rect x="45" y="15" width="1" height="1" fill={color} />
	<rect x="47" y="15" width="1" height="1" fill={color} />
	<rect x="49" y="15" width="1" height="1" fill={color} />
	<rect x="45" y="13" width="1" height="1" fill={color} />
	<rect x="47" y="13" width="1" height="1" fill={color} />
	<rect x="49" y="13" width="1" height="1" fill={color} />
	<rect
		x="0.25"
		y="23.25"
		width="61.5"
		height="19.5"
		rx="4.75"
		fill={color}
		fill-opacity="0.2"
		stroke={color}
		stroke-width="0.5"
	/>
	<rect x="45" y="38" width="1" height="1" fill={color} />
	<rect x="47" y="38" width="1" height="1" fill={color} />
	<rect x="49" y="38" width="1" height="1" fill={color} />
	<rect x="45" y="36" width="1" height="1" fill={color} />
	<rect x="47" y="36" width="1" height="1" fill={color} />
	<rect x="49" y="36" width="1" height="1" fill={color} />
</svg>
