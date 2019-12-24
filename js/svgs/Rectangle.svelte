<script>
  export let width = 12;
  export let height = 8;
  export let color = "#000000";

  export const NAME = "Rectangle";
  export const TAGS = ["Rectangle", "Rect", "Shape"];
  export const FILENAME = "rectangle.svg";
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height}>
  <rect {width} {height} />
</svg>
