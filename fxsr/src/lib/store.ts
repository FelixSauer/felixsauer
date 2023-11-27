import { writable } from 'svelte/store';
import type { Section } from './models/Pages';

export const currentSectionState = writable<Section>();
export const currentNavigationState = writable<boolean>();
