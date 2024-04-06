<script lang="ts">
	import { appColors } from '../../config/appColors';
	import type { Project } from '../../config/projects';
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import { menu, type MenuButton } from '../../stores/menu';
	import screenSize from '../../stores/screenSize';
	import { selectedProject } from '../../stores/selectedProject';
	import Box from '../common/Box.svelte';
	import Button from '../common/Button.svelte';
	import Label from '../common/Label.svelte';
	import List from '../common/List.svelte';
	import ListItem from '../common/ListItem.svelte';
	import ProjectListItemFlag from './ProjectListItemFlag.svelte';
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
		menu.update((pm) => {
			let projectViewBackButton: MenuButton = {
				title: 'Project View',
				type: 'back',
				hash: '#main',
				hotkey: 'escape',
				id: 'projectView',
				func: null
			};
			let newMenu = [projectViewBackButton];
			for (let ix = 0; ix < pm.length; ix++) {
				newMenu.push(pm[ix]);
			}
			return newMenu;
		});
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
	></Label>
	<Label
		style="overflow: hidden;"
		color={colors.activeMono}
		className="noScrollBar"
		figmaImportConfig={listItemContainerConfig}
		desktopFont={$globalStyle.smallDesktopFont}
		figmaImport={{ desktop: { top: 47, left: 15, width: '80%' } }}
		text={project.shortDescription}
		align="left"
	></Label><Button
		onClick={() => {
			onProjectSelection(project);
		}}
		style="box-shadow: 0px 0px 4px {colors.activeColor};"
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { width: 422, height: '100%', left: '0' } }}
		hoverOpacityMax={10}
		hoverOpacityMin={5}
		borderColor={colors.activeColor}
		backgroundColor={colors.activeColor}
	></Button>
	<List
		style="overflow: hidden;"
		figmaImportConfig={listItemContainerConfig}
		figmaImport={{ desktop: { top: '0', left: 433, height: 102, width: 66 } }}
		>{#each project.flags as flag}
			<ProjectListItemFlag {project} flagID={flag}></ProjectListItemFlag>
		{/each}</List
	>
</ListItem>
