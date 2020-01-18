<script>
  import AxieAuction from "../AxieAuction.svelte";

  export let axie;
</script>

<style>

</style>

<div>

  {#if axie.auction}
    <div class="text-center p-2">
      <AxieAuction auction={axie.auction} />
    </div>
  {/if}

</div>
