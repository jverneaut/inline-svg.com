<script>
  export let width = 24;
  export let height = 12;
  export let thickness = 2;
  export let color = '#000000';

  export const NAME = 'Arrow Left';
  export const TAGS = [];
  export const FILENAME = 'arrow-left.svg';

  $: aire = (width * height) / 4;
  $: base = Math.sqrt((height / 2) * (height / 2) + 0.5 * width * width);
  $: hauteur = (2 * aire) / base;
  $: ratio = (Math.SQRT2 * thickness) / hauteur;
  $: xOffset = 0.5 * width * ratio;
  $: yOffset = (ratio * height) / 2;
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height} xmlns="http://www.w3.org/2000/svg">
  <path
    d={`M${width / 2} ${yOffset} L${width / 2} 0 L0 ${height / 2} L${width / 2} ${height} L${width / 2} ${height - yOffset} L${xOffset} ${height / 2}`} />
  <rect
    x={thickness}
    y={height / 2 - thickness / 2}
    width={width - thickness}
    height={thickness} />
</svg>
