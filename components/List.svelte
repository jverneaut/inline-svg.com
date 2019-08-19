<script>
  import { svgs, collections } from "../store";
  import { Link } from "svelte-routing";

  export let selectedSlug;
</script>

<div class="lists">
  {#each collections as collection}
    <div class="list-title">{collection}</div>
    <div class="list">
      {#each svgs.filter(svg => svg.collection === collection) as svg}
        <Link
          to="/{svg.slug}"
          getProps={() => ({ class: `list-item${selectedSlug === svg.slug ? ' list-item--selected' : ''}` })}>
          <div class="list-item__img">
            <svelte:component this={svg.component} />
          </div>
          <div class="list-item__title">{svg.name}</div>
        </Link>
      {/each}
    </div>
  {/each}
</div>
