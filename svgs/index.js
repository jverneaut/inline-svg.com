// Navigation
import Menu from './Menu.svelte';
import Cross from './Cross.svelte';

// Chevrons
import ChevronTop from './ChevronTop.svelte';
import ChevronBottom from './ChevronBottom.svelte';
import ChevronLeft from './ChevronLeft.svelte';
import ChevronRight from './ChevronRight.svelte';

// Shapes
import Bar from './Bar.svelte';
import Circle from './Circle.svelte';
import Rectangle from './Rectangle.svelte';

// Brands
import Facebook from './Facebook.svelte';
import Twitter from './Twitter.svelte';

export default {
  'Navigation': [Menu],
  'Chevrons': [ChevronLeft, ChevronTop, ChevronBottom, ChevronRight],
  'Shapes': [Bar, Circle, Rectangle],
  'Brands': [Facebook, Twitter]
};
