<script>
  export let width = 24;
  export let height = 16;
  export let thickness = 2;
  export let color = "#000000";

  export const NAME = "Menu";
  export const TAGS = ["Menu", "Hamburger"];
  export const FILENAME = "menu.svg";
</script>

<svelte:options accessors={true} />
<svg fill={color} {width} {height}>
  <rect {width} height={thickness} />
  <rect {width} height={thickness} y={height / 2 - thickness / 2} />
  <rect {width} height={thickness} y={height - thickness} />
</svg>
