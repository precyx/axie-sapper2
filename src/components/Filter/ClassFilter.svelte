<script>
  import { onMount } from "svelte";
  import { ColorMap } from "../../services/AxieModelService.js";

  import Aquatic from "../Misc/Icons/parts-simple/Aquatic.svelte";
  import Beast from "../Misc/Icons/parts-simple/Beast.svelte";
  import Plant from "../Misc/Icons/parts-simple/Plant.svelte";

  import Reptile from "../Misc/Icons/parts-simple/Reptile.svelte";
  import Bird from "../Misc/Icons/parts-simple/Bird.svelte";
  import Bug from "../Misc/Icons/parts-simple/Bug.svelte";

  import Mech from "../Misc/Icons/parts-simple/Mech.svelte";
  import Dusk from "../Misc/Icons/parts-simple/Dusk.svelte";
  import Dawn from "../Misc/Icons/parts-simple/Dawn.svelte";

  import Checkbox from "../Misc/Checkbox.svelte";

  const iconComponents = {
    aquatic: Aquatic,
    beast: Beast,
    plant: Plant,
    reptile: Reptile,
    bird: Bird,
    bug: Bug,
    mech: Mech,
    dawn: Dawn,
    dusk: Dusk
  };

  export let group;
  export let label;
  export let value;

  export let axieClass;

  $: iconName = axieClass ? axieClass.toLowerCase() + "_24px" : "";
  $: color = ColorMap[axieClass] || "#ff00aa";
</script>

<style>
  .outer {
    width: 100px;
  }
  .classfilter {
    --color: black;
    display: inline-flex;
    padding-right: 10px;
    cursor: pointer;
    align-items: center;
  }
  .icon {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }

  .classfilter :global(svg) {
    fill: var(--color);
    width: 18px;
    height: 18px;
  }
</style>

<div class="outer">
  <div class="classfilter flex" style={'--color:' + color}>

    <Checkbox val="X" bind:group {value}>
      <div class="icon flex">
        <svelte:component this={iconComponents[axieClass]} />
      </div>
      {label}
    </Checkbox>
  </div>
</div>
