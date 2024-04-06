<script>
	import { onMount } from 'svelte';
	import Box from '../components/common/Box.svelte';
	import Label from '../components/common/Label.svelte';
	import globalStyle from '../stores/globalStyles';
	import Button from '../components/common/Button.svelte';
	import Main from '../components/main/Main.svelte';
	import windowHash from '../stores/windowHash';
	import Menu from '../components/common/Desktop/Menu.svelte';
	import screenSize from '../stores/screenSize';
	import { desktopBreakpoints } from '../config/screenBreakpoints';
	let blurFilterVal = 10;

	const allowedHashes = ['main', 'contact', 'tree', 'projectView'];

	onMount(() => {
		setInterval(() => {
			if (blurFilterVal > 0) blurFilterVal--;
		}, 20);
	});

	let menuRedraw = true;

	function onHashChange(windowHash) {
		if (allowedHashes.find((elm) => `#${elm}` === windowHash) === undefined) {
			window.location.hash = '#main';
			document.title = `/undefined1raven\\`;
			menuRedraw = false;
			setTimeout(() => {
				menuRedraw = true;
			}, 50);
		}
	}

	const hashToComponent = { '#main': Main, '#contact': Main, '#tree': Menu, '#projectView': Menu };

	$: onHashChange($windowHash);


</script>

{#if blurFilterVal > 0}
	<Box
		width="100%"
		left="0%"
		top="0%"
		height="100%"
		style="z-index: 50;"
		backdropFilter="blur({blurFilterVal}px);"
	></Box>
{/if}

<svelte:component this={hashToComponent[$windowHash]}></svelte:component>


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
</style>
