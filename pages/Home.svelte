<script>
  import { svgs, collections } from "../store";
  import { Link } from "svelte-routing";
</script>

<h1>This will be Inline Svg's landing page</h1>
<Link to={svgs[0].slug}>Go to app</Link>
