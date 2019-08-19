<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Detail from "./pages/Detail.svelte";
  import Error404 from "./pages/404.svelte";

  import "./store/index.js";
</script>

<Router>
  <div>
    <Route path="/404" component={Error404} />
    <Route path="/:selectedSlug" component={Detail} />
    <Route path="/" component={Home} />
  </div>
</Router>
