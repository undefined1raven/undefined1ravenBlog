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
	const headerElementsContainerConfig = { containerHeight: 38, containerWidth: 350 };
	export { containerConfig };
</script>

<Box
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
		onClick={() => {
			isShowingOptionsMenu = !isShowingOptionsMenu;
		}}
		figmaImportConfig={headerElementsContainerConfig}
		hoverOpacityMax={0}
		hoverOpacityMin={0}
		style="border: none; border-left: solid 1px {$globalStyle.activeColor};"
		borderRadius="0px"
		figmaImport={{ mobile: { left: 312, width: 38, height: 38, top: '0' } }}
	>
		{#if !isShowingOptionsMenu}
			<Box transitions={getTransition(1)} width="80%" height="80%">
				<OptionsDeco width="80%" height="50%"></OptionsDeco>
			</Box>
		{:else}
			<Box transitions={getTransition(1)} width="80%" height="80%">
				<ClsoeDeco width="80%" height="50%"></ClsoeDeco>
			</Box>
		{/if}</Button
	>
	{#if isShowingOptionsMenu}
		<List
			figmaImportConfig={headerElementsContainerConfig}
			figmaImport={{ mobile: { left: 232, height: 218, top: 44, width: 118 } }}
		>
			{#each $selectedProject.flags as flag, ix}
				<ListItem transitions={getTransition(ix + 1)} width="100%" height="15%" marginBottom="4%">
					<Button
						backdropFilter="blur(50px)"
						label={flagIDToLabel[flag]}
						align="left"
						alignPadding="4%"
						width="96%"
						hoverOpacityMin={10}
						hoverOpacityMax={20}
						backgroundColor={flagConfig[flag]?.activeColor}
						borderColor={flagConfig[flag]?.activeColor}
						color={flagConfig[flag]?.activeMono}
						height="100%"
					></Button>
				</ListItem>
			{/each}
		</List>
	{/if}
</Box>
