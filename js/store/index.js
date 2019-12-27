import { writable, derived } from 'svelte/store';

import uuid from 'uuid/v4';

import Cross from '../svgs/Cross.svelte';
import Menu from '../svgs/Menu.svelte';

import ChevronLeft from '../svgs/ChevronLeft.svelte';
import ChevronRight from '../svgs/ChevronRight.svelte';
import ChevronTop from '../svgs/ChevronTop.svelte';
import ChevronBottom from '../svgs/ChevronBottom.svelte';

import Twitter from '../svgs/Twitter.svelte';
import Facebook from '../svgs/Facebook.svelte';

import Bar from '../svgs/Bar.svelte';
import Rectangle from '../svgs/Rectangle.svelte';
import Circle from '../svgs/Circle.svelte';

import ArrowLeft from '../svgs/ArrowLeft.svelte';

export const collections = [
  { name: 'Navigation', svgs: [Menu, Cross, ArrowLeft] },
  { name: 'Chevrons', svgs: [ChevronLeft, ChevronTop, ChevronRight, ChevronBottom] },
  { name: 'Shapes', svgs: [Bar, Rectangle, Circle] },
  { name: 'Brands', svgs: [Twitter, Facebook] },
].map((collection, index, arr) => ({
  ...collection,
  baseIndex: arr.slice(0, index).reduce((acc, val) => acc.concat(val.svgs), []).length,
}));

const dummy = document.createElement('div');

export const svgs = collections
  .map(collection => collection.svgs)
  .reduce((acc, val) => {
    const indexedComponents = val.map((component, index) => ({
      keywords: new component({ target: dummy }).$$.ctx.TAGS,
      name: new component({ target: dummy }).$$.ctx.NAME,
      component,
      index: acc.length + index,
    }));
    return acc.concat(indexedComponents);
  }, []);

export const selectedSvgIndex = writable(0);
export const selectedSvg = derived(
  selectedSvgIndex,
  $selectedSvgIndex => svgs[$selectedSvgIndex]
);

export const searchInput = writable('');
export const searchResults = derived(searchInput, $searchInput =>
  svgs.filter(svg => {
    return (
      svg.keywords
        .join(' ')
        .toLowerCase()
        .indexOf($searchInput.toLowerCase()) !== -1
    );
  })
);

export const notifications = writable([]);

export const notify = message => {
  const id = uuid();
  notifications.update(notifications => [
    ...notifications,
    {
      message,
      id,
      show: true,
    },
  ]);

  setTimeout(() => {
    notifications.update(notifications =>
      notifications.map(notification =>
        notification.id === id
          ? {
              ...notification,
              show: false,
            }
          : notification
      )
    );
  }, 3000);
};
