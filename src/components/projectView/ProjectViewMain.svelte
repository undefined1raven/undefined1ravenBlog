<script>
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Menu from '../common/Desktop/Menu.svelte';
	import Label from '../common/Label.svelte';
	import TopDecoBar from '../common/TopDecoBar.svelte';
	import ProjectViewDeco from '../deco/ProjectViewDeco.svelte';
	import ProjectViewTitleHeader from './ProjectViewTitleHeader.svelte';
	import { selectedProject } from '../../stores/selectedProject.ts';
	import ProjectViewQuickLinks from './ProjectViewQuickLinks.svelte';
	import ProjectViewMenu from './ProjectViewMenu.svelte';
	import ProjectViewContentContainer from './ProjectViewContentContainer.svelte';
	import { onMount } from 'svelte';
	import { selectedChapter } from './selectedChapter';

	$: containerConfig = {
		containerHeight: 859,
		containerWidth: $screenSize.minimized ? 1329 : 1329
	};

	onMount(() => {
		selectedChapter.set($selectedProject.chapters[0]);
	});
</script>

<Box
	figmaImport={{ desktop: { width: 1329, height: 859, left: '50%', top: 127 } }}
	horizontalCenter={true}
	backgroundColor="{$globalStyle.activeColor}07"
>
	<ProjectViewDeco width="60%" height="60%" style="opacity: 0.1;"></ProjectViewDeco>
	<ProjectViewTitleHeader topContainerConfig={containerConfig}></ProjectViewTitleHeader>
	<ProjectViewQuickLinks topContainerConfig={containerConfig}></ProjectViewQuickLinks>
	<ProjectViewMenu topContainerConfig={containerConfig}></ProjectViewMenu>
	<ProjectViewContentContainer topContainerConfig={containerConfig}></ProjectViewContentContainer>
	<Label
		transitions={getTransition(3)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: '0',
				top: $screenSize.minimized ? -70 : containerConfig.containerHeight + 9,
				width: $screenSize.minimized ? 220 : 101,
				height: 25
			}
		}}
		style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
		align="left"
		alignPadding="1%"
		text="Project ID"
	></Label>
	<Label
		transitions={getTransition(3)}
		color={$globalStyle.secondaryMono}
		desktopFont={$globalStyle.tinyDesktopFont}
		figmaImportConfig={containerConfig}
		backgroundColor="{$globalStyle.activeColor}10"
		figmaImport={{
			desktop: {
				left: $screenSize.minimized ? 250 : 120,
				top: $screenSize.minimized ? -70 : containerConfig.containerHeight + 9,
				width: $screenSize.minimized ? 220 : 101,
				height: 25
			}
		}}
		align="left"
		alignPadding="0.5%"
		style="border-top-left-radius: 0; border-bottom-left-radius: 0; padding-right: 5%;"
		text={$selectedProject.projectID}
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
				top: $screenSize.minimized ? -38 : containerConfig.containerHeight + 43,
				width: $screenSize.minimized ? 220 : 101,
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
				left: $screenSize.minimized ? 250 : 120,
				top: $screenSize.minimized ? -38 : containerConfig.containerHeight + 43,
				width: $screenSize.minimized ? 220 : 101,
				height: 25
			}
		}}
		align="left"
		alignPadding="0.5%"
		style="border-top-left-radius: 0; border-bottom-left-radius: 0; padding-right: 5%;"
		text="4 Mar 2024"
	></Label>
</Box>
