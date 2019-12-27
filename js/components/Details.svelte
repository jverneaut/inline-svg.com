<script>
  import { selectedSvg, searchInput } from '../store';
  import { afterUpdate, onMount } from 'svelte';
  import beautify from 'js-beautify';

  let renderedComponent = null;
  let svgCode = null;

  $: name = renderedComponent && renderedComponent.$$.ctx.NAME;
  $: filename = renderedComponent && renderedComponent.$$.ctx.FILENAME;
  $: tags = renderedComponent && renderedComponent.$$.ctx.TAGS;
  $: props =
    renderedComponent && renderedComponent.$$.props.filter(prop => prop !== prop.toUpperCase());

  $: derivedProps =
    props &&
    props.map(prop => {
      const value = renderedComponent.$$.ctx[prop];
      const type = typeof value;
      const inputType = type === 'number' ? 'number' : 'text';
      const unit = type === 'number' ? 'px' : 'color';
      const name = prop[0].toUpperCase() + prop.slice(1);
      return {
        value,
        inputType,
        name,
        unit,
        prop,
      };
    });

  let file;

  afterUpdate(async () => {
    svgCode = beautify.html(document.querySelector('.details__img').firstChild.outerHTML, {
      indent_size: 2,
    });

    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    file = url;
  });

  const changeProp = (prop, value, type) => {
    if (type === 'number') {
      renderedComponent[prop] = Number(value);
    } else {
      renderedComponent[prop] = value;
    }
  };

  const copyCode = () => {
    const temp = document.createElement('textarea');
    document.body.appendChild(temp);
    temp.textContent = svgCode;
    temp.select();
    document.execCommand('copy');
    temp.remove();
    alert('SVG copié avec succès');
    sendSvgCopy($selectedSvg.name);
  };

  const handleDownloadClick = () => {
    sendSvgDownload($selectedSvg.name);
  };
</script>

<div class="details">
  <div class="details__title">{name}</div>
  <div class="details__img">
    <svelte:component this={$selectedSvg.component} bind:this={renderedComponent} />
  </div>
  <div class="details__controls">
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
  <div class="details__code">
    <pre>{svgCode}</pre>
  </div>
  <a download={filename} href={file} class="detail__button" on:click={handleDownloadClick}>
    Télécharger au format SVG
  </a>
</div>

<!-- 
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
        <a
          href={``}
          on:click|preventDefault={() => searchInput.set(tag)}
          class="detail__keyword">
          {tag}
        </a>
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
    <a
      download={filename}
      href={file}
      class="detail__button"
      on:click={handleDownloadClick}>
      Télécharger au format SVG
    </a>
  </div>
</div> -->
