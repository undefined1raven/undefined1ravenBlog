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
	let topContainerConfig = {};
	let componentsContainer = { containerHeight: 679, containerWidth: 339 };

	export { topContainerConfig };
</script>

<VerticalLine
	figmaImportConfig={topContainerConfig}
	color={$globalStyle.activeColor}
	figmaImport={{ desktop: { top: 153, left: 383, height: 679, width: 1 } }}
></VerticalLine>
<Box
	figmaImport={{
		desktop: {
			width: componentsContainer.containerWidth,
			height: componentsContainer.containerHeight,
			left: 22,
			top: 153
		}
	}}
	figmaImportConfig={topContainerConfig}
>
	<Label
		transitions={getTransition(1)}
		top="0%"
		left="0%"
		text="Jump to"
		desktopFont={$globalStyle.mediumDesktopFont}
		width="100%"
		align="left"
	></Label>

	<List
		figmaImportConfig={componentsContainer}
		figmaImport={{ desktop: { top: 35, left: '0', width: '99%', height: 632 } }}
	>
		{#each $selectedProject.chapters as chapter, ix}
			<ListItem transitions={getTransition(ix, undefined, 'x')} width="100%" height="8%"
				><Button
					hoverOpacityMin={10}
					hoverOpacityMax={20}
					align="left"
					alignPadding="3%"
					height="100%"
					style="border-top: none; border-bottom: none;"
					width="96%"
					desktopFont={$globalStyle.mediumDesktopFont}
					label={chapter.title}
				></Button></ListItem
			>
		{/each}
	</List>
</Box>
