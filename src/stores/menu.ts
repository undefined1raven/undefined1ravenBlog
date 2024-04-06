import { writable, type Writable } from "svelte/store"

type MenuButtonType = 'classic' | 'back';

type MenuButton = {
    title: string,
    id: string,
    hash: string,
    func: Function | null,
    hotkey: string,
    type: MenuButtonType
}

const menu: Writable<Array<MenuButton>> = writable([
    { title: 'main', id: 'main', hash: '#main', func: () => { }, hotkey: 'm', type: 'classic' },
    { title: 'tech tree', id: 'techTree', hash: '#tree', func: () => { }, hotkey: 't', type: 'classic' },
    { title: 'contact', id: 'contact', hash: '#contact', func: () => { }, hotkey: 'c', type: 'classic' },
])


export { menu }
export type { MenuButton, MenuButtonType }