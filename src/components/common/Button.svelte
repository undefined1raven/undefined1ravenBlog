<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import isMobile from '../../fn/isMobile';
	import { RangeScaler } from '../../fn/RangeScaler';
	import FigmaImporter from '../../fn/figmaImporter';
	import globalStyle from '../../stores/globalStyles';
	import getFigmaImportConfig from '../../config/FigmaImportConfig';
	import readTransitions from '../../fn/readTransitions';
	import toolTipState from '../../stores/toolTipState';
	let lglobalStyles = $globalStyle;
	const dispatch = createEventDispatcher();
	let id;
	let label;
	let className;
	let color = $globalStyle.activeMono;
	let style;
	let borderColor = $globalStyle.activeColor;
	let backgroundColor = $globalStyle.activeColor;
	let hoverOpacityMin = 20;
	let hoverOpacityMax = 40;
	let onClick;
	let width;
	let height;
	let top;
	let left;
	let horizontalFont;
	let verticalFont = $globalStyle.regularMobileFont;
	let backdropFilter;
	let opacity;
	let tabletTop;
	let tabletLeft;
	let borderRadius = $globalStyle.borderRadius;
	let desktopFont = $globalStyle.regularDesktopFont;
	let touchStartUnix = 0;
	let fontType = 'rigid';
	let fontSize = '2.4vh';
	let onSelect;
	let align = 'center';
	let isMouseHovering = false;
	const root = document.documentElement;
	let clientWidth = root.clientWidth;
	let clientHeight = root.clientHeight;
	let horizontalCenter = false;
	let verticalCenter = false;
	let gradientBackground = false;
	let figmaImportConfig = { ...getFigmaImportConfig() };
	let mouseEnter;
	let mouseLeave;
	let transitions = {};
	let figmaImport = {};
	let alignPadding = '0%';
	let toolTipText = '';
	let isSelected = undefined; // undefined by default for backward compatibiliy. use for single selection groups
	let isEnabled = undefined;

	let rendered = false;

	function onIsSelectedChange(isSelected) {
		if (isEnabled === undefined || isEnabled === true) {
			if (isSelected !== undefined) {
				if (isSelected === true) {
					color = $globalStyle.activeMono;
					borderColor = $globalStyle.activeColor;
					backgroundColor = $globalStyle.activeColor;
				} else {
					color = $globalStyle.secondaryMono;
					borderColor = $globalStyle.secondaryColor;
					backgroundColor = $globalStyle.secondaryColor;
				}
			}
		}
	}

	function onIsEnabledChange(isEnabled) {
		if (isEnabled !== undefined) {
			if (isEnabled === true) {
				onIsSelectedChange(isSelected);
			} else {
				color = $globalStyle.inactiveMono;
				borderColor = $globalStyle.inactiveColor;
				backgroundColor = $globalStyle.inactiveColor;
			}
		}
	}

	$: onIsSelectedChange(isSelected);
	$: onIsEnabledChange(isEnabled);

	onMount(() => {
		rendered = true;
		fontController();
	});
	globalStyle.subscribe((gs) => {
		lglobalStyles = gs;
	});
	function onResize(e) {
		clientHeight = root.clientHeight;
		clientWidth = root.clientWidth;
		fontController();
	}

	function iu(val, valDefault) {
		return val != undefined ? val : valDefault;
	} //shorthand for isUndefined. short name for readibility

	const alignToPadding = { start: 'left', end: 'right', right: 'right', left: 'left' };

	function fontController() {
		if (isMobile() == true) {
			let orientation = clientHeight > clientWidth ? 'portrait' : 'landscape';
			if (orientation == 'portrait') {
				if (verticalFont != undefined) {
					fontSize =
						(parseFloat(verticalFont.substring(0, verticalFont.length - 2)) * clientWidth) / 360 +
						'px';
				} else {
					fontSize = '1.4vh';
				}
			} else {
				if (horizontalFont != undefined) {
					fontSize =
						(parseFloat(horizontalFont.substring(0, horizontalFont.length - 2)) * clientWidth) /
							640 +
						'px';
				} else {
					fontSize = '2.8vh';
				}
			}
		} else {
			let rawFontSize;
			if (desktopFont != undefined) {
				rawFontSize =
					(parseFloat(desktopFont.substring(0, desktopFont.length - 2)) * clientHeight) / 1080;
				fontSize = rawFontSize + 'px';
			} else {
				fontSize = '18px';
			}
			if (clientWidth < 700 && rawFontSize && !isMobile()) {
				fontSize = parseFloat(rawFontSize - RangeScaler(rawFontSize, 10, 48, 0, 18)) + 'px';
			}
		}
	}

	const { inFunc, inOptions, outFunc, outOptions } = readTransitions(transitions);

	export {
		id,
		onClick,
		label,
		className,
		color,
		borderColor,
		backgroundColor,
		width,
		height,
		top,
		left,
		horizontalFont,
		align,
		verticalFont,
		opacity,
		style,
		backdropFilter,
		borderRadius,
		fontType,
		desktopFont,
		alignPadding,
		hoverOpacityMin,
		hoverOpacityMax,
		horizontalCenter,
		onSelect,
		verticalCenter,
		figmaImport,
		figmaImportConfig,
		mouseEnter,
		mouseLeave,
		isEnabled,
		gradientBackground,
		transitions,
		toolTipText,
		isSelected
	};
</script>

<svelte:window on:resize={onResize} />
{#if rendered}
	<div
		{id}
		in:inFunc={inOptions}
		out:outFunc={outOptions}
		on:click={onClick}
		on:mouseenter={() => {
			if (toolTipText !== undefined && toolTipText !== '') {
				toolTipState.set({ text: toolTipText, show: true });
			}
			if (mouseEnter !== undefined) {
				mouseEnter.call();
			}
			isMouseHovering = true;
		}}
		on:mouseleave={() => {
			if (toolTipText !== undefined && toolTipText !== '') {
				toolTipState.set({ text: toolTipText, show: false });
			}
			if (mouseLeave !== undefined) {
				mouseLeave.call();
			}
			isMouseHovering = false;
		}}
		on:contextmenu={(e) => {
			e.preventDefault();
			if (onSelect !== undefined) {
				onSelect?.call(e);
			}
		}}
		class={`button ${iu(className, '')}`}
		style="
        opacity: {iu(opacity, '1')}; 
        font-size: {iu(fontSize, '2vh')};
        left: {iu(left, 'auto')}; 
        top: {iu(top, 'auto')};     
        width: {iu(width, 'auto')}; 
        height: {iu(height, 'auto')}; 
		{Object.keys(figmaImport).length > 0 ? FigmaImporter(figmaImport, figmaImportConfig) : ''} 
        color: {iu(color, '#FFF')}; 
		justify-content: {align};
		text-align: {align};	
        background-color: {iu(backgroundColor, '#0500FF')}{isMouseHovering &&
		(isEnabled === undefined || isEnabled === true)
			? hoverOpacityMax
			: hoverOpacityMin}; 
		background: {gradientBackground
			? `radial-gradient(275.54% 103.87% at 12.3% 17.1%, ${iu(backgroundColor, '#0500FF')}${
					isMouseHovering && (isEnabled === undefined || isEnabled === true)
						? hoverOpacityMax
						: hoverOpacityMin
			  } 0%, ${iu(backgroundColor, '#0500FF')}00 100%);`
			: 'auto;'}
		{horizontalCenter || verticalCenter
			? `transform: translateX(${horizontalCenter == true ? '-50%' : '0px'}) translateY(${
					verticalCenter == true ? '-50%' : '0px'
			  });`
			: ''};
		font-family: {fontType == 'soft' ? "'Oxanium', sans-serif;" : "'Oxanium', sans-serif;"}
		border: solid 1px {iu(borderColor, '#0500FF')};
        border-radius: {((parseFloat(
			iu(borderRadius, '0px')
				.toString()
				.substring(0, iu(borderRadius, '0px').length - 2)
		) *
			100) /
			360 /
			100) *
			clientHeight +
			'px;'};
        backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
        --webkit-backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
		padding-{alignToPadding[align]}: {alignPadding};
        {iu(style, '')}"
	>
		{label ? label : ''}
		<slot />
	</div>
{/if}

<style>
	.button {
		user-select: none;
		-webkit-user-select: none;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0%;
		transition: all linear 0.1s;
	}
</style>
