<script>
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import LinkedLogo from '../../deco/linkedLogo.svelte';
	import EmailDeco from '../../deco/EmailDeco.svelte';
	import globalStyle from '../../../stores/globalStyles';
	import InstagramLogo from '../../deco/InstagramLogo.svelte';
	const containerConfig = { containerHeight: 40, containerWidth: 350 };
</script>

<Box
	figmaImport={{
		mobile: {
			top: 550,
			left: 3,
			width: containerConfig.containerWidth,
			height: containerConfig.containerHeight
		}
	}}
>
	<a target="_blank" style="width: 100%; height: 100%;" href="https://linkedin.com/in/dominic-zlat">
		<Button
			borderColor={$globalStyle.activeColor}
			backgroundColor={$globalStyle.activeColor}
			hoverOpacityMin={0}
			hoverOpacityMax={20}
			figmaImport={{ mobile: { left: '0', width: 117, top: '100%', height: '100%' } }}
			style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
			figmaImportConfig={containerConfig}
			><LinkedLogo color={$globalStyle.activeColor} width="30%" height="40%"></LinkedLogo></Button
		></a
	>
	<a
		target="_blank"
		style="width: 100%; height: 100%;"
		href="https://www.instagram.com/zlatdominic"
	>
		<Button
			borderColor={$globalStyle.activeColor}
			backgroundColor={$globalStyle.activeColor}
			hoverOpacityMin={0}
			hoverOpacityMax={20}
			figmaImport={{ mobile: { left: 117, width: 117, top: '100%', height: '100%' } }}
			figmaImportConfig={containerConfig}
			style="border-left: none;"
			borderRadius="0px"><InstagramLogo width="60%" height="40%"></InstagramLogo></Button
		></a
	>
	<a
		target="_blank"
		style="width: 100%; height: 100%;"
		href="mailto:undefined.halt499@passinbox.com"
	>
		<Button
			borderColor={$globalStyle.activeColor}
			backgroundColor={$globalStyle.activeColor}
			hoverOpacityMin={0}
			hoverOpacityMax={20}
			onClick={() => {}}
			style="border-left: none; border-top-left-radius: 0; border-bottom-left-radius: 0;"
			figmaImport={{ mobile: { left: 234, width: 117, top: '100%', height: '100%' } }}
			figmaImportConfig={containerConfig}
			><EmailDeco color={$globalStyle.activeColor} width="30%"></EmailDeco></Button
		>
	</a>
</Box>
