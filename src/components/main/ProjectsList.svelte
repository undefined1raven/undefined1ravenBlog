<script lang="ts">
	import { projects } from '../../config/projects';
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Label from '../common/Label.svelte';
	import List from '../common/List.svelte';
	import BioDeco from '../deco/BioDeco.svelte';
	import ProjectListItem from './ProjectListItem.svelte';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: isMini = $screenSize.width < desktopBreakpoints.first;
	$: containerConfig = {
		containerHeight: isMini ? 375 : 586,
		containerWidth: isMini ? 1500 : 499
	};
</script>

<List
	className="projectList"
	horizontalCenter={isMini}
	style="padding-left: 0.3%;"
	figmaImport={{
		desktop: {
			top: isMini ? 700 : 251,
			left: isMini ? '50%' : 1081,
			width: containerConfig.containerWidth,
			height: containerConfig.containerHeight
		}
	}}
>
	{#each projects as project, ix}
		<ProjectListItem {project} {ix}></ProjectListItem>
	{/each}
</List>

<style>
	:global(.projectList) {
		direction: rtl;
	}
	:global(.projectList::-webkit-scrollbar) {
		display: block !important;
		width: 2px;
		height: var(--scrollBarHeight);
		border-radius: 15px;
	}

	:global(.projectList::-webkit-scrollbar-track) {
		background-color: #2200ff00;
	}

	:global(.projectList::-webkit-scrollbar-thumb) {
		background-color: #252331;
		border-radius: 15px;
	}
</style>
