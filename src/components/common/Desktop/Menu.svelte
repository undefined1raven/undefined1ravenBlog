<script lang="ts">
	import globalStyle from '../../../stores/globalStyles';
	import { menu } from '../../../stores/menu';
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
	let top = 144;
	let left = 339;
	let height = 45;
	let width = 852;
	$: isMini = $screenSize.width < desktopBreakpoints.first;
	export { top, left, width, height };
</script>

<svelte:window
	on:keyup={(e) => {
		let selectedButton = $menu.find((elm) => elm.hotkey.toUpperCase() === e.key.toUpperCase());
		if (selectedButton) {
			window.location.hash = selectedButton.hash;
		}
	}}
/>
<List direction="row" figmaImport={{ desktop: { top, left, height, width } }}>
	{#each $menu as menuButton, ix}
		<ListItem
			transitions={getTransition(ix + 4)}
			style="margin-right: 2%;"
			height="100%"
			figmaImportConfig={{ containerHeight: height, containerWidth: width }}
			figmaImport={{ desktop: { height: 'auto', width: isMini ? 300 : 158 } }}
		>
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
			></Button></ListItem
		>
	{/each}
</List>
