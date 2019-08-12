<script>
  import { searchInput, searchResults } from "../store";
  import ListItem from "./ListItem.svelte";
</script>

<div class="search">
  <input
    class="search__input"
    type="text"
    bind:value={$searchInput}
    placeholder="Search..." />
  {#if $searchInput !== ''}
    <div class="search__results">
      <div class="list-title">Résultats</div>
      <div class="list">
        {#if $searchResults.length}
          {#each $searchResults as result}
            <ListItem component={result.component} index={result.index} />
          {/each}
        {:else}
          <div class="search__error">
            No results found for query
            <span class="search__error-query">{$searchInput}.</span>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
