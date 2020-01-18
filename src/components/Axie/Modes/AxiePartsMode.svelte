<script>
  import AxieParts from "../AxieParts.svelte";

  export let axie;
</script>

<style>

</style>

<div>

  {#if axie.parts}
    <AxieParts parts={axie.parts} />
  {/if}

</div>
