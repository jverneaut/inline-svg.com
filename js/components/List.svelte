<script>
  import { svgs, collections } from '../store';

  import ListItem from './ListItem.svelte';
</script>

<div class="lists">
  {#each collections as collection, collectionIndex}
    <div class="list-title">{collection.name}</div>
    <div class="list">
      {#each collection.svgs as svg, svgIndex}
        <ListItem
          component={svg}
          index={collection.baseIndex + svgIndex}
          code={collectionIndex.toString() + (svgIndex + 1).toString().padStart(2, '0')} />
      {/each}
    </div>
  {/each}
</div>
