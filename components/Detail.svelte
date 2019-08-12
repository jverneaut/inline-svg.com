<script>
  import { selectedSvg } from "../store";
  import { afterUpdate } from "svelte";
  import beautify from "js-beautify";

  let renderedComponent = null;
  let svgCode = null;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;
  $: filename = renderedComponent && renderedComponent.$$.ctx.FILENAME;
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

  let file;

  afterUpdate(async () => {
    svgCode = beautify.html(
      document.querySelector(".detail__img").firstChild.outerHTML,
      { indent_size: 2 }
    );
    file = "data:application/octet-stream;base64," + window.btoa(svgCode);
  });

  const changeProp = (prop, value, type) => {
    if (type === "number") {
      renderedComponent[prop] = Number(value);
    } else {
      renderedComponent[prop] = value;
    }
  };

  const copyCode = () => {
    const temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.textContent = svgCode;
    temp.select();
    document.execCommand("copy");
    temp.remove();
    alert("SVG copié avec succès");
  };
</script>

<div class="layout__center">
  <div class="detail">
    <div class="detail__title">{name}</div>
    <div class="detail__img">
      <svelte:component
        this={$selectedSvg.component}
        bind:this={renderedComponent} />
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
      <button class="detail__button detail__button-primary" on:click={copyCode}>
        Copier le code
      </button>
      <a download={filename} href={file} class="detail__button">
        Télécharger au format SVG
      </a>
    </div>
  </div>
  <div class="layout__bottom">
    <div class="layout__bottom-credits">
      Built with Svelte 3 by
      <a target="_blank" href="https://www.julienverneaut.com/">
        Julien Verneaut
      </a>
      .
    </div>
    <div class="layout__bottom-links">
      Source code on &nbsp;
      <a target="_blank" href="https://github.com/jverneaut/inline-svg.com">
        Github
      </a>
    </div>
  </div>
</div>
