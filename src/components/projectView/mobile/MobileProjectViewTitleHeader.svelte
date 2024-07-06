<script>
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Menu from '../../common/Desktop/Menu.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import TopDecoBar from '../../common/TopDecoBar.svelte';
	import ClsoeDeco from '../../deco/ClsoeDeco.svelte';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import OptionsDeco from '../../deco/OptionsDeco.svelte';
	import ProjectViewDeco from '../../deco/ProjectViewDeco.svelte';
	import { flagConfig } from '../../main/flagsConfig';
	import ProjectViewTitleHeader from '../ProjectViewTitleHeader.svelte';
	import { onMount } from 'svelte';

	let containerConfig = {
		containerHeight: 542,
		containerWidth: 350
	};

	const flagIDToLabel = {
		live: 'Live',
		src: 'View src',
		v1: 'v1.0',
		dev: '🏗️ active dev',
		dep: '🚧 depecrated',
		docs: 'Docs'
	};
	let isShowingOptionsMenu = false;
	let contextMenuBlur = 0;
	let blurChangeInterval;
	const headerElementsContainerConfig = { containerHeight: 38, containerWidth: 350 };
	export { containerConfig };
</script>

<svelte:body
	on:click={(e) => {
		try {
			const classNamesArray = e.target.className.split(' ');
			const matchedClassName = classNamesArray.find((elm) => elm === 'contextMenu');
			console.log(classNamesArray);
			if (matchedClassName === undefined) {
				isShowingOptionsMenu = false;
			}
		} catch (e) {}
	}}
/>
<Box
	style="z-index: 10;"
	figmaImportConfig={containerConfig}
	figmaImport={{
		mobile: {
			width: '100%',
			height: 38,
			left: '50%',
			top: '0'
		}
	}}
	horizontalCenter={true}
>
	<Button
		onClick={() => {
			window.location.hash = '#main';
		}}
		hoverOpacityMin={0}
		hoverOpacityMax={20}
		transitions={getTransition(1, 0, 'x')}
		style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
		figmaImportConfig={headerElementsContainerConfig}
		figmaImport={{ mobile: { left: '0', width: 64, height: 38, top: '0' } }}
		><DropdownDeco width="80%" height="80%"></DropdownDeco></Button
	>
	<Label
		text={$selectedProject.title}
		style="border-top-left-radius: 0; border-bottom-left-radius: 0; border-left: solid 1px {$globalStyle.activeColor};"
		backgroundColor="{$globalStyle.activeColor}20"
		align="left"
		animateText={true}
		alignPadding="15px"
		figmaImportConfig={headerElementsContainerConfig}
		figmaImport={{ mobile: { left: 69, width: 266, height: '100%', top: '0' } }}
	></Label>
	<Button
		className="contextMenu"
		onClick={() => {
			isShowingOptionsMenu = !isShowingOptionsMenu;
			if (isShowingOptionsMenu) {
				blurChangeInterval = setInterval(() => {
					if (contextMenuBlur < 15) contextMenuBlur++;
					if (contextMenuBlur === 15) clearInterval(blurChangeInterval);
				}, 15);
			} else {
				contextMenuBlur = 0;
			}
		}}
		figmaImportConfig={headerElementsContainerConfig}
		hoverOpacityMax={0}
		hoverOpacityMin={0}
		style="border: none; border-left: solid 1px {$globalStyle.activeColor};"
		borderRadius="0px"
		figmaImport={{ mobile: { left: 312, width: 38, height: 38, top: '0' } }}
	>
		{#if !isShowingOptionsMenu}
			<Box className="contextMenu" transitions={getTransition(1)} width="80%" height="80%">
				<OptionsDeco width="80%" height="50%"></OptionsDeco>
			</Box>
		{:else}
			<Box className="contextMenu" transitions={getTransition(1)} width="80%" height="80%">
				<ClsoeDeco width="80%" height="50%"></ClsoeDeco>
			</Box>
		{/if}</Button
	>
	{#if isShowingOptionsMenu}
		<List
			style="z-index: 15; backdrop-filter: blur({contextMenuBlur}px);"
			figmaImportConfig={headerElementsContainerConfig}
			figmaImport={{ mobile: { left: 232, height: 440, top: 44, width: 118 } }}
		>
			{#each $selectedProject.flags as flag, ix}
				<ListItem
					style="z-index: 20; backdrop-filter: blur(0px);"
					transitions={getTransition(ix + 1)}
					width="99%"
					height="7%"
					marginBottom="4%"
				>
					<Button
						className="contextMenu"
						label={flagIDToLabel[flag]}
						align="left"
						alignPadding="4%"
						width="96%"
						hoverOpacityMin={flagConfig[flag].type === 'button' ? 0 : 40}
						hoverOpacityMax={flagConfig[flag].type === 'button' ? 10 : 40}
						borderColor="{flagConfig[flag]?.activeColor}{flagConfig[flag].type === 'button'
							? 'FF'
							: 0}"
						color={flagConfig[flag]?.activeMono}
						height="100%"
						onClick={() => {}}
						backdropFilter="blur(20px);"
					></Button>
				</ListItem>
			{/each}
		</List>
	{/if}
</Box>
