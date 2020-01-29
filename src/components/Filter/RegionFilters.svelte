<script>
  import Checkbox from "../Misc/Checkbox.svelte";

  let regions = [{ value: "japan", name: "Japan" }];

  export let group = [];
</script>

<style>

</style>

<div class="regionfilters">
  {#each regions as _region}
    <div>
      <Checkbox value={_region.value} bind:group>{_region.name}</Checkbox>
    </div>
  {/each}
</div>
