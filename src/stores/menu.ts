import { writable, type Writable } from "svelte/store"

type MenuButtonType = 'classic' | 'back';

type MenuButton = {
    title: string,
    id: string,
    hash: string,
    navHash?: string,
    func: Function | null,
    hotkey: string,
    type: MenuButtonType
}

const mobileIsMenuUp = writable(false);

const menu: Writable<Array<MenuButton>> = writable([
    { title: 'main', id: 'main', hash: '#main', func: () => { }, hotkey: 'm', type: 'classic', navHash: '#main' },
    { title: 'tech tree', id: 'techTree', hash: '#tree', func: () => { }, hotkey: 't', type: 'classic', navHash: '#tree' },
    { title: 'contact', id: 'contact', hash: '#contact', func: () => { }, hotkey: 'c', type: 'classic', navHash: '#contact' },
])


export { menu, mobileIsMenuUp }
export type { MenuButton, MenuButtonType }