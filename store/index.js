import { writable, derived } from 'svelte/store';

import Cross from '../components/svgs/Cross.svelte';
import Menu from '../components/svgs/Menu.svelte';
import ChevronLeft from '../components/svgs/ChevronLeft.svelte';
import ChevronRight from '../components/svgs/ChevronRight.svelte';

export const svgs = [Menu, ChevronLeft, ChevronRight, Cross];
export const selectedSvgIndex = writable(0);
export const selectedSvg = derived(selectedSvgIndex, $selectedSvgIndex => svgs[$selectedSvgIndex]);
