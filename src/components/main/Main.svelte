<script>
	import { desktopBreakpoints } from '../../config/screenBreakpoints';
	import screenSize from '../../stores/screenSize';
	import Menu from '../common/Desktop/Menu.svelte';
	import TopDecoBar from '../common/TopDecoBar.svelte';
	import BioDock from './BioDock.svelte';
	import ProjectsList from './ProjectsList.svelte';


</script>

<TopDecoBar></TopDecoBar>
<BioDock></BioDock>
<ProjectsList></ProjectsList>
