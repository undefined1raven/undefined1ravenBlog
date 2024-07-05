<script lang="ts">
	import { getTransition } from '../../../fn/getTransisitions';
	import isMobile from '../../../fn/isMobile';
	import globalStyle from '../../../stores/globalStyles';
	import screenSize from '../../../stores/screenSize';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import HorizontalLine from '../../common/HorizontalLine.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import VerticalLine from '../../common/VerticalLine.svelte';
	import NetworkDeco from '../../deco/NetworkDeco.svelte';
	import PlaceholderLogo from '../../deco/PlaceholderLogo.svelte';

	const defaultStackComponentDecoProps = { height: '70%' };
	const defaultComponentMemberDecoProps = { height: '70%', left: '23%' };


	function getNetwordDecoTop(){
		if(isMobile()){
			return '-21%'
		}else{
			return $screenSize.minimized ? '-15%' : '-18%';
		}
	}
</script>

<List width="100%" left="0%" height="95%">
	{#each $selectedProject.techStack as stackComponent, ix}
		<ListItem
			style="min-height: 40%;"
			transitions={getTransition(ix, undefined, 'x')}
			width="99%"
			height="40%"
			marginBottom={isMobile() ? '15%' : '5%'}
		>
			{#if ix !== 0 && ix <= $selectedProject.techStack.length - 1}
				<Box
					top={getNetwordDecoTop()}
					width="2vh"
					height={$screenSize.minimized ? '2vh' : '4vh'}
					left="50%"
					horizontalCenter={true}
				>
					<NetworkDeco width="100%" height="100%"></NetworkDeco>
				</Box>
			{/if}
			<Box width="100%" height="100%" borderColor={$globalStyle.activeColor}>
				<Label
					top="0%"
					width="97%"
					left="0%"
					height="15%"
					align="left"
					borderRadius={$globalStyle.borderRadius}
					alignPadding="3%"
					verticalFont={$globalStyle.mediumMobileFont}
					desktopFont={$globalStyle.mediumDesktopFont}
					backgroundColor="{$globalStyle.activeColor}20"
					style="border-bottom-right-radius: 0; border-bottom-left-radius: 0;"
					text={stackComponent.title}
					><svelte:component
						this={stackComponent.deco}
						{...defaultStackComponentDecoProps}
						{...stackComponent.decoProps}
						style="right: 2%;"
					></svelte:component></Label
				>
				<List width="100%" height="70%" top="25%">
					{#each stackComponent.members as componentMember, ix}
						<ListItem
							transitions={getTransition(ix + 1)}
							width="100%"
							height="40%"
							marginBottom="3%"
						>
							<HorizontalLine
								width="10%"
								left="0%"
								top="50%"
								color="#00000000"
								style="background-image: linear-gradient(90deg, {$globalStyle.activeColor} 0%,{$globalStyle.activeColor}10 100%);background-position: center center;"
							></HorizontalLine>
							<Label
								fontType="soft"
								left="10%"
								width="30%"
								height="80%"
								text={componentMember.name}
								verticalFont={$globalStyle.mediumMobileFont}
								align="left"
								alignPadding="2%"
								desktopFont={$globalStyle.mediumDesktopFont}
								style="border-right-top-radius: 0px; border-right-bottom-radius: 0px;"
							></Label>
							<Label
								verticalFont={$globalStyle.mediumMobileFont}
								fontType="soft"
								left="45%"
								desktopFont={$globalStyle.mediumDesktopFont}
								text={componentMember.title}
							></Label>
							<Box
								left="10%"
								height="90%"
								width="80%"
								backgroundColor="{$globalStyle.activeColor}10"
							></Box>
							<VerticalLine height="80%" left="43%" color={$globalStyle.activeColor}></VerticalLine>
							<Box style="right: 12%;" height="5vh" width="5vh">
								{#if componentMember.deco === 'default'}
									<svelte:component this={PlaceholderLogo} left="0%" height="80%"
									></svelte:component>
								{:else}
									<img
										style="position: absolute; height: 70%; width: auto; display: flex; align-items: center; justify-content: center;"
										src={componentMember.deco}
									/>
								{/if}
							</Box>
						</ListItem>
					{/each}
				</List>
			</Box>
		</ListItem>
	{/each}
</List>
