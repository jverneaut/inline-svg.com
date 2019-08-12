<script>
  export let width = 12;
  export let height = 8;
  export let color = "#ffffff";

  export const NAME = "Rectangle";
  export const TAGS = ["Rectangle", "Rect"];
  export const FILENAME = "rectangle.svg";
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height}>
  <rect {width} {height} />
</svg>
