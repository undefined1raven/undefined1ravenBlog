import type { SvelteComponent } from "svelte";
import type { colorIDs } from "../stores/activeColorSchemeID";
import Label from "../components/common/Label.svelte";
import RingRelayDeco from "../components/deco/RingRelayDeco.svelte";
import AboutTemplate from "../components/content/templates/AboutTemplate.svelte";
import { RingRelayFullDescription } from "../components/content/RingRelay/fullDescription";
import ArcLogo from "../components/deco/ARCLogo.svelte";
import MainMenuDeco from "../components/deco/DronebuzzLogo.svelte";
import FrontendLogo from "../components/deco/FrontendLogo.svelte";
import TechstackTemplate from "../components/content/templates/TechstackTemplate.svelte";
import BackendLogo from "../components/deco/BackendLogo.svelte";
import DatabasesLogo from "../components/deco/DatabasesLogo.svelte";

type Chapter = { title: string, content: SvelteComponent, id: 'about' | 'status' | '3rdParty' | 'tech' | 'features' };
type Flag = 'live' | 'src' | 'dev' | 'dep' | 'v1' | 'docs';
type StackMember = { title: string, name: string, deco: SvelteComponent | 'default' }
type StackComponent = { title: string, deco: SvelteComponent | 'default', members: Array<StackMember>, decoProps?: Object };

const frontendStackComponentDefaults: StackComponent = { title: 'Front-end', deco: FrontendLogo, members: [], decoProps: {} }
const backendStackComponentDefaults: StackComponent = { title: 'Back-end', deco: BackendLogo, members: [], decoProps: {} }
const databasesStackComponentDefaults: StackComponent = { title: 'Databases', deco: DatabasesLogo, members: [], decoProps: {} }

type Project = {
    title: string,
    shortDescription: string,
    fullDescription: string,
    startDate: number,
    endDate: number,
    logo: SvelteComponent | 'placeholder',
    flags: Array<Flag>,
    colorID: colorIDs,
    deploymentHref: string,
    srcHref: string,
    chapters: Array<Chapter>,
    docsHref?: string,
    projectID: string,
    logoProps: Object,
    techStack?: Array<StackComponent>,

}
const projects: Array<Project> = [
    {
        title: 'Ring Relay',
        shortDescription: 'E2E Encrypted Messaging App',
        deploymentHref: 'https://ring-relay.vercel.app',
        logo: RingRelayDeco,
        logoProps: { width: '100%', height: '70%' },
        srcHref: 'https://github.com/undefined1raven/Ring-Relay',
        flags: ['live', 'src', 'v1', 'docs'],
        startDate: 0,
        endDate: 0,
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }, { title: 'Tech Stack', content: TechstackTemplate, id: 'tech' }],
        colorID: 'ringRelay',
        projectID: 'ring-relay-v2',
        techStack: [
            { ...frontendStackComponentDefaults, members: [{ title: 'React', deco: 'default', name: 'Library' }] },
            { ...backendStackComponentDefaults, members: [{ title: 'Vercel', deco: 'default', name: 'Platform' }] },
            {
                ...databasesStackComponentDefaults, members: [
                    { title: 'Planet Scale', deco: 'default', name: 'Bulk Data' },
                    { title: 'Firebase RTDB', deco: 'default', name: 'Auth Sessions & Misc' }]
            }],
        fullDescription: RingRelayFullDescription
    },
    {
        title: 'ARC',
        shortDescription: 'Daily planner / Time Tracking & more ',
        logo: ArcLogo,
        flags: ['live', 'src', 'dev', 'v1'],
        logoProps: { width: '100%', height: '70%' },
        startDate: 0,
        deploymentHref: 'https://ankaryn.online',
        srcHref: 'https://github.com/undefined1raven/arc',
        endDate: 0,
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }],
        colorID: 'arc',
        techStack: [],
        projectID: 'sys_ctl_arc',
        fullDescription: `Arc is a mobile app that allows anyone to track and plan many aspects of our daily lives. The app
        doesn't require an email/password pair to sign up, but it's rather using a one-click sign up flow by using
        cryptography. The account key is a file containing all private keys and only someone with this file is able
        to log in. As a result, all user data is encrypted at rest. Some of the features are: activity tracking, day
        planning, macro planning for projects(tasks, deadlines etc.) and a personal vault for various notes. The
        front-end was written in Svelte for improved performance and the UI is composed of components that I've developed as part of my own UI library, significantly improving development speed by using custom
        integrations with my design tools.`
    },
    {
        title: 'Eagle',
        shortDescription: 'Remotely flown custom UAV',
        srcHref: 'https://github.com/undefined1raven/VultureLink',
        flags: ['src'],
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }],
        logo: 'placeholder',
        startDate: 0,
        deploymentHref: '',
        techStack: [],
        endDate: 0,
        colorID: 'eagle',
        projectID: 'eagle-lts',
        fullDescription: `Project Eagle is my on-going effort of building a drone that can be flown from anywhere as long as
        you have an internet connection. The first version of the web application connecting to the UAV was
        written in Vue, but I'm currently rewriting it in Svelte so I could use the UI library I built for Arc. This app
        uses the MQTT protocol to communicate in real-time with the UAV. Its purpose is to relay telemetry
        and controls between the pilot and the UAV as well as provide debugging info and custom controls that
        greatly help in the development process.`
    },
    {
        title: 'Dev Logs',
        shortDescription: 'Dev Blog / Knowledge Base',
        srcHref: '',
        flags: ['dev'],
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }],
        startDate: 0,
        logo: 'placeholder',
        techStack: [],
        deploymentHref: '',
        endDate: 0,
        colorID: 'devLogs',
        projectID: '',
        fullDescription: '[Under construction]'
    }, {
        title: 'Drone Buzz',
        shortDescription: 'Be a drone / Survive',
        flags: ['live', 'src', 'v1'],
        srcHref: 'https://github.com/undefined1raven/DroneBuzz',
        deploymentHref: 'https://dronebuzz.vercel.app',
        startDate: 0,
        endDate: 0,
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }],
        logo: MainMenuDeco,
        logoProps: { width: '100%', height: '90%' },
        colorID: 'droneBuzz',
        projectID: '',
        techStack: [],
        fullDescription: `Drone Buzz is a mobile single player game that lets you control a drone while trying to survive enemy drones or complete objectives. The game is projected on a real-world map so you could visit places you know in real life and to make it more interesting. You can choose between different loadouts and get access to powerful scorestreaks like UAVs and enemy missile disruptors as you survive for longer.`
    },
    {
        title: 'Spider Eyes',
        shortDescription: 'Dream Logbook',
        flags: ['src', 'dep'],
        startDate: 0,
        srcHref: 'https://github.com/undefined1raven/SpiderEyes',
        endDate: 0,
        deploymentHref: '',
        logo: 'placeholder',
        colorID: 'spiderEyes',
        chapters: [{ title: 'About', content: AboutTemplate, id: 'about' }],
        projectID: '',
        techStack: [],
        fullDescription: `Spider Eyes is a dream logging app that allows users to log various aspects of their dreams. Some of these aspects are feelings experienced, realism, dream types and more. The user can also use custom content tags to associate with each dream. There is also a dashboard that shows different stats about all of the logs [In progress]. For this project, I've used the Nuxt framework and Node for the backend. I used Vercel to deploy both the frontend and backend. The backend is composed of multiple functions that use Vercel's serverless feature. Currently working on adapting it for mobile.`
    }
];


export { projects }
export type { Project, Flag, Chapter }