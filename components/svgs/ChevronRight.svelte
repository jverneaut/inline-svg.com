<script>
  export let width = 10;
  export let height = 16;
  export let thickness = 2;
  export let color = "#ffffff";

  export const NAME = "Chevron Right";
  export const TAGS = ["Chevron", "Arrow"];
  export const FILENAME = "chevron_right.svg";

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
    d={`M${0} ${yOffset} L${0} 0 L${width} ${height / 2} L${0} ${height} L${0} ${height - yOffset} L${width - xOffset} ${height / 2}`} />
</svg>
