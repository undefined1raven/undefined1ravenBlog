<script lang="ts">
	import { appColors } from '../../../config/appColors';
	import type { Flag, Project } from '../../../config/projects';
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import LinkDeco from '../../deco/LinkDeco.svelte';
	import { flagConfig } from '../flagsConfig';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: containerConfig = {
		containerHeight: 79,
		containerWidth: 350
	};

	let flagID: Flag;
	let project: Project;
	let ix: number;
	export { containerConfig, flagID, ix, project };
</script>

<ListItem
	style="margin-left: 1%; margin-right: 1%; min-height: 47.406143345%; max-width: 24.406143345%;"
	transitions={getTransition(ix + 2)}
	figmaImportConfig={containerConfig}
	figmaImport={{
		mobile: { width: '24.406143345%', height: 80 }
	}}
>
	{#if flagID === 'dev'}
		<Label
			borderRadius="3px"
			width="100%"
			height="100%"
			text="🏗️"
			color={flagConfig.dev.activeMono}
			verticalFont={'12px'}
			backgroundColor="{flagConfig.dev.activeColor}10"
			borderColor="{flagConfig.dev.activeColor}00"
		></Label>
	{/if}
	{#if flagID === 'v1'}
		<Label
			desktopFont={'12px'}
			borderRadius="3px"
			width="100%"
			verticalFont={'12px'}
			height="100%"
			text="v1.0"
			color={flagConfig.v1.activeMono}
			backgroundColor="{flagConfig.v1.activeColor}10"
			borderColor="{flagConfig.v1.activeColor}00"
		></Label>
	{/if}
	{#if flagID === 'dep'}
		<Label
			desktopFont={'14px'}
			width="100%"
			verticalFont={'12px'}
			borderRadius="3px"
			height="100%"
			text="🚧 dep"
			color={flagConfig.dep.activeMono}
			backgroundColor="{flagConfig.dep.activeColor}10"
			borderColor="{flagConfig.dep.activeColor}00"
		></Label>
	{/if}
	{#if flagID === 'src'}
		<Label
			desktopFont={'14px'}
			borderRadius="3px"
			width="90%"
			height="100%"
			text="src"
			color={flagConfig.src.activeMono}
			backgroundColor="{flagConfig.src.activeColor}10"
			verticalFont={'12px'}
		></Label>
	{/if}
	{#if flagID === 'live'}
		<Label
			desktopFont={'14px'}
			borderRadius="3px"
			width="90%"
			height="100%"
			verticalFont={'12px'}
			text="live"
			color={flagConfig.live.activeMono}
			backgroundColor="{flagConfig.live.activeColor}10"
		></Label>
	{/if}
</ListItem>
