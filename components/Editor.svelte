<script>
  export let component;

  let renderedComponent;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;
  $: filename = renderedComponent && renderedComponent.$$.ctx.FILENAME;
  $: filename = renderedComponent && renderedComponent.$$.ctx.FILENAME;
  $: tags = renderedComponent && renderedComponent.$$.ctx.TAGS;
  $: props =
    renderedComponent &&
    renderedComponent.$$.props.filter(prop => prop.toUpperCase() !== prop);
</script>

<div class="detail">
  <div class="detail__title">{name}</div>
  <div class="detail__img">
    <svelte:component this={component} bind:this={renderedComponent} />
  </div>
  {#if props}
    {#each props as prop}
      {#if typeof renderedComponent[prop] === 'number'}
        <div class="control">
          <label>{prop[0].toUpperCase() + prop.slice(1)}</label>
          <input
            type="number"
            class="control__input"
            value={renderedComponent[prop]}
            bind:value={renderedComponent[prop]} />
          <div class="control-unit">px</div>
        </div>
      {:else}
        <div class="control">
          <label>{prop[0].toUpperCase() + prop.slice(1)}</label>
          <input
            type="text"
            class="control__input"
            value={renderedComponent[prop]}
            bind:value={renderedComponent[prop]} />
          <div class="control-unit">color</div>
        </div>
      {/if}
    {/each}
  {/if}
</div>
