<script lang="ts">
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
</script>

<List width="80%" left="0%" height="95%">
	{#each $selectedProject.techStack as stackComponent, ix}
		<ListItem transitions={getTransition(ix, undefined, 'x')} width="99%" height="40%">
			<Box width="100%" height="100%" borderColor={$globalStyle.activeColor}>
				<Label
					top="0%"
					width="97%"
					left="0%"
					height="15%"
					align="left"
					borderRadius={$globalStyle.borderRadius}
					alignPadding="3%"
					desktopFont={$globalStyle.mediumDesktopFont}
					backgroundColor="{$globalStyle.activeColor}20"
					style="border-bottom-right-radius: 0; border-bottom-left-radius: 0;"
					text={stackComponent.title}
					><svelte:component this={stackComponent.deco} style="right: 2%;"
					></svelte:component></Label
				>
			</Box>
		</ListItem>
	{/each}
</List>
