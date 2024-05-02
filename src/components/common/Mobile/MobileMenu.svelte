<script>
	import { fly } from 'svelte/transition';
	import globalStyle from '../../../stores/globalStyles';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import Box from '../Box.svelte';
	import List from '../List.svelte';
	import ListItem from '../ListItem.svelte';
	import HorizontalLine from '../HorizontalLine.svelte';
	import Button from '../Button.svelte';
	import Label from '../Label.svelte';
	import { hasLoaded } from '../../../stores/hasLoaded';
	import { mobileIsMenuUp } from '../../../stores/menu';
	import { getTransition } from '../../../fn/getTransisitions';
	import { menu } from '../../../stores/menu';
	import { contactButton, mainButton, projectViewBackButton } from '../../../config/menuButtons';
	import windowHash from '../../../stores/windowHash';

	const hashToMenuArray = {
		'#main': [mainButton, contactButton],
		'#contact': [mainButton, contactButton],
		'#projectView': [mainButton, contactButton]
	};

	const containerConfig = { containerWidth: 359, containerHeight: 612 };

	windowHash.subscribe((wh) => {
		if (hashToMenuArray[wh]) {
			menu.set(hashToMenuArray[wh]);
		}
	});
</script>

<Box
	borderRadius="0px"
	style="z-index: 37;"
	transitions={{ in: { func: fly, options: { y: '5%', delay: $hasLoaded ? 1 : 250 } } }}
	figmaImport={{
		mobile: {
			top: 580,
			left: 4,
			width: 350,
			height: 53
		}
	}}
>
	<DropdownDeco
		left="3%"
		style="transform: rotate({$mobileIsMenuUp
			? '-90deg'
			: '90deg'}); transition: all ease-in-out 0.1s;"
		height="50%"
	></DropdownDeco>
	<Label left="18%" text={$mobileIsMenuUp ? 'Hide Contents Menu' : 'Contents Menu'}></Label>
	<Button
		onClick={() => {
			mobileIsMenuUp.update((prev) => {
				return !prev;
			});
		}}
		width="99.5%"
		height="100%"
		hoverOpacityMin={10}
		hoverOpacityMax={20}
	></Button>
</Box>
{#if $mobileIsMenuUp}
	<Box
		on:onClick={(ee) => {
			const e = ee.detail;
			if (e.target.id.split('menuButton').length === 1) {
				mobileIsMenuUp.set(false);
			}
		}}
		transitions={{ in: { func: fly, options: { y: '2%', duration: 100 } } }}
		style="z-index: 35;"
		horizontalCenter={true}
		figmaImport={{ mobile: { top: 28, left: '50%', width: 359, height: 612 } }}
		backgroundColor="#05001199"
		backdropFilter="blur(5px)"
	>
		<List top="0%" width="100%" height="80%">
			{#each $menu as menuItem, ix}
				<ListItem MarginBottom="3%" left="0%" width="100%" height="13%">
					<HorizontalLine left="0%" width="12%" color={$globalStyle.activeColor}></HorizontalLine>
					<Button
						id="menuButton_{ix}"
						onClick={() => {
							if (menuItem.navHash !== undefined) {
								window.location.hash = menuItem.navHash;
							} else {
								window.location.hash = menuItem.hash;
							}
							mobileIsMenuUp.set(false);
						}}
						left="12%"
						width="76%"
						hoverOpacityMin={10}
						hoverOpacityMax={20}
						height="80%"
						label={menuItem.title}
						align="left"
						alignPadding="4%"
					></Button>
				</ListItem>
			{/each}
		</List>
		<Label
			transitions={getTransition(1)}
			color={$globalStyle.secondaryMono}
			desktopFont={$globalStyle.tinyDesktopFont}
			verticalFont={$globalStyle.smallMobileFont}
			figmaImportConfig={containerConfig}
			backgroundColor="{$globalStyle.activeColor}10"
			figmaImport={{
				mobile: {
					left: 10,
					top: 472,
					width: 95,
					height: 25
				}
			}}
			style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
			align="left"
			alignPadding="1%"
			text="Commit Hash:"
		></Label>
		<Label
			transitions={getTransition(1)}
			color={$globalStyle.secondaryMono}
			desktopFont={$globalStyle.tinyDesktopFont}
			verticalFont={$globalStyle.smallMobileFont}
			figmaImportConfig={containerConfig}
			backgroundColor="{$globalStyle.activeColor}10"
			figmaImport={{
				mobile: {
					left: 118,
					top: 472,
					width: 224,
					height: 25
				}
			}}
			align="left"
			alignPadding="1%"
			style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
			text="NNFDE"
		></Label>
		<Label
			transitions={getTransition(2)}
			color={$globalStyle.secondaryMono}
			desktopFont={$globalStyle.tinyDesktopFont}
			verticalFont={$globalStyle.smallMobileFont}
			figmaImportConfig={containerConfig}
			backgroundColor="{$globalStyle.activeColor}10"
			figmaImport={{
				mobile: {
					left: 10,
					top: 506,
					width: 95,
					height: 25
				}
			}}
			style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
			align="left"
			alignPadding="1%"
			text="Last Update:"
		></Label>
		<Label
			transitions={getTransition(2)}
			color={$globalStyle.secondaryMono}
			desktopFont={$globalStyle.tinyDesktopFont}
			verticalFont={$globalStyle.smallMobileFont}
			figmaImportConfig={containerConfig}
			backgroundColor="{$globalStyle.activeColor}10"
			figmaImport={{
				mobile: {
					left: 118,
					top: 506,
					width: 224,
					height: 25
				}
			}}
			align="left"
			alignPadding="1%"
			style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
			text="4 Mar 2024"
		></Label>
	</Box>
{/if}
