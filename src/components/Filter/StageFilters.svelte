<script>
  import Checkbox from "../Misc/Checkbox.svelte";

  let stages = [
    { value: "1", name: "Egg" },
    { value: "2", name: "Larva" },
    { value: "3", name: "Petite" },
    { value: "4", name: "Adult" }
  ];

  export let group = [];
</script>

<style>

</style>

<div class="stagefilters">

  {#each stages as _stage}
    <div>
      <Checkbox value={_stage.value} bind:group>{_stage.name}</Checkbox>
    </div>
  {/each}
</div>
