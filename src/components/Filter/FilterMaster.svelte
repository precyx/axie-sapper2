<script>
  import ClassFilters from "./ClassFilters.svelte";
  import MysticFilters from "./MysticFilters.svelte";
  import StageFilters from "./StageFilters.svelte";
  import PurenessFilters from "./PurenessFilters.svelte";
  import TagFilters from "./TagFilters.svelte";
  import RegionFilters from "./RegionFilters.svelte";

  import { filters } from "../../store/store.js";

  let toggled = false;

  $: _filters = $filters;

  $: console.log("--", _filters);

  let toggleFilterMaster = () => {
    toggled = !toggled;
  };

  let setFilterVal = (id, val) => {
    filters.update(t => {
      let newVal = val;
      if (newVal == "any") newVal = null;
      return { ...t, [id]: newVal };
    });
  };

  let pureness = $filters["pureness"];
  $: if (pureness) {
    console.log("change pureness", pureness);
    setFilterVal("pureness", pureness);
  }

  let mystic = $filters["numMystic"];
  $: if (mystic) {
    console.log("mystic change", mystic);
    setFilterVal("numMystic", mystic);
  }

  let stages = $filters["stages"];
  $: if (stages) {
    console.log("stages change", stages);
    setFilterVal("stages", stages);
  }

  let classes = $filters["classes"];
  $: if (classes) {
    console.log("classes change", classes);
    setFilterVal("classes", classes);
  }

  let tag = $filters["title"];
  $: if (tag) {
    console.log("tag change", tag);
    setFilterVal("title", tag);
  }

  let region = $filters["region"];
  $: if (region) {
    console.log("region change", region);
    setFilterVal("region", region);
  }
</script>

<style>
  .filtermaster {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 0 8px 8px 0;
    padding: 20px;
    width: 300px;
    margin-left: 0;

    color: var(--color-dark-1);
    font-size: 14px;
  }

  .filtermaster.toggled {
    width: 60px;
  }

  .filtertitle {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--color-dark-2);
  }

  .toggler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
</style>

<div class="filtermaster bg-light-1" class:toggled>

  <div>
    <div class="toggler" on:click={toggleFilterMaster}>X</div>
  </div>

  {#if !toggled}
    <div>
      <div class="mb-2">
        <div class="filtertitle">Classes</div>
        <ClassFilters bind:group={classes} />
      </div>

      <div class="mb-2">
        <div class="filtertitle">Stages</div>
        <StageFilters bind:group={stages} />
      </div>

      <div class="mb-2">
        <div class="filtertitle">Num Mystics</div>
        <MysticFilters bind:group={mystic} />
      </div>
      <div class="mb-2">
        <div class="filtertitle">Pureness</div>
        <PurenessFilters bind:group={pureness} />
      </div>
      <div class="mb-2">
        <div class="filtertitle">Tag</div>
        <TagFilters bind:group={tag} />
      </div>
      <div class="mb-2">
        <div class="filtertitle">Region</div>
        <RegionFilters bind:group={region} />
      </div>
    </div>
  {:else}{/if}

</div>
