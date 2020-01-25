<script>
  import Axie from "./Axie.svelte";
  import { getParentsBrief } from "../../services/AxieDataService.js";

  export let axie;
  export let onClickParent;

  let parents = {};

  $: loadParents(axie);

  const _onClickParent = axie => () => {
    if (onClickParent) onClickParent(axie);
  };

  async function loadParents(axie) {
    if (axie && axie.matronId && axie.sireId) {
      parents = {};
      await window.setTimeout(() => {}, 0);
      let result = await getParentsBrief({
        matronId: axie.matronId,
        sireId: axie.sireId
      });
      parents = result.data;
      console.log("Parents", result);
    }
  }
</script>

<style>

</style>

<div class="axie-parents">

  {#if parents.sire}
    <Axie axie={parents.sire} on:click={_onClickParent(parents.sire)} />
  {/if}
  {#if parents.matron}
    <Axie axie={parents.matron} on:click={_onClickParent(parents.matron)} />
  {/if}

</div>
