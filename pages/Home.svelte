<script>
  import { svgs, collections } from "../store";
  import { Link } from "svelte-routing";
</script>

{#each collections as collection}
  {collection}
  {#each svgs.filter(svg => svg.collection === collection) as svg}
    <Link to="/{svg.slug}">{svg.name}</Link>
    <br />
  {/each}
{/each}
