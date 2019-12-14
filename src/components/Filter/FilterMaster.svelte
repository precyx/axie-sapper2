<script>
  import ClassFilters from "./ClassFilters.svelte";
  import { filters } from "../../store/store.js";

  $: _filters = $filters;

  $: console.log("--", _filters);

  let handleChange = type => val => {
    filters.update(t => {
      let newVal = new Set(t[type]);
      if (newVal.has(val)) newVal.delete(val);
      else newVal.add(val);

      return { ...t, [type]: newVal };
    });
  };
</script>

<style>
  .filtermaster {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    padding: 20px;
  }
</style>

<div class="filtermaster bg-light-1">
  <h1>Filter Master</h1>
  <ClassFilters
    defaultValues={_filters['classes']}
    onChange={handleChange('classes')} />
</div>
