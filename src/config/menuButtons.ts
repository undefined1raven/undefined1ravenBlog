import type { MenuButton } from "../stores/menu";

const projectViewBackButton: MenuButton = {
    title: 'Project View',
    type: 'back',
    hash: '#projectView',
    hotkey: 'escape',
    id: 'projectView',
    func: null,
    navHash: '#main'
};

const mainButton: MenuButton = {
    title: 'main',
    type: 'classic',
    hash: '#main',
    hotkey: 'm',
    id: 'main',
    func: null,
};

const techTreeButton: MenuButton = {
    title: 'tech tree',
    id: 'techTree',
    hash: '#tree',
    func: () => { },
    hotkey: 't',
    type: 'classic'
};

const contactButton: MenuButton = { title: 'contact', id: 'contact', hash: '#contact', func: () => { }, hotkey: 'c', type: 'classic' }

export { techTreeButton, mainButton, projectViewBackButton, contactButton }