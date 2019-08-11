<script>
  import { selectedSvgIndex } from "../store";

  export let component = null;
  export let index;
  let renderedComponent = null;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;
</script>

<div class="list-item" on:click={() => selectedSvgIndex.set(index)}>
  <div class="list-item__img">
    <svelte:component this={component} bind:this={renderedComponent} />
  </div>
  <div class="list-item__title">{name}</div>
</div>
