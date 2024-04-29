<script>
	import { fly } from 'svelte/transition';
	import { desktopBreakpoints } from '../../../config/screenBreakpoints';
	import globalStyle from '../../../stores/globalStyles';
	import { hasLoaded } from '../../../stores/hasLoaded';
	import screenSize from '../../../stores/screenSize';
	import Menu from '../../common/Desktop/Menu.svelte';
	import Label from '../../common/Label.svelte';
	import BioDock from '../BioDock.svelte';
	import ProjectsList from '../ProjectsList.svelte';
	import Box from '../../common/Box.svelte';
	import HorizontalLine from '../../common/HorizontalLine.svelte';
	import ProjectsListMobile from './ProjectsListMobile.svelte';
</script>

<Label
	text="undefined1raven dev"
	verticalFont={$globalStyle.largeMobileFont}
	figmaImport={{ mobile: { top: 39, left: 5 } }}
></Label>
<Label
	text="Dominic Zlat"
	color={$globalStyle.secondaryMono}
	figmaImport={{ mobile: { top: 71, left: 5 } }}
></Label>
<Box
	borderColor={$globalStyle.inactiveColor}
	transitions={{
		in: { func: fly, options: { x: '2%', duration: 200, delay: $hasLoaded ? 1 : 250 } }
	}}
	style="overflow: hidden; right: 2%; box-shadow: 0px 0px 12px {$globalStyle.inactiveColor};"
	figmaImport={{ mobile: { top: 36, left: 280, width: 75, height: 65 } }}
	width="15vh"
	height="15vh"
	backgroundColor="{$globalStyle.activeColor}00"
	><img alt="Selfie" style="user-select: none;" width="100%" height="auto" src="/pic.webp" /></Box
>
<Label
	text="biobiobiobob biobiobiobob biobiobiobob biobiobiobob biobiobiobob biobiobiobob biobiobiobob"
	color={$globalStyle.secondaryMono}
	align="left"
	figmaImport={{ mobile: { top: 449, left: 5, height: 118, width: 350 } }}
></Label>
<HorizontalLine
	figmaImport={{ mobile: { left: 5, top: 442, width: 350, height: '1.1vh' } }}
	color="{$globalStyle.activeColor}00"
	style="border-radius: {$globalStyle.borderRadius}; background-image: radial-gradient({$globalStyle.activeColor} 0%,{$globalStyle.activeColor}05 100%);background-size: 100% 100%;background-position: center center;"
></HorizontalLine>
<ProjectsListMobile></ProjectsListMobile>
