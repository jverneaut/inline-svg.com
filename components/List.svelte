<script>
  import { svgs, selectedSvg } from "../store";
  import ListItem from "./ListItem.svelte";
</script>

<div class="layout__left">
  <div class="lists">
    <div class="list-title">Misc</div>
    <div class="list">
      {#each svgs as svg, svgIndex}
        <ListItem component={svg} index={svgIndex} />
      {/each}
    </div>
  </div>
</div>
