<script lang="ts">
	import { appColors } from '../../../config/appColors';
	import type { Project } from '../../../config/projects';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import ProjectListItemFlagMobile from './ProjectListItemFlagMobile.svelte';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: containerConfig = {
		containerHeight: 311,
		containerWidth: 350
	};

	const listItemContainerConfig: ContainerConfig = { containerWidth: 350, containerHeight: 400 };
	let project: Project;
	let ix: number;

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
	style="min-height: 25%;"
	transitions={getTransition(ix + 2)}
	marginBottom="2.5%"
	figmaImportConfig={containerConfig}
	figmaImport={{
		mobile: {
			left: '0',
			width: '99%',
			height: '25%'
		}
	}}
>
	<Label
		figmaImportConfig={listItemContainerConfig}
		desktopFont={$globalStyle.mediumDesktopFont}
		figmaImport={{ desktop: { top: 39, left: 15 } }}
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
		figmaImport={{ desktop: { top: 155, left: 15, width: '80%', height: '60%' } }}
		text={project.shortDescription}
		verticalFont={$globalStyle.mediumMobileFont}
		align="left"
	></Label>
	<List
		style="overflow: hidden; right: 2%;"
		direction="row"
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { top: '9%', left: 433, height: 90, width: 266 } }}
		>{#each project.flags as flag}
			<ProjectListItemFlagMobile {project} flagID={flag}></ProjectListItemFlagMobile>
		{/each}</List
	>
	<Button
		onClick={() => {
			onProjectSelection(project);
		}}
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { width: '100%', height: '100%', left: '0' } }}
		borderColor={colors.activeColor}
		backgroundColor={colors.activeColor}
		hoverOpacityMin={0}
		hoverOpacityMax={0}
	></Button>
</ListItem>
