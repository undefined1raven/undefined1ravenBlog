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
	viewBox="0 0 81 70"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="0.703562"
		width="47.7892"
		height="47.6221"
		transform="matrix(0.703562 -0.710634 0.703562 0.710634 0.208563 35.1712)"
		fill={color}
		fill-opacity="0.2"
		stroke={color}
	/>
	<rect
		x="0.703562"
		width="47.7892"
		height="47.6221"
		transform="matrix(0.703562 -0.710634 0.703562 0.710634 12.0323 35.9474)"
		fill={color}
		fill-opacity="0.2"
		stroke={color}
	/>
	<path
		d="M52.533 34.5915C52.533 41.2756 47.1698 46.6855 40.5644 46.6855C33.959 46.6855 28.5957 41.2756 28.5957 34.5915C28.5957 27.9075 33.959 22.4976 40.5644 22.4976C47.1698 22.4976 52.533 27.9075 52.533 34.5915Z"
		stroke={color}
	/>
</svg>
