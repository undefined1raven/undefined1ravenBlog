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
	viewBox="0 0 19 19"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="4.5" y="3.07199" width="7" height="7" rx="0.5" stroke={color} />
	<g filter="url(#filter0_d_103_296)">
		<rect
			x="14.1075"
			width="1"
			height="13.6475"
			rx="0.5"
			transform="rotate(45 14.1075 0)"
			fill={color}
		/>
	</g>
	<defs>
		<filter
			id="filter0_d_103_296"
			x="0.664368"
			y="0.207108"
			width="17.9431"
			height="17.9431"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="2" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_296" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_296" result="shape" />
		</filter>
	</defs>
</svg>
