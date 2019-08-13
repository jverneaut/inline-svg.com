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
    <div class="search__delete-btn" on:click={() => searchInput.set('')}>
      <svg fill="#ffffff" width="12" height="12">
        <path
          d="M1.414213562373095 0 12 10.585786437626904 L10.585786437626904 12
          L0 1.414213562373095" />
        <path
          d="M10.585786437626904 0 L12 1.414213562373095 L1.414213562373095 12
          L0 10.585786437626904" />
      </svg>
    </div>
  {/if}
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
