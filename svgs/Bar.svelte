<script>
  export let width = 16;
  export let thickness = 2;
  export let color = "#ffffff";

  export const NAME = "Bar";
  export const TAGS = ["Bar", "Rect", "Line", "Shape"];
  export const FILENAME = "bar.svg";
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} height={thickness}>
  <rect {width} height={thickness} />
</svg>
