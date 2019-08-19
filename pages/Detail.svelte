<script>
  import { afterUpdate } from "svelte";
  import { svgs } from "../store";
  import { navigate } from "svelte-routing";

  export let svgName;

  $: component = svgs.filter(svg => svg.slug === svgName)[0]
    ? svgs.filter(svg => svg.slug === svgName)[0].component
    : null;

  afterUpdate(async () => {
    if (!component) {
      navigate("/404");
    }
  });
</script>

<svelte:component this={component} />
