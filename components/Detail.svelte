<script>
  import { selectedSvg } from "../store";
  import { afterUpdate } from "svelte";
  import beautify from "js-beautify";

  let renderedComponent = null;
  let svgCode = null;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;
  $: tags = renderedComponent && renderedComponent.$$.ctx.TAGS;
  $: props =
    renderedComponent &&
    renderedComponent.$$.props.filter(prop => prop !== prop.toUpperCase());

  $: derivedProps =
    props &&
    props.map(prop => {
      const value = renderedComponent.$$.ctx[prop];
      const type = typeof value;
      const inputType = type === "number" ? "number" : "text";
      const unit = type === "number" ? "px" : "color";
      const name = prop[0].toUpperCase() + prop.slice(1);
      return {
        value,
        inputType,
        name,
        unit,
        prop
      };
    });

  afterUpdate(async () => {
    svgCode = beautify.html(
      document.querySelector(".detail__img").firstChild.outerHTML,
      { indent_size: 2 }
    );
  });

  const changeProp = (prop, value, type) => {
    if (type === "number") {
      renderedComponent[prop] = Number(value);
    } else {
      renderedComponent[prop] = value;
    }
  };
</script>

<div class="layout__center">
  <div class="detail">
    <div class="detail__title">{name}</div>
    <div class="detail__img">
      <svelte:component this={$selectedSvg} bind:this={renderedComponent} />
    </div>
    <div class="detail__controls">
      {#if derivedProps}
        {#each derivedProps as prop}
          <div class="control">
            <label for="">{prop.name}</label>
            <input
              on:input={e => changeProp(prop.prop, e.target.value, prop.inputType)}
              type={prop.inputType}
              class="control__input"
              value={prop.value} />
            <div class="control__unit">{prop.unit}</div>
          </div>
        {/each}
      {/if}
    </div>
    <div class="detail__keywords-title">Keywords</div>
    <div class="detail__keywords">
      {#if tags}
        {#each tags as tag}
          <a href="" class="detail__keyword">{tag}</a>
        {/each}
      {/if}
    </div>
    <div class="detail__code">
      <pre>{svgCode}</pre>
    </div>
    <div class="detail__buttons">
      <button class="detail__button detail__button-primary">
        Copier le code
      </button>
      <button class="detail__button">Télécharger en SVG</button>
      <button class="detail__button">Télécharger en png</button>
    </div>
  </div>
</div>
