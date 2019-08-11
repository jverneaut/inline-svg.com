<script>
  export let width = 10;
  export let height = 16;
  export let thickness = 2;
  export let color = "#ffffff";

  export const NAME = "Chevron Left";
  export const TAGS = ["Chevron", "Arrow"];
  export const FILENAME = "chevron_left.svg";

  $: aire = (width * height) / 4;
  $: base = Math.sqrt((height / 2) * (height / 2) + width * width);
  $: hauteur = (2 * aire) / base;
  $: ratio = thickness / hauteur;
  $: xOffset = width * ratio;
  $: yOffset = (ratio * height) / 2;
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height}>
  <path
    d={`M${width} ${yOffset} L${width} 0 L0 ${height / 2} L${width} ${height} L${width} ${height - yOffset} L${xOffset} ${height / 2}`} />
</svg>
