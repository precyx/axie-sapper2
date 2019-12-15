<script>
  import ClassFilter from "./ClassFilter.svelte";

  let num_mystics = [
    { value: null, name: "Any" },
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" }
  ];

  export let defaultValues = {};
  export let onChange;

  function handleChange(e) {
    if (onChange) onChange(e.target.value);
  }

  function isChecked(val, compareVal) {
    if (!val) return false;
    if (val == compareVal) return true;
    else return false;
  }
</script>

<style>

</style>

<div class="mysticfilters">

  {#each num_mystics as _mystic}
    <div>
      <input
        type="radio"
        id={_mystic.name}
        name={'a1'}
        value={_mystic.value}
        checked={isChecked(defaultValues, _mystic.value)}
        on:change={handleChange} />
      <label for={'a1'}>{_mystic.name}</label>
    </div>
  {/each}
</div>
