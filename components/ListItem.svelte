<script>
  import { selectedSvgIndex, searchInput } from "../store";
  import { sendPageView } from "../analytics.js";

  export let component = null;
  export let index;
  let renderedComponent = null;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;

  const handleClick = () => {
    selectedSvgIndex.set(index);
    sendPageView(name, "/");
  };
</script>

<div
  class={`list-item${index === $selectedSvgIndex ? ' list-item--selected' : ''}`}
  on:click={handleClick}>
  <div class="list-item__img">
    <svelte:component this={component} bind:this={renderedComponent} />
  </div>
  <div class="list-item__title">{name}</div>
</div>
