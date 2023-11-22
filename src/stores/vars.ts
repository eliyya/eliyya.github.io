import { writable } from "svelte/store";

export const terminal = writable<string>('deno > run on http://localhost:3000/\ndeno > ')

export function addTerminalLine(v: string) {
    terminal.update(o => o+v+'\ndeno > ')
}