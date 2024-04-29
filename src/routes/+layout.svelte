<script lang="ts">
	import globalStyles from '../stores/globalStyles';
	import { appColors } from '../config/appColors';
	import type { colorIDs } from '../stores/activeColorSchemeID';
	import { activeColorSchemeID } from '../stores/activeColorSchemeID';
	import ToolTip from '../components/common/ToolTip.svelte';
	import Box from '../components/common/Box.svelte';
	import toolTipState from '../stores/toolTipState';
	import { onMount } from 'svelte';
	import mousePosition from '../stores/mousePosition';
	import { touchStart, touchMove, touchEnd } from '../stores/touchGestures';
	import screenSize from '../stores/screenSize';
	import { desktopBreakpoints } from '../config/screenBreakpoints';
	import Menu from '../components/common/Desktop/Menu.svelte';
	import windowHash from '../stores/windowHash';
	import TopDecoBar from '../components/common/TopDecoBar.svelte';
	import { selectedProject } from '../stores/selectedProject';
	import isMobile from '../fn/isMobile';
	import BioDeco from '../components/deco/BioDeco.svelte';
	let menuFlickr = true;
	function onColorSchemeIDChange(colorID: colorIDs) {
		let stylesOverride = appColors[colorID];
		if (stylesOverride !== undefined) {
			const configOverrideKeys = Object.keys(stylesOverride);
			globalStyles.update((gs) => {
				for (let ix = 0; ix < configOverrideKeys.length; ix++) {
					gs[configOverrideKeys[ix]] = stylesOverride[configOverrideKeys[ix]];
				}
				return gs;
			});
		}
	}

	function onHashChange(windowHash) {
		if (windowHash === '#projectView') {
			activeColorSchemeID.set($selectedProject.colorID);
			menuFlickr = false;
			setTimeout(() => {
				menuFlickr = true;
			}, 40);
		} else {
			menuFlickr = false;
			activeColorSchemeID.set('main');
			setTimeout(() => {
				menuFlickr = true;
			}, 40);
		}
	}

	$: onHashChange($windowHash);
	$: onColorSchemeIDChange($activeColorSchemeID);

	$: isMini = $screenSize.width < desktopBreakpoints.first;
	$: menuProps = {
		'#main': {
			top: isMini ? 37 : 144,
			left: isMini ? 880 : 339,
			width: isMini ? 1800 : 852
		},
		'#contact': {
			top: isMini ? 37 : 144,
			left: isMini ? 880 : 339,
			width: isMini ? 1800 : 852
		},
		'#projectView': {
			top: isMini ? 64 : 64,
			left: isMini ? 55 : 296,
			width: isMini ? 2000 : 847
		},
		'#tree': {
			top: isMini ? 64 : 64,
			left: isMini ? 296 : 296,
			width: isMini ? 847 : 847
		}
	};
</script>

<!-- <svelte:window
	on:mousemove={(e) => {
		setTimeout(() => {
			mousePosition.set({ x: e.clientX, y: e.clientY });
		}, 200);
	}}
	on:touchend={(e) => {
		// touchEnd.set(e.touches);
	}}
	on:touchmove={(e) => {
		// touchMove.set(e.touches);
	}}
	on:touchstart={(e) => {
		// touchStart.set(e.touches);
	}}
/> -->
<ToolTip show={$toolTipState.show} text={$toolTipState.text} />
{#if menuFlickr && !isMobile()}
	<Menu {...menuProps[$windowHash]}></Menu>
{/if}
{#if isMobile()}
	<BioDeco
		width="85%"
		height="90%"
		left="56%"
		top="50%"
		style="opacity: 0.15; overflow: hidden; transform: translate(-50%, -50%);"
	></BioDeco>
	<Box left="0%" width="100%" backdropFilter="blur(2px)" height="100%"></Box>
{/if}
<TopDecoBar></TopDecoBar>
<slot />
