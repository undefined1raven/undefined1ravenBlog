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
	import { fly } from 'svelte/transition';
	import PlaceholderLogo from '../deco/PlaceholderLogo.svelte';

	let topContainerConfig = {};
	let componentsContainer = {
		containerHeight: 100,
		containerWidth: $screenSize.minimized ? 558 : 458
	};
	export { topContainerConfig, componentsContainer };
</script>

<Box
	figmaImport={{
		desktop: {
			width: componentsContainer.containerWidth,
			height: componentsContainer.containerHeight,
			left: 12,
			top: $screenSize.minimized ? '-1.5%' : 8
		}
	}}
	figmaImportConfig={topContainerConfig}
>
	<Box
		transitions={{ in: { func: fly, options: { x: '-2%', duration: 200, delay: 50 } } }}
		figmaImportConfig={componentsContainer}
		height="100%"
		width="20%"
		left="0%"
		top="0%"
		><svelte:component
			this={$selectedProject.logo !== 'placeholder' ? $selectedProject.logo : PlaceholderLogo}
			{...$selectedProject.logoProps}
		></svelte:component></Box
	>
	<Label
		transitions={getTransition(2, undefined, 'x')}
		text={$selectedProject.title}
		align="left"
		desktopFont={$globalStyle.veryLargeDesktopFont}
		figmaImportConfig={componentsContainer}
		figmaImport={{
			desktop: {
				height: '100%',
				left: $screenSize.minimized ? 160 : 116,
				width: $screenSize.minimized ? 500 : 332,
				top: '0'
			}
		}}
	></Label>
</Box>
