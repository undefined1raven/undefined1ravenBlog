<script>
	import globalStyle from '../../stores/globalStyles';
	let lglobalStyles = $globalStyle;
	let height = '5vh';
	let width = '5vh';
	let left = 'auto';
	let top = 'auto';
	let style = '';
	let color = lglobalStyles.activeColor;

	export { height, width, left, top, style, color };
</script>

<svg
	{width}
	{height}
	style="position: absolute; top: {top}; left: {left}; {style}"
	viewBox="0 0 64 63"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="1.38721"
		y="1.09442"
		width="1"
		height="87"
		rx="0.5"
		transform="rotate(-45 1.38721 1.09442)"
		fill={color}
	/>
	<rect
		x="62.9053"
		y="0.387329"
		width="1"
		height="74.8596"
		rx="0.5"
		transform="rotate(45 62.9053 0.387329)"
		fill={color}
	/>
	<rect y="23" width="1" height="18.1406" rx="0.5" fill={color} />
	<rect
		x="23"
		y="63"
		width="1"
		height="18.1406"
		rx="0.5"
		transform="rotate(-90 23 63)"
		fill={color}
	/>
	<rect
		x="23"
		y="1"
		width="1"
		height="18.1406"
		rx="0.5"
		transform="rotate(-90 23 1)"
		fill={color}
	/>
	<path
		d="M46.5 1C46.2239 1 46 0.776142 46 0.5V0.5C46 0.223858 46.2239 0 46.5 0L63.5 0C63.7761 0 64 0.223858 64 0.5V0.5V0.5C63.9869 0.779851 63.7562 1 63.476 1H46.5Z"
		fill={color}
	/>
	<rect x="63" y="23" width="1" height="18.1406" rx="0.5" fill={color} />
	<rect x="63" width="1" height="18.1406" rx="0.5" fill={color} />
	<path
		d="M31.567 13.25L27.2369 5.75C27.0444 5.41667 27.285 5 27.6699 5L36.3301 5C36.715 5 36.9556 5.41667 36.7631 5.75L32.433 13.25C32.2406 13.5833 31.7594 13.5833 31.567 13.25Z"
		stroke={color}
	/>
</svg>
