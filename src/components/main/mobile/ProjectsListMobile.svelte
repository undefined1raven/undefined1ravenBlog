<script lang="ts">
	import { projects } from '../../../config/projects';
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import Box from '../../common/Box.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import BioDeco from '../../deco/BioDeco.svelte';
	import ProjectListItem from '../ProjectListItem.svelte';
	import ProjectListItemMobile from './ProjectListItemMobile.svelte';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: isMini = $screenSize.width < desktopBreakpoints.first;
	$: containerConfig = {
		containerHeight: 311,
		containerWidth: 350
	};
</script>

<List
	className="projectList"
	horizontalCenter={isMini}
	figmaImport={{
		mobile: {
			top: 114,
			left: '50%',
			width: containerConfig.containerWidth,
			height: containerConfig.containerHeight
		}
	}}
>
	{#each projects as project, ix}
		<ProjectListItemMobile {project} {ix}></ProjectListItemMobile>
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
