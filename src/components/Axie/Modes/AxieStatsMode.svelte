<script>
  import AxieStats from "../AxieStats.svelte";

  export let axie;
</script>

<style>

</style>

<div class="axie-stats-mode">

  {#if axie.stats != null}
    <AxieStats stats={axie.stats} />
  {/if}

</div>
