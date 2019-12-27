<script>
  export let size = 12;
  export let color = '#000000';

  export const NAME = 'Circle';
  export const TAGS = ['Circle', 'Shape'];
  export const FILENAME = 'circle.svg';
</script>

<svelte:options accessors={true} />
<svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
  <circle cx={size / 2} cy={size / 2} r={size / 2} />
</svg>
