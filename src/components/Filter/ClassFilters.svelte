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

  export let group = [];
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
      bind:group
      label={_class.name}
      value={_class.value}
      axieClass={_class.className} />
  {/each}
</div>
