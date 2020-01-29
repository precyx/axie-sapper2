<script>
  import Checkbox from "../Misc/Checkbox.svelte";

  let tags = [
    { value: "origin", name: "Origin" },
    { value: "meo", name: "MEO" }
  ];

  export let group = [];
</script>

<style>

</style>

<div class="tagfilters">
  {#each tags as _tag}
    <div>
      <Checkbox value={_tag.value} bind:group>{_tag.name}</Checkbox>
    </div>
  {/each}
</div>
