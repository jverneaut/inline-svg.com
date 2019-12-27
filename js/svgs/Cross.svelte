<script>
  export let size = 16;
  export let thickness = 1;
  export let color = '#000000';

  export const NAME = 'Cross';
  export const TAGS = ['Cross', 'Close'];
  export const FILENAME = 'cross.svg';

  $: offset = (1 / Math.SQRT1_2) * thickness;
</script>

<svelte:options accessors={true} />
<svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
  <path d={`M${offset} 0 ${size} ${size - offset} L${size - offset} ${size} L0 ${offset}`} />
  <path d={`M${size - offset} 0 L${size} ${offset} L${offset} ${size} L0 ${size - offset}`} />
</svg>
