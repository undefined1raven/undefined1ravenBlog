<script>
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import { getTransition } from '../../fn/getTransisitions';
	import globalStyle from '../../stores/globalStyles';
	import { selectedProject } from '../../stores/selectedProject.ts';
	import screenSize from '../../stores/screenSize';
	import Box from '../common/Box.svelte';
	import Menu from '../common/Desktop/Menu.svelte';
	import Label from '../common/Label.svelte';
	import TopDecoBar from '../common/TopDecoBar.svelte';
	import ProjectViewDeco from '../deco/ProjectViewDeco.svelte';
	import DocsDeco from '../deco/DocsDeco.svelte';
	import { fly } from 'svelte/transition';
	import List from '../common/List.svelte';
	import Button from '../common/Button.svelte';
	import ListItem from '../common/ListItem.svelte';
	import VerticalLine from '../common/VerticalLine.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import { selectedChapter } from './selectedChapter';
	import DropdownDeco from '../deco/DropdownDeco.svelte';
	import { isMenuExtended } from './isMenuExtended';
	let topContainerConfig = {};
	let componentsContainer = { containerHeight: 679, containerWidth: 339 };

	$: selectedChapterIndex = getSelectedChapterIndex($selectedChapter);

	function getSelectedChapterIndex(selectedChapter) {
		if (selectedChapter !== undefined) {
			return $selectedProject.chapters.findIndex((elm) => elm.id === selectedChapter.id);
		} else {
			return -1;
		}
	}
	$: isExtended = true;
	$: onMinimizedChange($screenSize.minimized);
	$: onIsExtendedChange(isExtended);
	function onMinimizedChange(isMini) {
		if (isMini === false) {
			isExtended = true;
		}else{
			isExtended = false;
		}
	}

	function onIsExtendedChange(isExtended) {
		isMenuExtended.set(isExtended);
	}
	export { topContainerConfig };
</script>

<svelte:window
	on:keyup={(e) => {
		if (selectedChapterIndex !== -1) {
			if (e.key === 'ArrowUp') {
				if (selectedChapterIndex < $selectedProject.chapters.length - 1) {
					selectedChapter.set($selectedProject.chapters[selectedChapterIndex + 1]);
				} else {
					selectedChapter.set($selectedProject.chapters[0]);
				}
			}
			if (e.key === 'ArrowDown') {
				if (selectedChapterIndex > 0) {
					selectedChapter.set($selectedProject.chapters[selectedChapterIndex - 1]);
				} else {
					const chaptersLen = $selectedProject.chapters.length;
					selectedChapter.set($selectedProject.chapters[chaptersLen - 1]);
				}
			}
		}
	}}
/>
<VerticalLine
	figmaImportConfig={topContainerConfig}
	color={$globalStyle.activeColor}
	figmaImport={{ desktop: { top: 153, left: isExtended ? 383 : 142, height: 679, width: 1 } }}
></VerticalLine>
<Box
	style="transition: transform 0.3s linear;"
	figmaImport={{
		desktop: {
			width: componentsContainer.containerWidth,
			height: componentsContainer.containerHeight,
			left: isExtended ? 22 : -500,
			top: 153
		}
	}}
	figmaImportConfig={topContainerConfig}
>
	<Label
		transitions={getTransition(1)}
		top="0%"
		left="0%"
		text="Jump to"
		desktopFont={$globalStyle.mediumDesktopFont}
		width="100%"
		align="left"
	></Label>

	<List
		figmaImportConfig={componentsContainer}
		figmaImport={{ desktop: { top: 35, left: '0', width: '99%', height: 632 } }}
	>
		{#each $selectedProject.chapters as chapter, ix}
			<ListItem
				marginBottom="3%"
				transitions={getTransition(ix, undefined, 'x')}
				width="100%"
				height="8%"
				><Button
					isSelected={$selectedChapter.title === chapter.title}
					onClick={() => {
						selectedChapter.set(chapter);
					}}
					hoverOpacityMin={10}
					hoverOpacityMax={20}
					align="left"
					alignPadding="3%"
					height="100%"
					style="border-top: none; border-bottom: none;"
					width="96%"
					desktopFont={$globalStyle.mediumDesktopFont}
					label={chapter.title}
				></Button></ListItem
			>
		{/each}
	</List>
	{#if $screenSize.minimized === true}
		{#if !isExtended}
			<Label
				text="View Chapters"
				left="118%"
				height="10%"
				width="90%"
				style="transform: rotate(-90deg); white-space: nowrap;"
			></Label>
		{/if}
		<Button
			onClick={() => {
				isExtended = !isExtended;
			}}
			width="25%"
			top="91.7%"
			left={isExtended ? '75%' : '155%'}
			hoverOpacityMin={0}
			hoverOpacityMax={20}
			height="8%"
			><DropdownDeco
				width="70%"
				height="70%"
				style="transform: rotate({isExtended ? '0deg' : '-180deg'});"
			></DropdownDeco></Button
		>
	{/if}
</Box>
