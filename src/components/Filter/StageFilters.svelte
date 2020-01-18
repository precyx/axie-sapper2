<script>
  import Checkbox from "../Misc/Checkbox.svelte";

  let stages = [
    { value: "1", name: "Egg" },
    { value: "2", name: "Larva" },
    { value: "3", name: "Petite" },
    { value: "4", name: "Adult" }
  ];

  export let defaultValues = {};
  export let onChange;

  function handleChange(val) {
    if (onChange) onChange(val);
  }

  function isChecked(val, compareVal) {
    if (!val) return false;
    if (val.size && val.has(compareVal)) return true;
    else return false;
  }
</script>

<style>

</style>

<div class="stagefilters">

  {#each stages as _stage}
    <div>

      <Checkbox
        value={_stage.value}
        checked={isChecked(defaultValues, _stage.value)}
        onChange={handleChange}>
        {_stage.name}
      </Checkbox>

    </div>
  {/each}
</div>
