<script>
  import ClassFilter from "./ClassFilter.svelte";

  let classes = [
    { value: "Beast", name: "Beast", className: "beast" },
    { value: "Aquatic", name: "Aquatic", className: "aquatic" },
    { value: "Plant", name: "Plant", className: "plant" },
    { value: "Bird", name: "Bird", className: "bird" },
    { value: "Bug", name: "Bug", className: "bug" },
    { value: "Reptile", name: "Reptile", className: "reptile" },
    { value: "Hidden_1", name: "Mech", className: "mech" },
    { value: "Hidden_2", name: "Dawn", className: "dawn" },
    { value: "Hidden_3", name: "Dusk", className: "dusk" }
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
  .classfilters {
    display: flex;
    flex-flow: wrap;
  }
</style>

<div class="classfilters">

  {#each classes as _class}
    <ClassFilter
      defaultChecked={isChecked(defaultValues, _class.value)}
      label={_class.name}
      value={_class.value}
      axieClass={_class.className}
      onChange={handleChange} />
  {/each}
</div>
