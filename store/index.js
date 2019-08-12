import { writable, derived } from 'svelte/store';

import Cross from '../components/svgs/Cross.svelte';
import Menu from '../components/svgs/Menu.svelte';
import ChevronLeft from '../components/svgs/ChevronLeft.svelte';
import ChevronRight from '../components/svgs/ChevronRight.svelte';


// TODO: Refactor index attribution
export const collections = [
  { name: 'Misc', svgs: [Menu, Cross] },
  { name: 'Chevrons', svgs: [ChevronLeft, ChevronRight] },
].map((collection, index, arr) => ({
  ...collection,
  baseIndex: arr.slice(0, index).reduce((acc, val) => acc.concat(val.svgs), []).length
}));

export const svgs = collections.map(collection => collection.svgs).reduce((acc, val) => {
  const indexedComponents = val.map((component, index) => ({
    component,
    index: acc.length + index
  }));
  return acc.concat(indexedComponents)
}, []);

export const selectedSvgIndex = writable(0);
export const selectedSvg = derived(selectedSvgIndex, $selectedSvgIndex => svgs[$selectedSvgIndex]);
