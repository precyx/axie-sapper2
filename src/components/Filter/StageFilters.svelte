<script>
  let stages = [
    { value: "1", name: "Egg" },
    { value: "2", name: "Larva" },
    { value: "3", name: "Petite" },
    { value: "4", name: "Adult" }
  ];

  export let defaultValues = {};
  export let onChange;

  function handleChange(e) {
    if (onChange) onChange(e.target.value);
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

      <input
        id="check_{_stage.value}"
        type="checkbox"
        value={_stage.value}
        checked={isChecked(defaultValues, _stage.value)}
        on:change={handleChange} />
      <label for={'check_' + _stage.value}>{_stage.name}</label>

    </div>
  {/each}
</div>
