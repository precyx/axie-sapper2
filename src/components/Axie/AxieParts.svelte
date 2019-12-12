<script>
  import AxiePart from "./AxiePart.svelte";
  export let parts = [];
</script>

<style>
  .axieparts-list {
    display: flex;
    flex-flow: column;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
  }
</style>

<div class="axieparts">

  <div class="axieparts-list">
    {#each parts as part}
      <AxiePart {part} />
    {/each}
  </div>

</div>
