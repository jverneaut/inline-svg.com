<script>
  import { svgs } from "../store";
  import { Link } from "svelte-routing";
</script>

{#each svgs as svg}
  <Link to="/{svg.slug}">{svg.name}</Link>
{/each}
