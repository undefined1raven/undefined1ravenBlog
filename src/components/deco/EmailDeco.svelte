<script>
	import globalStyle from '../../stores/globalStyles';

	let lglobalStyles = $globalStyle;
	let height = '5vh';
	let width = '5vh';
	let left = 'auto';
	let top = 'auto';
	let style = '';
	let color = lglobalStyles.activeColor;
	let id;
	export { height, width, left, top, style, color, id };
</script>

<svg
	id={id ? id : undefined}
	{width}
	{height}
	style="position: absolute; top: {top}; left: {left}; {style}"
	viewBox="0 0 97 46"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="1"
		y="1"
		width="95"
		height="44"
		rx="2"
		fill={color}
		fill-opacity="0.5"
		stroke={color}
		stroke-width="2"
	/>
	<path d="M1 2L48.5 24L96 2" stroke={color} stroke-width="2" />
</svg>
