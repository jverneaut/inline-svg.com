<script>
  import { svgs, collections, selectedSvg, searchInput } from "../store";
  import { fly } from "svelte/transition";
  import ListItem from "./ListItem.svelte";
  import Search from "./Search.svelte";
</script>

<div class="layout__left">
  <Search />
  {#if $searchInput === ''}
    <div
      class="lists"
      in:fly={{ y: 4, duration: 200, delay: 100 }}
      out:fly={{ y: 4, duration: 200 }}>
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
