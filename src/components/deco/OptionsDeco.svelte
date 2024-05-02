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
	viewBox="0 0 4 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect width="3.27273" height="3.27273" rx="1" fill={color} />
	<rect y="7.36365" width="3.27273" height="3.27273" rx="1" fill={color} />
	<rect y="14.7273" width="3.27273" height="3.27273" rx="1" fill={color} />
</svg>
