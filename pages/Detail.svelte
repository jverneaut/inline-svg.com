<script>
  import { afterUpdate } from "svelte";
  import { navigate } from "svelte-routing";

  import { svgs } from "../store";
  import List from "../components/List.svelte";
  import Editor from "../components/Editor.svelte";

  export let selectedSlug;

  $: component = svgs.filter(svg => svg.slug === selectedSlug)[0]
    ? svgs.filter(svg => svg.slug === selectedSlug)[0].component
    : null;

  afterUpdate(async () => {
    if (!component) {
      navigate("/404");
    }
  });
</script>

<div class="layout">
  <div class="layout__left">
    <List {selectedSlug} />
  </div>
  <div class="layout__center">
    <Editor {component} />
  </div>
</div>
