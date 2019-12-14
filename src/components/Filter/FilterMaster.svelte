<script>
  import ClassFilters from "./ClassFilters.svelte";

  function handleChange(vals) {
    console.log("change", vals);
  }
</script>

<div class="filtermaster">
  Filter Master
  <ClassFilters onChange={handleChange} />
</div>
