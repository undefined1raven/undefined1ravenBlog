<script>
	import globalStyle from '../../../stores/globalStyles';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import Box from '../Box.svelte';
	import Button from '../Button.svelte';
	import Label from '../Label.svelte';
</script>

<Box
	horizontalCenter={true}
	figmaImport={{ mobile: { top: 580, left: '50%', width: 350, height: 53 } }}
>
	<DropdownDeco left="3%" style="transform: rotate(90deg);" height="50%"></DropdownDeco>
	<Label left="18%" text="Contents Menu"></Label>
	<Button width="99.5%" height="100%" hoverOpacityMin={10} hoverOpacityMax={20}></Button>
</Box>
