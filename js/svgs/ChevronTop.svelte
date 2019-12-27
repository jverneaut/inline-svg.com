<script>
  export let width = 16;
  export let height = 10;
  export let thickness = 2;
  export let color = '#000000';

  export const NAME = 'Chevron Top';
  export const TAGS = ['Chevron', 'Arrow', 'Top', 'Direction'];
  export const FILENAME = 'chevron_top.svg';

  $: aire = (width * height) / 4;
  $: base = Math.sqrt((width / 2) * (width / 2) + height * height);
  $: hauteur = (2 * aire) / base;
  $: ratio = thickness / hauteur;
  $: xOffset = (ratio * width) / 2;
  $: yOffset = height * ratio;
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height} xmlns="http://www.w3.org/2000/svg">
  <path
    d={`M${xOffset} ${height} L0 ${height} L${width / 2} 0 L${width} ${height} L${width - xOffset} ${height} L${width / 2} ${yOffset}`} />
</svg>
