<script lang="ts">
	import { activeColorSchemeID } from '../../stores/activeColorSchemeID';
	import globalStyle from '../../stores/globalStyles';
	import Box from './Box.svelte';
	import HorizontalLine from './HorizontalLine.svelte';
</script>

<HorizontalLine
	color="#00000000"
	style="height: 0.11vh; background-image: radial-gradient({$globalStyle.activeColor} 0%, {$globalStyle.activeColor}20 100%);background-size: 100% 100%; background-position: center center;"
	figmaImport={{ desktop: { width: 1868, top: 12, left: 26 } }}
/>
<Box
	figmaImport={{ desktop: { top: 2, left: 2, width: 22, height: 22 } }}
	style="border-top-left-radius: {$globalStyle.borderRadius};"
	backgroundColor="{$globalStyle.activeColor}50"
></Box>
<Box
	onClick={() => {
		activeColorSchemeID.set('eagle');
	}}
	figmaImport={{ desktop: { width: 22, height: 22 } }}
	style="right: 0.104166667%; top: 0.185185185%; border-top-right-radius: {$globalStyle.borderRadius}; "
	backgroundColor="{$globalStyle.activeColor}50"
></Box>/
<Box></Box>
