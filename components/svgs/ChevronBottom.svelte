<script>
  export let width = 16;
  export let height = 10;
  export let thickness = 2;
  export let color = "#ffffff";

  export const NAME = "Chevron Bottom";
  export const TAGS = ["Chevron", "Arrow"];
  export const FILENAME = "chevron_bottom.svg";

  $: aire = (width * height) / 4;
  $: base = Math.sqrt((width / 2) * (width / 2) + height * height);
  $: hauteur = (2 * aire) / base;
  $: ratio = thickness / hauteur;
  $: xOffset = (ratio * width) / 2;
  $: yOffset = height * ratio;
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height}>
  <path
    d={`M${xOffset} ${0} L0 ${0} L${width / 2} ${height} L${width} 0 L${width - xOffset} 0 L${width / 2} ${height - yOffset}`} />
</svg>
