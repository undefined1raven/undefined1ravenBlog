<script lang="ts">
	import { onMount } from 'svelte';
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import { selectedProject } from '../../../stores/selectedProject';
	import Label from '../../common/Label.svelte';
</script>

<Label
	transitions={getTransition(1, 100, 'x')}
	align="left"
	style="align-items: start;"
	desktopFont={$globalStyle.mediumDesktopFont}
	left="0%"
	width="90%"
	fontType="soft"
	height="100%"
	text={$selectedProject.fullDescription}
></Label>
