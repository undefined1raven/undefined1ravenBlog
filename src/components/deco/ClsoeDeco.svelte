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
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		y="0.707092"
		width="1"
		height="27"
		rx="0.5"
		transform="rotate(-45 0 0.707092)"
		fill={color}
	/>
	<rect x="19.0919" width="1" height="27" rx="0.5" transform="rotate(45 19.0919 0)" fill={color} />
</svg>
