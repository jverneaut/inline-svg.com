<script>
  import { afterUpdate } from 'svelte';
  import { selectedSvgIndex, searchInput } from '../store';

  export let component = null;
  export let index;
  export let code;

  let renderedComponent = null;
  let container;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;

  $: afterUpdate(async () => {
    const attr = 'xmlns="http://www.w3.org/2000/svg"';
    if (!container.innerHTML.includes(attr) && name) {
      console.warn(
        'Icons should have the ' +
          attr +
          ' attribute set. Please check the code of ' +
          name +
          '.'
      );
    }
  });

  const handleClick = () => {
    selectedSvgIndex.set(index);
  };
</script>

<div
  class={`list-item${index === $selectedSvgIndex ? ' list-item--selected' : ''}`}
  on:click={handleClick}>
  <div class="list-item__img" bind:this={container}>
    <svelte:component this={component} bind:this={renderedComponent} />
  </div>
  <div class="list-item__title">{code}. {name}</div>
</div>
