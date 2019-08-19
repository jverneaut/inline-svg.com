<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Detail from "./pages/Detail.svelte";

  import Test from "./svgs/index.js";

  import "./store/index.js";
</script>

<Router>
  <Link to="/">Home</Link>
  <Link to="/test">Detail</Link>
  <div>
    <Route path="/:svg" component={Detail} />
    <Route path="/" component={Home} />
  </div>
</Router>
