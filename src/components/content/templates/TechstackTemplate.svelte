<script lang="ts">
	import { getTransition } from '../../../fn/getTransisitions';
	import globalStyle from '../../../stores/globalStyles';
	import { selectedProject } from '../../../stores/selectedProject';
	import Box from '../../common/Box.svelte';
	import HorizontalLine from '../../common/HorizontalLine.svelte';
	import Label from '../../common/Label.svelte';
	import List from '../../common/List.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import PlaceholderLogo from '../../deco/PlaceholderLogo.svelte';

	const defaultStackComponentDecoProps = { height: '70%' };
	const defaultComponentMemberDecoProps = { height: '70%', left: '23%' };
</script>

<List width="80%" left="0%" height="95%">
	{#each $selectedProject.techStack as stackComponent, ix}
		<ListItem
			style="min-height: 40%;"
			transitions={getTransition(ix, undefined, 'x')}
			width="99%"
			height="40%"
			marginBottom="5%"
		>
			<Box width="100%" height="100%" borderColor={$globalStyle.activeColor}>
				<Label
					top="0%"
					width="97%"
					left="0%"
					height="15%"
					align="left"
					borderRadius={$globalStyle.borderRadius}
					alignPadding="3%"
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
								style="background-image: linear-gradient(90deg, {$globalStyle.activeColor} 0%,{$globalStyle.activeColor}20 100%);background-position: center center;"
							></HorizontalLine>
							<Label
								left="10%"
								width="30%"
								height="100%"
								text="/ {componentMember.name}"
								align="left"
								alignPadding="2%"
								desktopFont={$globalStyle.smallDesktopFont}
								backgroundColor="{$globalStyle.activeColor}20"
								style="border-right-top-radius: 0px; border-right-bottom-radius: 0px;"
							></Label>
							<Box left="42%" height="5vh" width="5vh">
								<svelte:component
									this={componentMember.deco === 'default' ? PlaceholderLogo : componentMember.deco}
									{...defaultComponentMemberDecoProps}
								></svelte:component>
							</Box>
							<Label
								left="52%"
								desktopFont={$globalStyle.smallDesktopFont}
								text={componentMember.title}
							></Label>
						</ListItem>
					{/each}
				</List>
			</Box>
		</ListItem>
	{/each}
</List>
