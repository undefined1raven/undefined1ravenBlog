<script lang="ts">
	import { fly } from 'svelte/transition';
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Label from '../common/Label.svelte';
	import Button from '../common/Button.svelte';
	import BioDeco from '../deco/BioDeco.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import LinkedLogo from '../deco/linkedLogo.svelte';
	import { hasLoaded } from '../../stores/hasLoaded';
	import EmailDeco from '../deco/EmailDeco.svelte';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: isMini = $screenSize.width < desktopBreakpoints.first;
	$: socialBoxWidth = isMini ? 150 : 65;
	$: containerConfig = {
		containerHeight: 586,
		containerWidth: isMini ? 1800 : 707
	};
	let showClipboardLabel = false;
	$: transitionDelay = $hasLoaded ? 1 : 150;
</script>

<Box
	horizontalCenter={isMini}
	figmaImport={{
		desktop: {
			top: isMini ? 100 : 251,
			left: isMini ? '50%' : 339,
			width: containerConfig.containerWidth,
			height: containerConfig.containerHeight
		}
	}}
	backgroundColor="{$globalStyle.activeColor}10"
>
	<BioDeco style="opacity: 0.1;" width="60%" height="60%"></BioDeco>
	<Box width="100%" height="100%" backdropFilter="blur(0px)"></Box>
	<Box
		borderColor={$globalStyle.inactiveColor}
		transitions={{
			in: { func: fly, options: { x: '2%', duration: 200, delay: $hasLoaded ? 1 : 250 } }
		}}
		style="overflow: hidden; right: 2%; box-shadow: 0px 0px 12px {$globalStyle.inactiveColor};"
		figmaImport={{ desktop: { top: 28, left: 'auto', width: 'auto', height: 'auto' } }}
		width="15vh"
		height="15vh"
		backgroundColor="{$globalStyle.activeColor}00"
		><img alt="Selfie" style="user-select: none;" width="100%" height="auto" src="/pic.webp" /></Box
	>
	<Box
		transitions={getTransition(1, transitionDelay)}
		figmaImportConfig={containerConfig}
		figmaImport={{ desktop: { left: 17, top: 113, width: socialBoxWidth, height: 45 } }}
		><a target="_blank" style="width: 100%; height: 100%;" href="https://github.com/undefined1raven"
			><Button width="100%" height="100%" hoverOpacityMin={0} hoverOpacityMax={20}>
				<GithubLogo width="90%" height="50%" />
			</Button></a
		></Box
	>
	<Box
		transitions={getTransition(3, transitionDelay)}
		figmaImportConfig={containerConfig}
		figmaImport={{
			desktop: { left: isMini ? 367 : 169, top: 113, width: socialBoxWidth, height: 45 }
		}}
		><a
			target="_blank"
			style="width: 100%; height: 100%;"
			href="https://linkedin.com/in/dominic-zlat"
			><Button width="100%" height="100%" hoverOpacityMin={0} hoverOpacityMax={20}>
				<LinkedLogo width="90%" height="50%" />
			</Button></a
		></Box
	>
	<Box
		transitions={getTransition(2, transitionDelay)}
		figmaImportConfig={containerConfig}
		figmaImport={{
			desktop: { left: isMini ? 195 : 93, top: 113, width: socialBoxWidth, height: 45 }
		}}
		><Button
			onClick={() => {
				showClipboardLabel = true;
				setTimeout(() => {
					showClipboardLabel = false;
				}, 2000);
				navigator.clipboard.writeText('undefined.halt499@passinbox.com');
			}}
			width="100%"
			height="100%"
			hoverOpacityMin={0}
			hoverOpacityMax={20}
		>
			<EmailDeco width="50%" height="50%" />
		</Button></Box
	>
	{#if showClipboardLabel}
		<Label
			transitions={getTransition(1, 20, 'x')}
			left="2%"
			top="29%"
			text="Copied to clipboard"
			backgroundColor="{$globalStyle.successColor}20"
			color={$globalStyle.successColor}
			width="30%"
			desktopFont={$globalStyle.verySmallDesktopFont}
		></Label>
	{/if}
	<Label
		transitions={getTransition(5)}
		style="letter-spacing: 0.2vh"
		desktopFont={$globalStyle.largeDesktopFont}
		figmaImportConfig={containerConfig}
		figmaImport={{ desktop: { left: 14, top: 28 } }}
		text="undefined1raven.dev"
	></Label>
	<Label
		transitions={getTransition(6, undefined, 'x')}
		fontType="soft"
		desktopFont={$globalStyle.mediumDesktopFont}
		figmaImportConfig={containerConfig}
		figmaImport={{ desktop: { left: 14, top: 225 } }}
		text="undefined1raven.dev"
	></Label>
	<Label
		transitions={getTransition(6)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.mediumDesktopFont}
		figmaImportConfig={containerConfig}
		figmaImport={{ desktop: { left: 14, top: 73 } }}
		text="Dominic Zlat"
	></Label>

	<Label
		transitions={getTransition(3)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: '0',
				top: isMini ? -70 : containerConfig.containerHeight + 9,
				width: isMini ? 220 : 101,
				height: 25
			}
		}}
		style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
		align="left"
		alignPadding="1%"
		text="Commit Hash:"
	></Label>
	<Label
		transitions={getTransition(3)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: isMini ? 250 : 115,
				top: isMini ? -70 : containerConfig.containerHeight + 9,
				width: isMini ? 220 : 101,
				height: 25
			}
		}}
		align="left"
		alignPadding="1%"
		style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
		text="NNFDE"
	></Label>
	<Label
		transitions={getTransition(4)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: '0',
				top: isMini ? -38 : containerConfig.containerHeight + 43,
				width: isMini ? 220 : 101,
				height: 25
			}
		}}
		style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
		align="left"
		alignPadding="1%"
		text="Last Update:"
	></Label>
	<Label
		transitions={getTransition(4)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: isMini ? 250 : 115,
				top: isMini ? -38 : containerConfig.containerHeight + 43,
				width: isMini ? 220 : 101,
				height: 25
			}
		}}
		align="left"
		alignPadding="1%"
		style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
		text="4 Mar 2024"
	></Label>
</Box>

<style>
	:global(.noScrollBar::-webkit-scrollbar) {
		display: none;
	}
</style>
