<script>
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import globalStyle from '../../stores/globalStyles';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Menu from '../common/Desktop/Menu.svelte';
	import TopDecoBar from '../common/TopDecoBar.svelte';
	import ProjectViewDeco from '../deco/ProjectViewDeco.svelte';
</script>

<Box
	figmaImport={{ desktop: { width: 1329, height: 859, left: '50%', top: 127 } }}
	horizontalCenter={true}
	backgroundColor="{$globalStyle.activeColor}07"
>
	<ProjectViewDeco width="60%" height="60%" style="opacity: 0.1;"></ProjectViewDeco>
</Box>
