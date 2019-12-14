<script>
  import ClassFilter from "./ClassFilter.svelte";

  let classes = [
    { value: "beast", name: "Beast" },
    { value: "aquatic", name: "Aquatic" },
    { value: "plant", name: "Plant" },
    { value: "bird", name: "Bird" },
    { value: "bug", name: "Bug" },
    { value: "reptile", name: "Reptile" }
  ];

  export let onChange;

  let selectedValues = new Set();

  function handleChange(val) {
    if (selectedValues.has(val)) selectedValues.delete(val);
    else selectedValues.add(val);
    if (onChange) onChange(selectedValues);
  }
</script>

<style>

</style>

<div class="classfilters">
  {#each classes as _class}
    <div>
      <ClassFilter
        label={_class.name}
        value={_class.value}
        onChange={handleChange} />
    </div>
  {/each}
</div>
