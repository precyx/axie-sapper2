<script>
  import ClassFilter from "./ClassFilter.svelte";

  let classes = [
    { value: "Beast", name: "Beast" },
    { value: "Aquatic", name: "Aquatic" },
    { value: "Plant", name: "Plant" },
    { value: "Bird", name: "Bird" },
    { value: "Bug", name: "Bug" },
    { value: "Reptile", name: "Reptile" }
  ];

  export let defaultValues = {};
  export let onChange;

  let selectedValues = new Set();

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

<div class="classfilters">

  {#each classes as _class}
    <div>
      <ClassFilter
        defaultChecked={isChecked(defaultValues, _class.value)}
        label={_class.name}
        value={_class.value}
        onChange={handleChange} />
    </div>
  {/each}
</div>
