<script>
  import A from "../components/A.svelte";
  import Headbar from "../components/Misc/Headbar.svelte";

  import _ from "lodash";

  let a = "Test value #001";

  console.log("lodash", _);

  var array = [1, 2, 3];

  _.fill(array, "sdsdfs");

  console.log("a", array);
</script>

<h1>{a}</h1>

<Headbar />
