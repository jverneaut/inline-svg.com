<script>
  export let width = 16;
  export let thickness = 2;
  export let color = '#000000';

  export const NAME = 'Bar';
  export const TAGS = ['Bar', 'Rect', 'Line', 'Shape'];
  export const FILENAME = 'bar.svg';
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} height={thickness} xmlns="http://www.w3.org/2000/svg">
  <rect {width} height={thickness} />
</svg>
