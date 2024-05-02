<script>
	import { onMount } from 'svelte';
	import isMobile from '../../fn/isMobile.ts';
	import { RangeScaler } from '../../fn/RangeScaler.js';
	import screenSize from '../../stores/screenSize';
	import FigmaImporter from '../../fn/figmaImporter.js';
	import getFigmaImportConfig from '../../config/FigmaImportConfig.js';
	import readTransitions from '../../fn/readTransitions.js';
	import globalStyle from '../../stores/globalStyles.js';
	import toolTipState from '../../stores/toolTipState';
	import getRandomInt from '../../fn/getRandomInt.js';

	let lglobalStyles = $globalStyle;

	let id;
	let rendered = false;
	let text;
	let className;
	let color = lglobalStyles.activeMono;
	let style = '';
	let borderColor;
	let backgroundColor;
	let onClick;
	let onTouchStart;
	let onTouchEnd;
	let toolTipText = '';
	let width;
	let height;
	let top;
	let tabletTop;
	let align = 'center';
	let tabletLeft;
	let left;
	let horizontalFont;
	let verticalFont = lglobalStyles.regularMobileFont;
	let opacity;
	let backdropFilter;
	let borderRadius = $globalStyle.borderRadius;
	let show = true;
	let tabletWidth;
	let desktopFont = lglobalStyles.regularDesktopFont;
	let horizontalCenter = false;
	let verticalCenter = false;
	let fontType = 'rigid';
	let animateText = false;
	let transitions = {};
	let slotClassName = '';
	let figmaImportConfig = { ...getFigmaImportConfig() };
	let alignPadding = '0%';
	let figmaImport = {};
	let textActual = text;
	let animationRate = 1;
	const alignToPadding = { start: 'left', end: 'right', right: 'right', left: 'left' };

	const root = document.documentElement;
	let fontSize = '2.4vh';
	let clientWidth = root.clientWidth;
	let clientHeight = root.clientHeight;

	const textAnimationChars = ['[', ']', ':', 'X', '#', '\\'];

	onMount(() => {
		let aniInterval = 40 / (animationRate > 0 ? animationRate : 0.1);
		if (animateText === true) {
			textActual = '';
			setInterval(() => {
				if (textActual.length < text.length) {
					textActual += textAnimationChars[getRandomInt(0, textAnimationChars.length - 1)];
					setTimeout(() => {
						textActual = textActual.slice(0, textActual.length - 1);
						let replacementChar = text[textActual.length];
						textActual += replacementChar;
					}, 10);
				}
			}, aniInterval);
		}
		setTimeout(() => {
			textActual = text;
		}, aniInterval * text.length);
		fontController();
		rendered = true;
	});

	const { inFunc, inOptions, outFunc, outOptions } = readTransitions(transitions);

	function onResize() {
		clientHeight = root.clientHeight;
		clientWidth = root.clientWidth;
		fontController();
		screenSize.update(() => {
			return { width: clientWidth, height: clientHeight, minimized: clientWidth < 1000 };
		});
	}

	function iu(val, valDefault) {
		return val != undefined ? val : valDefault;
	} //shorthand for isUndefined. short name for readibility

	function positionParser(mobilePosition, tabletPosition) {
		if (clientWidth > 1023 && tabletPosition != 'auto') {
			return tabletPosition;
		} else {
			return mobilePosition;
		}
	}

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
			if ($screenSize.minimized && rawFontSize && !isMobile()) {
				fontSize = parseFloat(rawFontSize - RangeScaler(rawFontSize, 10, 48, 0, 18)) + 'px';
			}
		}
	}

	export {
		id,
		onClick,
		text,
		className,
		color,
		borderColor,
		backgroundColor,
		width,
		height,
		alignPadding,
		top,
		left,
		animateText,
		horizontalFont,
		verticalFont,
		opacity,
		style,
		tabletLeft,
		tabletTop,
		backdropFilter,
		borderRadius,
		align,
		onTouchStart,
		onTouchEnd,
		show,
		toolTipText,
		tabletWidth,
		desktopFont,
		fontType,
		horizontalCenter,
		verticalCenter,
		figmaImportConfig,
		figmaImport,
		transitions,
		slotClassName
	};
</script>

<svelte:window on:resize={onResize} />
{#if show && rendered}
	<div
		in:inFunc={inOptions}
		out:outFunc={outOptions}
		{id}
		on:touchstart={onTouchStart}
		on:touchend={onTouchEnd}
		on:click={onClick}
		on:mouseenter={() => {
			if (toolTipText !== undefined && toolTipText !== '') {
				toolTipState.set({ text: toolTipText, show: true });
			}
		}}
		on:mouseleave={() => {
			if (toolTipText !== undefined && toolTipText !== '') {
				toolTipState.set({ text: toolTipText, show: false });
			}
		}}
		class={`label ${className ? className : ''}`}
		style="
    opacity: {iu(opacity, '1')}; 
	letter-spacing: 0.1vh;
	font-family: {fontType == 'soft' ? "'Oxanium', sans-serif;" : "'IBM Plex Mono', monospace;"}
    font-size: {iu(fontSize, '2vh')}; 
    left: {positionParser(iu(left, 'auto'), iu(tabletLeft, 'auto'))}; 
    top: {positionParser(iu(top, 'auto'), iu(tabletTop, 'auto'))}; 
    width: {positionParser(iu(width, 'auto'), iu(tabletWidth, 'auto'))}; 
    height: {iu(height, 'auto')}; 
    color: {iu(color, '#FFF')}; 
	{Object.keys(figmaImport).length > 0 ? FigmaImporter(figmaImport, figmaImportConfig) : ''} 
    background-color: {iu(backgroundColor, '#2400FF00')};
	border: solid 1px {iu(borderColor, '#FFFFFF00')};
	justify-content: {align};
	text-align: {align};
	{horizontalCenter || verticalCenter
			? `transform: translateX(${horizontalCenter == true ? '-50%' : '0px'}) translateY(${
					verticalCenter == true ? '-50%' : '0px'
				});`
			: ''};
    border-radius: {((parseFloat(
			iu(borderRadius, '0px').substring(0, iu(borderRadius, '0px').length - 2)
		) *
			100) /
			360 /
			100) *
			clientHeight +
			'px;'}
    --webkit-backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
    backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
	padding-{alignToPadding[align]}: {alignPadding};
    {style}"
	>
		{textActual ? textActual : ''}
		<slot class={slotClassName} />
	</div>
{/if}

<style>
	.label {
		user-select: none;
		--webkit-user-select: none;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0%;
		text-align: center;
		transition: color linear 0.1s;
	}
	.ibm-plex mono-regular {
		font-family: 'IBM Plex Mono', monospace;
		font-weight: 400;
		font-style: normal;
	}
</style>
