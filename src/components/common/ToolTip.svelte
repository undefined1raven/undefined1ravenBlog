<script>
	import Label from './Label.svelte';
	import globalStyle from '../../stores/globalStyles';
	import mousePosition from '../../stores/mousePosition';

	let text = '';
	let show = false;
	export { text, show };
</script>

<Label
	{show}
	{text}
	top="{$mousePosition.y}px"
	left="{$mousePosition.x}px"
	style="padding: 0.5%; z-index: 300; padding-left: 0.8%;"
	backgroundColor="#000000AA"
	borderRadius={$globalStyle.borderRadius}
	backdropFilter="blur(5px)"
	color={"#FFF"}
	desktopFont={$globalStyle.verySmallDesktopFont}
/>
