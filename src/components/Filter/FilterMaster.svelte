<script>
  import CloseIcon from "../Misc/Icons/general/close.svelte";

  import Button from "../Misc/Button.svelte";
  import ClassFilters from "./ClassFilters.svelte";
  import MysticFilters from "./MysticFilters.svelte";
  import StageFilters from "./StageFilters.svelte";
  import PurenessFilters from "./PurenessFilters.svelte";
  import TagFilters from "./TagFilters.svelte";
  import RegionFilters from "./RegionFilters.svelte";
  import Checkbox from "../Misc/Checkbox.svelte";
  import Checkbox2 from "../Misc/Checkbox2.svelte";
  import Checkbox3 from "../Misc/Checkbox3.svelte";
  import { arraysEqual } from "../../utils/Utils";

  import { filters, filtersToggled } from "../../store/store.js";

  let toggled = $filtersToggled;

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

  let onChangeFilter = (id, val) => {
    console.log("onchange", id, val);
    setFilterVal(id, val);
  };

  /**
   * Known problem
   * Reactivity updates twice when binding array or object
   * @see - Issue #4265 - https://github.com/sveltejs/svelte/issues/4265
   */

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
  .container {
    position: relative;
  }

  .filtermaster {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 0 8px 8px 0;
    border-radius: 8px;
    padding: 20px;

    overflow-y: auto;
    z-index: 10000;

    color: var(--color-dark-1);
    font-size: 14px;
  }

  .filtermaster,
  .container {
    /*margin-top: 50px;*/
    width: 100%;
    height: calc(100vh - 80px);
    position: fixed;
    bottom: 0;
    width: 300px;
  }

  .filtermaster.toggled,
  .container.toggled {
    height: 70px;
    margin-bottom: -15px;
  }

  .filtertitle {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--color-dark-2);
  }

  .toggler {
    display: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    opacity: 0.8;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 2px #00000030;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    right: -12px;
    z-index: 50000;
  }

  .container:hover .toggler {
    display: flex;
  }

  .toggler:hover {
    opacity: 1;
  }

  .toggler :global(svg) {
    width: 20px;
    fill: var(--color-dark-1);
  }

  .topbar {
    display: flex;
    justify-content: flex-end;
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
    /*.filtermaster {
    }*/
  }
</style>

<div class="container" class:toggled>

  <div class="toggler bg-light-1" on:click={toggleFilterMaster}>
    <CloseIcon />
  </div>

  <div class="filtermaster bg-light-1" class:toggled>

    {#if toggled}
      <div />
    {:else}
      <div class="topbar">
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
</div>
