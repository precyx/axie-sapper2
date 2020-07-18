<script>
  import CloseIcon from "../Misc/Icons/general/close.svelte";

  import Button from "../Misc/Button.svelte";
  import ClassFilters from "./ClassFilters.svelte";
  import MysticFilters from "./MysticFilters.svelte";
  import StageFilters from "./StageFilters.svelte";
  import PurenessFilters from "./PurenessFilters.svelte";
  import TagFilters from "./TagFilters.svelte";
  import RegionFilters from "./RegionFilters.svelte";

  import { filters, filtersToggled } from "../../store/store.js";

  let toggled = $filtersToggled;

  $: _filters = $filters;

  $: console.log("--", _filters);

  let toggleFilterMaster = () => {
    toggled = !toggled;
    filtersToggled.update(t => {
      return !t;
    });
  };

  let setFilterVal = (id, val) => {
    filters.update(t => {
      let newVal = val;
      if (newVal == "any") newVal = null;
      return { ...t, [id]: newVal };
    });
  };

  let resetFilters = () => {
    pureness = null;
    mystic = null;
    tag = [];
    region = [];
    stages = [];
    classes = [];
  };

  let onChangeFilter = (label, val) => {
    console.log("onchange", label, val);
    setFilterVal(label, val);
  };

  let pureness = $filters["pureness"];
  $: onChangeFilter("pureness", pureness);

  let mystic = $filters["numMystic"];
  $: onChangeFilter("numMystic", mystic);

  let stages = $filters["stages"];
  $: onChangeFilter("stages", stages);

  let classes = $filters["classes"];
  $: onChangeFilter("classes", classes);

  let tag = $filters["title"];
  $: onChangeFilter("title", tag);

  let region = $filters["region"];
  $: onChangeFilter("region", region);
</script>

<style>
  .filtermaster {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 0 8px 8px 0;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    margin-top: 50px;
    height: calc(100vh - 110px);
    overflow-y: auto;
    z-index: 10000;

    position: fixed;
    bottom: 0;
    width: 300px;

    transition: height 0.2s ease;

    color: var(--color-dark-1);
    font-size: 14px;
  }

  .filtermaster.toggled {
    height: 70px;
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
    opacity: 0.8;
  }

  .toggler:hover {
    opacity: 1;
  }

  .filtermaster .toggler :global(svg) {
    fill: rgb(var(--color-black));
  }

  .topbar {
    display: flex;
    justify-content: space-between;
  }

  .link {
    color: rgb(var(--color-primary-1000));
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .link:hover {
    color: rgb(var(--color-primary-900));
  }

  @media only screen and (max-width: 1850px) {
    .filtermaster {
    }
  }
</style>

<div class="filtermaster bg-light-1" class:toggled>

  {#if toggled}
    <div>
      <div class="toggler" on:click={toggleFilterMaster}>
        <CloseIcon />
      </div>
    </div>
  {:else}
    <div class="topbar">
      <div class="toggler" on:click={toggleFilterMaster}>
        <CloseIcon />
      </div>
      <div class="link" on:click={resetFilters}>Reset</div>
    </div>
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
  {/if}

</div>
