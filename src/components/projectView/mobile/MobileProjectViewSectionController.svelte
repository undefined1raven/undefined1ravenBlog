<script>
	import globalStyle from '../../../stores/globalStyles';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import Button from '../../common/Button.svelte';
	import Label from '../../common/Label.svelte';
	import DropdownDeco from '../../deco/DropdownDeco.svelte';
	import { selectedChapter } from '../selectedChapter';
	let containerConfig = { containerHeight: 1, containerWidth: 1 };
	const controlContainerConfig = { containerHeight: 40, containerWidth: 350 };

	function getSelectedChapterIndex(selectedChapter) {
		if (selectedChapter !== undefined) {
			return $selectedProject.chapters.findIndex((elm) => elm.id === selectedChapter.id);
		} else {
			return {};
		}
	}
	$: selectedChapterIndex = getSelectedChapterIndex($selectedChapter);

	export { containerConfig };
</script>

<Box
	figmaImportConfig={containerConfig}
	figmaImport={{
		mobile: {
			top: 495,
			left: '0',
			width: controlContainerConfig.containerWidth,
			height: controlContainerConfig.containerHeight
		}
	}}
>
	<Label
		backgroundColor="{$globalStyle.activeColor}20"
		align="center"
		figmaImport={{ mobile: { left: '0', width: 210, height: '100%', top: '0' } }}
		figmaImportConfig={controlContainerConfig}
		text={$selectedChapter.title}
	></Label>
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
		hoverOpacityMax={20}
		figmaImportConfig={controlContainerConfig}
		figmaImport={{ mobile: { left: 214, top: '0', width: 66, height: '100%' } }}
		><DropdownDeco height="60%" style="transform: rotate(0deg);"></DropdownDeco></Button
	>
	<Button
		onClick={() => {
			if (selectedChapterIndex < $selectedProject.chapters.length - 1) {
				selectedChapter.set($selectedProject.chapters[selectedChapterIndex + 1]);
			} else {
				selectedChapter.set($selectedProject.chapters[0]);
			}
		}}
		hoverOpacityMin={0}
		style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;"
		hoverOpacityMax={20}
		figmaImportConfig={controlContainerConfig}
		figmaImport={{ mobile: { left: 284, top: '0', width: 66, height: '100%' } }}
		><DropdownDeco height="60%" style="transform: rotate(180deg);"></DropdownDeco></Button
	>
</Box>
