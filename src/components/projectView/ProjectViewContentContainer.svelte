<script>
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import { selectedProject } from '../../stores/selectedProject.ts';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Menu from '../common/Desktop/Menu.svelte';
	import Label from '../common/Label.svelte';
	import TopDecoBar from '../common/TopDecoBar.svelte';
	import ProjectViewDeco from '../deco/ProjectViewDeco.svelte';
	import DocsDeco from '../deco/DocsDeco.svelte';
	import { fly } from 'svelte/transition';
	import List from '../common/List.svelte';
	import Button from '../common/Button.svelte';
	import ListItem from '../common/ListItem.svelte';
	import VerticalLine from '../common/VerticalLine.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import { selectedChapter } from './selectedChapter';
	let topContainerConfig = {};
	let componentsContainer = { containerHeight: 679, containerWidth: 898 };

	export { topContainerConfig };
</script>

<Box
	figmaImport={{
		desktop: {
			width: componentsContainer.containerWidth,
			height: componentsContainer.containerHeight,
			left: 407,
			top: 153
		}
	}}
	figmaImportConfig={topContainerConfig}
>
	<Label
		text={$selectedChapter.title}
		desktopFont={$globalStyle.mediumDesktopFont}
		figmaImportConfig={topContainerConfig}
		figmaImport={{ desktop: { top: '0', left: '0', width: 'auto', height: 46 } }}
		style="padding-right: 10%; padding-left: 1%; transition: all linear 0.1s;"
		backgroundColor="{$globalStyle.activeColor}10"
		borderRadius={$globalStyle.borderRadius}
	></Label>
	<Box
		figmaImportConfig={componentsContainer}
		figmaImport={{ desktop: { top: 63, left: '0', width: '100%', height: 616 } }}
		><svelte:component this={$selectedChapter.content}></svelte:component></Box
	>
</Box>
