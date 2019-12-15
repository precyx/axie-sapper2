<script>
  import { ColorMap } from "../../services/AxieModelService.js";

  export let label;
  export let value;

  export let defaultChecked;
  export let onChange;
  export let axieClass;

  $: iconName = axieClass ? axieClass.toLowerCase() + "_24px" : "";
  $: color = ColorMap[axieClass] || "#ff00aa";

  function handleChange(e) {
    if (onChange) onChange(e.target.value);
  }
</script>

<style>
  .icon {
    --color: black;

    background: var(--color);
    width: 24px;
    height: 24px;
  }
</style>

<div class="classfilter">
  <input
    id="check_{value}"
    type="checkbox"
    {value}
    checked={defaultChecked}
    on:change={handleChange} />
  <label for={'check_' + value}>

    <img
      src={'./images/parts/' + iconName + '.svg'}
      alt="icon"
      class="icon"
      style="--color:{color}" />
    <span>{label}</span>
  </label>

</div>
