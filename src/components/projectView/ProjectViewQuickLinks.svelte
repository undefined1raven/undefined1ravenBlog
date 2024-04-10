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
	import GithubLogo from '../deco/githubLogo.svelte';
	import { onDestroy, onMount } from 'svelte';
	let topContainerConfig = {};
	let componentsContainer = { containerHeight: 71, containerWidth: 570 };

	const filteredProjectFlags = $selectedProject.flags.filter(
		(elm) => elm === 'docs' || elm === 'src' || elm === 'live'
	);

	let liveDeploymentDotOpacity = 1;
	let liveDeploymentDotInterval;
	onMount(() => {
		liveDeploymentDotOpacity = 0.2;
		liveDeploymentDotInterval = setInterval(() => {
			if (liveDeploymentDotOpacity === 1) {
				liveDeploymentDotOpacity = 0.2;
			} else {
				liveDeploymentDotOpacity = 1;
			}
		}, 700);
	});

	onDestroy(() => {
		if (liveDeploymentDotInterval) {
			clearInterval(liveDeploymentDotInterval);
		}
	});

	export { topContainerConfig };
</script>

<Box
	figmaImport={{
		desktop: {
			width: componentsContainer.containerWidth,
			height: componentsContainer.containerHeight,
			left: 742,
			top: 8
		}
	}}
	figmaImportConfig={topContainerConfig}
>
	<List
		style="justify-content: flex-end; overflow: visible;"
		direction="row"
		figmaImportConfig={componentsContainer}
		figmaImport={{ desktop: { top: 35, left: '0', width: '100%', height: 36 } }}
	>
		{#each filteredProjectFlags as flag, ix}
			{#if flag === 'live'}
				<ListItem
					transitions={getTransition(ix)}
					height="100%"
					width="35%"
					style="margin-right: 3%; margin-left: 3%;"
					><a
						style="padding: 0; margin: 0; position: absolute; width: 100%; height: 100%;"
						href={$selectedProject.deploymentHref}
						target="_blank"
					>
						<Button
							desktopFont={$globalStyle.smallDesktopFont}
							width="100%"
							height="100%"
							label="Live deployment"
							align="left"
							color={$globalStyle.successColor}
							borderColor={$globalStyle.successColor}
							style="border-top: none; border-bottom: none;"
							backgroundColor={$globalStyle.successColor}
							alignPadding="5%"
							><Box
								width="1vh"
								height="1vh"
								style="right: 3%; opacity: {liveDeploymentDotOpacity}; transition: linear 0.5s !important;"
								borderRadius="1000px"
								backgroundColor={$globalStyle.successColor}
							></Box></Button
						></a
					></ListItem
				>
			{/if}
			{#if flag === 'docs'}
				<ListItem
					transitions={getTransition(ix)}
					height="100%"
					width="20%"
					style="margin-right: 0.1%; margin-left: 2.3%;"
					><a
						style="padding: 0; margin: 0; position: absolute; width: 100%; height: 100%;"
						href={$selectedProject.docsHref}
						target="_blank"
						><Button
							desktopFont={$globalStyle.smallDesktopFont}
							width="100%"
							height="100%"
							label="Docs"
							align="left"
							style="border-top: none; border-bottom: none;"
							alignPadding="5%"><DocsDeco height="70%" style="right: -2%;"></DocsDeco></Button
						></a
					></ListItem
				>
			{/if}
			{#if flag === 'src'}
				<ListItem
					transitions={getTransition(ix)}
					height="100%"
					width="20%"
					style="margin-right: 0.1%; margin-left: 0.1%;"
					><a
						style="padding: 0; margin: 0; position: absolute; width: 100%; height: 100%;"
						href={$selectedProject.srcHref}
						target="_blank"
						><Button
							desktopFont={$globalStyle.smallDesktopFont}
							width="100%"
							height="100%"
							label="Source"
							align="left"
							style="border-top: none; border-bottom: none;"
							alignPadding="5%"><GithubLogo height="70%" style="right: -4%;"></GithubLogo></Button
						></a
					></ListItem
				>
			{/if}
		{/each}
	</List>
</Box>
