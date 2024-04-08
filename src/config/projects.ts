import type { SvelteComponent } from "svelte";
import type { colorIDs } from "../stores/activeColorSchemeID";
import Label from "../components/common/Label.svelte";

type Flag = 'live' | 'src' | 'dev' | 'dep' | 'v1';
type Project = {
    title: string,
    shortDescription: string,
    fullDescription: string,
    startDate: number,
    endDate: number,
    logo: SvelteComponent,
    flags: Array<Flag>,
    colorID: colorIDs,
    deploymentHref: string,
    srcHref: string,
}
const projects: Array<Project> = [
    {
        title: 'ARC',
        shortDescription: 'Daily planner / Time Tracking & more ',
        logo: Label,
        flags: ['live', 'src', 'dev', 'v1'],
        startDate: 0,
        deploymentHref: 'https://ankaryn.online',
        srcHref: 'https://github.com/undefined1raven/arc',
        endDate: 0,
        colorID: 'arc',
        fullDescription: 'to do'
    },
    {
        title: 'Ring Relay',
        shortDescription: 'E2E Encrypted Messaging App',
        deploymentHref: 'https://ring-relay.vercel.app',
        logo: Label,
        srcHref: 'https://github.com/undefined1raven/Ring-Relay',
        flags: ['live', 'src', 'v1'],
        startDate: 0,
        endDate: 0,
        colorID: 'ringRelay',
        fullDescription: 'to do 2'
    },
    {
        title: 'Eagle',
        shortDescription: 'E2E Encrypted Messaging App',
        srcHref: 'https://github.com/undefined1raven/VultureLink',
        logo: Label,
        flags: ['src'],
        startDate: 0,
        deploymentHref: '',
        endDate: 0,
        colorID: 'eagle',
        fullDescription: 'to do 2'
    },
    {
        title: 'Dev Logs',
        shortDescription: 'E2E Encrypted Messaging App',
        logo: Label,
        srcHref: '',
        flags: ['dev'],
        startDate: 0,
        deploymentHref: '',
        endDate: 0,
        colorID: 'devLogs',
        fullDescription: 'to do 2'
    }, {
        title: 'Drone Buzz',
        shortDescription: 'E2E Encrypted Messaging App',
        logo: Label,
        flags: ['live', 'src', 'v1'],
        srcHref: 'https://github.com/undefined1raven/DroneBuzz',
        deploymentHref: 'https://dronebuzz.vercel.app',
        startDate: 0,
        endDate: 0,
        colorID: 'droneBuzz',
        fullDescription: 'to do 2'
    },
    {
        title: 'Spider Eyes',
        shortDescription: 'E2E Encrypted Messaging App',
        logo: Label,
        flags: ['src', 'dep'],
        startDate: 0,
        srcHref: 'https://github.com/undefined1raven/SpiderEyes',
        endDate: 0,
        deploymentHref: '',
        colorID: 'ringRelay',
        fullDescription: 'to do 2'
    }
];


export { projects }
export type { Project, Flag }