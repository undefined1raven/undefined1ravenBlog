<script lang="ts">
	import { appColors } from '../../../config/appColors';
	import type { Project } from '../../../config/projects';
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import { menu, type MenuButton } from '../../../stores/menu';
	import screenSize from '../../../stores/screenSize';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import ProjectListItemFlag from '../ProjectListItemFlag.svelte';
	import ProjectListItemFlagMobile from './ProjectListItemFlagMobile.svelte';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: containerConfig = {
		containerHeight: 586,
		containerWidth: 499
	};
	$: isMini = $screenSize.width < desktopBreakpoints.first;

	const listItemContainerConfig: ContainerConfig = { containerWidth: 499, containerHeight: 102 };
	let project: Project;
	let ix: number;

	$: itemHeight = isMini ? 350 : 172;
	const colors = appColors[project.colorID];
	export { containerConfig, project, ix };

	function onProjectSelection(project) {
		selectedProject.set(project);
		setTimeout(() => {
			window.location.hash = 'projectView';
		}, 30);
	}
</script>

<ListItem
	style="min-height: {(itemHeight * 100) / $screenSize.height}%; "
	transitions={getTransition(ix + 2)}
	marginBottom="2.5%"
	figmaImportConfig={containerConfig}
	figmaImport={{
		desktop: {
			left: '0',
			width: '99%',
			height: itemHeight
		}
	}}
	><Label
		figmaImportConfig={listItemContainerConfig}
		desktopFont={$globalStyle.mediumDesktopFont}
		figmaImport={{ desktop: { top: 11, left: 15 } }}
		color={colors.activeMono}
		text={project.title}
		verticalFont={$globalStyle.mediumMobileFont}
	></Label>
	<Label
		style="overflow: hidden;"
		color={colors.activeMono}
		className="noScrollBar"
		figmaImportConfig={listItemContainerConfig}
		desktopFont={$globalStyle.smallDesktopFont}
		figmaImport={{ desktop: { top: 47, left: 15, width: '80%' } }}
		text={project.shortDescription}
		verticalFont={$globalStyle.mediumMobileFont}
		align="left"
	></Label><Button
		onClick={() => {
			onProjectSelection(project);
		}}
		style="box-shadow: 0px 0px 4px {colors.activeColor};"
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { width: '100%', height: '100%', left: '0' } }}
		hoverOpacityMax={10}
		hoverOpacityMin={5}
		borderColor={colors.activeColor}
		backgroundColor={colors.activeColor}
	></Button>
	<List
		style="overflow: hidden; right: 2%;"
		direction="row"
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { top: '-25%', left: 433, height: 102, width: 266 } }}
		>{#each project.flags as flag}
			<ProjectListItemFlagMobile {project} flagID={flag}></ProjectListItemFlagMobile>
		{/each}</List
	>
</ListItem>
