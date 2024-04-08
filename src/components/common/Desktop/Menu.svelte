<script lang="ts">
	import globalStyle from '../../../stores/globalStyles';
	import { menu, type MenuButton } from '../../../stores/menu';
	import Box from '../Box.svelte';
	import Button from '../Button.svelte';
	import List from '../List.svelte';
	import { getTransition } from '../../../fn/getTransisitions';
	import ListItem from '../ListItem.svelte';
	import Label from '../Label.svelte';
	import screenSize from '../../../stores/screenSize';
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import isMobile from '../../../fn/isMobile';
	import windowHash from '../../../stores/windowHash';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import VerticalLine from '../VerticalLine.svelte';
	import {
		contactButton,
		mainButton,
		projectViewBackButton,
		techTreeButton
	} from '../../../config/menuButtons';
	let top = 144;
	let left = 339;
	let height = 45;
	let width = 852;
	$: isMini = $screenSize.width < desktopBreakpoints.first;

	const hashToMenuArray = {
		'#main': [mainButton, techTreeButton, contactButton],
		'#contact': [mainButton, techTreeButton, contactButton],
		'#projectView': [projectViewBackButton, mainButton, techTreeButton, contactButton]
	};

	function onHashChange(windowHash) {
		if (hashToMenuArray[windowHash]) {
			menu.set(hashToMenuArray[windowHash]);
		}
	}

	$: onHashChange($windowHash);

	function getButtonWidth(menuButton: MenuButton, isMini) {
		if (menuButton.type === 'classic') {
			return isMini ? 300 : 158;
		} else {
			return isMini ? 350 : 228;
		}
	}

	function onButtonInteraction(button: MenuButton) {
		if (button.navHash) {
			window.location.hash = button.navHash;
		} else {
			window.location.hash = button.hash;
		}
	}

	export { top, left, width, height };
</script>

<svelte:window
	on:keyup={(e) => {
		const key = e.key.toUpperCase();
		let selectedButton = $menu.find((elm) => elm.hotkey.toUpperCase() === key);
		let backMenuButton = $menu.find((elm) => elm.type === 'back');
		if (key === 'ESCAPE' && backMenuButton) {
			selectedButton = backMenuButton;
		}
		if (selectedButton) {
			onButtonInteraction(selectedButton);
		}
	}}
/>
<List
	style="transition: all ease-out 0.15s;"
	direction="row"
	figmaImport={{ desktop: { top, left, height, width } }}
>
	{#each $menu as menuButton, ix}
		<ListItem
			transitions={getTransition(ix + 4)}
			style="margin-right: 2%;"
			height="100%"
			figmaImportConfig={{ containerHeight: height, containerWidth: width }}
			figmaImport={{ desktop: { height: 'auto', width: getButtonWidth(menuButton, isMini) } }}
		>
			{#if menuButton.type === 'classic'}
				<Label
					transitions={getTransition(ix * 1.2 + 10)}
					backgroundColor="{$globalStyle.secondaryColor}20"
					top="0%"
					width="2vh"
					color={$globalStyle.secondaryColor}
					height="2vh"
					left="0%"
					style="border-bottom-left-radius: 0; border-top-right-radius: 0;"
					desktopFont={$globalStyle.verySmallDesktopFont}
					text={menuButton.hotkey}
				></Label>
				<Button
					style="border-top: none; border-bottom: none;"
					label={menuButton.title}
					desktopFont={$globalStyle.mediumDesktopFont}
					width="100%"
					onClick={() => {
						window.location.hash = menuButton.hash;
					}}
					height="100%"
					isSelected={$windowHash === menuButton.hash}
				></Button>
			{/if}
			{#if menuButton.type === 'back'}
				<Label
					transitions={getTransition(ix * 1.2 + 10)}
					backgroundColor="{$globalStyle.secondaryColor}20"
					top="0%"
					width="4vh"
					color={$globalStyle.secondaryColor}
					height="2vh"
					left="auto"
					style="right: 0%; border-top-left-radius: 0; border-top-right-radius: 0;"
					desktopFont={$globalStyle.verySmallDesktopFont}
					text={'ESC'}
				></Label>
				<Button
					style="border-top: none; border-bottom: none;"
					label={menuButton.title}
					desktopFont={$globalStyle.mediumDesktopFont}
					width="100%"
					onClick={() => {
						onButtonInteraction(menuButton);
					}}
					height="100%"
					isSelected={$windowHash === menuButton.hash}
				></Button>
				<DropdownDeco height="70%" left="1%"></DropdownDeco>
			{/if}
		</ListItem>
	{/each}
</List>
