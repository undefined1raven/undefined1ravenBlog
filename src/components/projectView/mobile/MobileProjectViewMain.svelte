<script>
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Menu from '../../common/Desktop/Menu.svelte';
	import Label from '../../common/Label.svelte';
	import TopDecoBar from '../../common/TopDecoBar.svelte';
	import ProjectViewDeco from '../../deco/ProjectViewDeco.svelte';
	import ProjectViewTitleHeader from '../ProjectViewTitleHeader.svelte';
	import { onMount } from 'svelte';
	import MobileProjectViewTitleHeader from './MobileProjectViewTitleHeader.svelte';

	$: containerConfig = {
		containerHeight: 542,
		containerWidth: 350
	};
</script>

<Box
	figmaImport={{
		mobile: {
			width: containerConfig.containerWidth,
			height: containerConfig.containerHeight,
			left: '50%',
			top: 36
		}
	}}
	horizontalCenter={true}
>
	<MobileProjectViewTitleHeader {containerConfig}></MobileProjectViewTitleHeader>
</Box>
