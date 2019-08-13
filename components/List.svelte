<script>
  import { svgs, collections, selectedSvg, searchInput } from "../store";
  import ListItem from "./ListItem.svelte";
  import Search from "./Search.svelte";
</script>

<div class="layout__left">
  <Search />
  {#if $searchInput === ''}
    <div class="lists">
      {#each collections as collection, collectionOndex}
        <div class="list-title">{collection.name}</div>
        <div class="list">
          {#each collection.svgs as svg, svgIndex}
            <ListItem component={svg} index={collection.baseIndex + svgIndex} />
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</div>
