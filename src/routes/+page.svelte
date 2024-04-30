<script>
	import { onMount } from 'svelte';
	import Box from '../components/common/Box.svelte';
	import Label from '../components/common/Label.svelte';
	import globalStyle from '../stores/globalStyles';
	import Button from '../components/common/Button.svelte';
	import Main from '../components/main/Main.svelte';
	import MainMobile from '../components/main/mobile/MainMobile.svelte';
	import windowHash from '../stores/windowHash';
	import Menu from '../components/common/Desktop/Menu.svelte';
	import screenSize from '../stores/screenSize';
	import { desktopBreakpoints } from '../config/screenBreakpoints';
	import ProjectViewMain from '../components/projectView/ProjectViewMain.svelte';
	import { hasLoaded } from '../stores/hasLoaded';
	import isMobile from '../fn/isMobile';
	let blurFilterVal = 10;

	const allowedHashes = ['main', 'contact', 'tree', 'projectView'];

	onMount(() => {
		setInterval(() => {
			if (blurFilterVal > 0) blurFilterVal--;
			if (blurFilterVal === 0) hasLoaded.set(true);
		}, 20);
	});

	let menuRedraw = true;

	function onHashChange(windowHash) {
		if (allowedHashes.find((elm) => `#${elm}` === windowHash) === undefined) {
			window.location.hash = '#main';
			// document.title = `/undefined1raven\\`;
			menuRedraw = false;
			setTimeout(() => {
				menuRedraw = true;
			}, 50);
		}
	}

	const hashToComponent = {
		'#main': Main,
		'#contact': Main,
		'#tree': Label,
		'#projectView': ProjectViewMain
	};

	const mobileHashToComponent = {
		'#main': MainMobile,
		'#contact': Main,
		'#tree': Label,
		'#projectView': ProjectViewMain
	};

	$: onHashChange($windowHash);
</script>

{#if blurFilterVal > 0}
	<Box
		width="99.8%"
		left="0%"
		top="0%"
		height="99.8%"
		style="z-index: 50;"
		backdropFilter="blur({blurFilterVal}px);"
	></Box>
{/if}

{#if isMobile() === false}
	<svelte:component this={hashToComponent[$windowHash]}></svelte:component>
{/if}
{#if isMobile() === true}
	<svelte:component this={mobileHashToComponent[$windowHash]}></svelte:component>
{/if}

<style>
	:global(body) {
		overflow: hidden;
		background-image: linear-gradient(
			244deg,
			rgba(20, 14, 39, 1) 0%,
			rgba(17, 9, 40, 1) 28%,
			rgba(8, 4, 21, 1) 68%,
			rgba(5, 0, 20, 1) 99%
		);
	}
	:global(html) {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
