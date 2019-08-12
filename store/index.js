import { writable, derived } from 'svelte/store';

import Cross from '../components/svgs/Cross.svelte';
import Menu from '../components/svgs/Menu.svelte';

import ChevronLeft from '../components/svgs/ChevronLeft.svelte';
import ChevronRight from '../components/svgs/ChevronRight.svelte';
import ChevronTop from '../components/svgs/ChevronTop.svelte';
import ChevronBottom from '../components/svgs/ChevronBottom.svelte';

import Twitter from '../components/svgs/Twitter.svelte';
import Facebook from '../components/svgs/Facebook.svelte';

export const collections = [
  { name: 'Navigation', svgs: [Menu, Cross] },
  { name: 'Chevrons', svgs: [ChevronLeft, ChevronTop, ChevronRight, ChevronBottom] },
  { name: 'Brands', svgs: [Twitter, Facebook] },
].map((collection, index, arr) => ({
  ...collection,
  baseIndex: arr.slice(0, index).reduce((acc, val) => acc.concat(val.svgs), []).length
}));

export const svgs = collections.map(collection => collection.svgs).reduce((acc, val) => {
  const indexedComponents = val.map((component, index) => ({
    keywords: new component({}).$$.ctx.TAGS,
    component,
    index: acc.length + index
  }));
  return acc.concat(indexedComponents)
}, []);

export const selectedSvgIndex = writable(0);
export const selectedSvg = derived(selectedSvgIndex, $selectedSvgIndex => svgs[$selectedSvgIndex]);

export const searchInput = writable('');
export const searchResults = derived(searchInput, $searchInput => svgs.filter(svg => {
  return svg.keywords.join(' ').toLowerCase().indexOf($searchInput.toLowerCase()) !== -1;
}));
