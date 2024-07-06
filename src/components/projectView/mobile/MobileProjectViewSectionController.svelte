<script>
	import { projects } from '../../../config/projects';
	import globalStyle from '../../../stores/globalStyles';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import { selectedChapter } from '../selectedChapter';
	let containerConfig = { containerHeight: 1, containerWidth: 1 };
	const controlContainerConfig = { containerHeight: 40, containerWidth: 350 };

	let title = 'x';
	let flickr = true;
	function getSelectedChapterIndex(selectedChapter) {
		flickr = false;
		setTimeout(() => {
			flickr = true;
		}, 10);
		if (selectedChapter !== undefined) {
			return $selectedProject.chapters.findIndex((elm) => elm.id === selectedChapter.id);
		} else {
			return -1;
		}
	}
	$: selectedChapterIndex = getSelectedChapterIndex($selectedChapter);
	$: isSingleChapterProject = $selectedProject.chapters.length === 1;
	export { containerConfig, title };
</script>

<Box
	figmaImportConfig={containerConfig}
	figmaImport={{
		mobile: {
			top: 505,
			left: '0',
			width: controlContainerConfig.containerWidth,
			height: controlContainerConfig.containerHeight
		}
	}}
>
	{#if flickr}
		<Label
			backgroundColor="{$globalStyle.activeColor}20"
			align="center"
			figmaImport={{ mobile: { left: '0', width: 210, height: '100%', top: '0' } }}
			figmaImportConfig={controlContainerConfig}
			text={title}
		></Label>
	{/if}
	<Button
		onClick={() => {
			if (selectedChapterIndex > 0) {
				selectedChapter.set($selectedProject.chapters[selectedChapterIndex - 1]);
			} else {
				const chaptersLen = $selectedProject.chapters.length;
				selectedChapter.set($selectedProject.chapters[chaptersLen - 1]);
			}
		}}
		style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
		hoverOpacityMin={0}
		hoverOpacityMax={isSingleChapterProject ? 0 : 20}
		figmaImportConfig={controlContainerConfig}
		backgroundColor={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
		borderColor={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
		figmaImport={{ mobile: { left: 214, top: '0', width: 63, height: '100%' } }}
		><DropdownDeco
			color={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
			height="60%"
			style="transform: rotate(0deg);"
		></DropdownDeco></Button
	>
	<Button
		backgroundColor={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
		borderColor={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
		onClick={() => {
			if (selectedChapterIndex < $selectedProject.chapters.length - 1) {
				selectedChapter.set($selectedProject.chapters[selectedChapterIndex + 1]);
			} else {
				selectedChapter.set($selectedProject.chapters[0]);
			}
		}}
		hoverOpacityMin={0}
		style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;"
		hoverOpacityMax={isSingleChapterProject ? 0 : 20}
		figmaImportConfig={controlContainerConfig}
		figmaImport={{ mobile: { left: 284, top: '0', width: 63, height: '100%' } }}
		><DropdownDeco
			color={isSingleChapterProject ? $globalStyle.inactiveColor : $globalStyle.activeColor}
			height="60%"
			style="transform: rotate(180deg);"
		></DropdownDeco></Button
	>
</Box>
