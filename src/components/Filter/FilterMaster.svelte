<script>
  import ClassFilters from "./ClassFilters.svelte";
  import MysticFilters from "./MysticFilters.svelte";
  import StageFilters from "./StageFilters.svelte";

  import { filters } from "../../store/store.js";

  $: _filters = $filters;

  $: console.log("--", _filters);

  let handleChange = (id, uiType) => val => {
    filters.update(t => {
      let newVal = t[id];

      if (uiType == "set") {
        newVal = new Set(t[id]);
        if (newVal.has(val)) newVal.delete(val);
        else newVal.add(val);
        if (!newVal.size) newVal = null;
      } else if (uiType == "singleValue") {
        newVal = val;
      }

      return { ...t, [id]: newVal };
    });
  };
</script>

<style>
  .filtermaster {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    padding: 20px;

    color: var(--color-dark-1);
    font-size: 14px;
  }

  .filtertitle {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--color-dark-2);
  }
</style>

<div class="filtermaster bg-light-1">

  <div class="mb-2">
    <div class="filtertitle">Classes</div>
    <ClassFilters
      defaultValues={_filters['classes']}
      onChange={handleChange('classes', 'set')} />
  </div>

  <div class="mb-2">
    <div class="filtertitle">Stages</div>
    <StageFilters
      defaultValues={_filters['stages']}
      onChange={handleChange('stages', 'set')} />
  </div>

  <div class="mb-2">
    <div class="filtertitle">Num Mystics</div>
    <MysticFilters
      defaultValues={_filters['numMystic']}
      onChange={handleChange('numMystic', 'singleValue')} />
  </div>

</div>
