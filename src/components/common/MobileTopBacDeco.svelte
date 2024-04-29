<script lang="ts">
	import { activeColorSchemeID } from '../../stores/activeColorSchemeID';
	import globalStyle from '../../stores/globalStyles';
	import BioDeco from '../deco/BioDeco.svelte';
	import Box from './Box.svelte';
	import HorizontalLine from './HorizontalLine.svelte';
</script>

<HorizontalLine
	color="#00000000"
	style="height: 0.11vh; background-image: radial-gradient({$globalStyle.activeColor} 0%, {$globalStyle.activeColor}20 100%);background-size: 100% 100%; background-position: center center;"
	figmaImport={{
		mobile: { left: '0', width: '100%', top: 27 }
	}}
/>
<Box
	horizontalCenter={true}
	figmaImport={{
		mobile: { left: '50%', width: '30%', top: '0', height: 27 }
	}}
>
	<BioDeco width="100%" height="100%"></BioDeco>
</Box>
