<script lang="ts">
	import { appColors } from '../../config/appColors';
	import type { Flag, Project } from '../../config/projects';
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Button from '../common/Button.svelte';
	import Label from '../common/Label.svelte';
	import ListItem from '../common/ListItem.svelte';
	import LinkDeco from '../deco/LinkDeco.svelte';
	import { flagConfig } from './flagsConfig';
	type ContainerConfig = { containerHeight: number | string; containerWidth: number | string };
	$: containerConfig = {
		containerHeight: 102,
		containerWidth: 499
	};

	const flagListContainerConfig: ContainerConfig = { containerWidth: 66, containerHeight: 102 };
	let flagID: Flag;
	let project: Project;
	let ix: number;
	export { containerConfig, flagID, ix, project };
</script>

<ListItem
	style="min-height: 17.406143345%;"
	transitions={getTransition(ix + 2)}
	marginBottom="5.5%"
	figmaImportConfig={containerConfig}
	figmaImport={{
		desktop: {
			left: '0',
			width: '95%',
			height: 20
		}
	}}
>
	{#if flagID === 'dev'}
		<Button
			desktopFont={'14px'}
			borderRadius="2px"
			width="100%"
			height="100%"
			label="🏗️ dev"
			color={flagConfig.dev.activeMono}
			backgroundColor={flagConfig.dev.activeColor}
			borderColor="{flagConfig.dev.activeColor}00"
			hoverOpacityMin={30}
			hoverOpacityMax={30}
		></Button>
	{/if}
	{#if flagID === 'v1'}
		<Button
			desktopFont={'12px'}
			borderRadius="2px"
			width="100%"
			height="100%"
			label="v1.0"
			color={flagConfig.v1.activeMono}
			backgroundColor={flagConfig.v1.activeColor}
			borderColor="{flagConfig.v1.activeColor}00"
			hoverOpacityMin={30}
			hoverOpacityMax={30}
		></Button>
	{/if}
	{#if flagID === 'dep'}
		<Button
			desktopFont={'14px'}
			borderRadius="2px"
			width="100%"
			height="100%"
			label="🚧 dep"
			color={flagConfig.dep.activeMono}
			backgroundColor={flagConfig.dep.activeColor}
			borderColor="{flagConfig.dep.activeColor}00"
			hoverOpacityMin={30}
			hoverOpacityMax={30}
		></Button>
	{/if}
	{#if flagID === 'src'}
		<a
			target="_blank"
			href={project.srcHref}
			style="position: absolute; width: 100%; height: 100%; padding: 0; margin: 0; left: 2%; top: 0;"
		>
			<Button
				desktopFont={'14px'}
				borderRadius="2px"
				width="90%"
				height="100%"
				label="src"
				color={flagConfig.src.activeMono}
				backgroundColor={flagConfig.src.activeColor}
				borderColor={flagConfig.src.activeColor}
				hoverOpacityMin={10}
				align="left"
				alignPadding="10%"
				hoverOpacityMax={30}
				><LinkDeco
					width="25%"
					height="90%"
					color={flagConfig.src.activeColor}
					style="right: 3%;"
					top="20%"
				></LinkDeco></Button
			>
		</a>
	{/if}
	{#if flagID === 'live'}
		<a
			target="_blank"
			href={project.deploymentHref}
			style="position: absolute; width: 100%; height: 100%; padding: 0; margin: 0; left: 2%; top: 0;"
		>
			<Button
				desktopFont={'14px'}
				borderRadius="2px"
				width="90%"
				height="100%"
				label="live"
				color={flagConfig.live.activeMono}
				backgroundColor={flagConfig.live.activeColor}
				borderColor={flagConfig.live.activeColor}
				hoverOpacityMin={10}
				hoverOpacityMax={30}
				align="left"
				alignPadding="10%"
				><LinkDeco
					width="25%"
					height="90%"
					color={flagConfig.live.activeColor}
					style="right: 3%;"
					top="20%"
				></LinkDeco></Button
			>
		</a>
	{/if}
</ListItem>
