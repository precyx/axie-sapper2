<script>
  import AxieAbilities from "../AxieAbilities.svelte";

  export let axie;
</script>

<style>

</style>

<div>

  {#if axie.parts}
    <div>
      <AxieAbilities parts={axie.parts} />
    </div>
  {/if}

</div>
