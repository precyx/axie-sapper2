<script>
  import Axie from "./Axie.svelte";

  import Notice from "../Misc/Notice.svelte";
  import Title from "../Misc/Title.svelte";

  export let axies;
  export let total;
  export let onSelectAxie;
  export let loading = false;
  export let mode = "simple";

  export let selectedAxie;

  $: _axies = axies;

  const clickAxie = axie => x => {
    /*if (onSelectAxie) onSelectAxie(axie);*/
    selectedAxie = axie;
  };
</script>

<style>
  .axielist {
    width: 950px;
  }

  .axies {
    display: flex;
    flex-flow: wrap;
    margin: 0 -5px;
  }

  .loading {
    opacity: 0.55;
  }
</style>

<div class="axielist">
  {#if !_axies || !_axies.length}
    <Notice>No Axies around...</Notice>
  {:else if _axies && _axies.length}
    <div class="titlebar flex items-center justify-between mt-2 mb-4">
      <Title>Axies {total}</Title>

      <slot name="pagination" />
    </div>
    <div class="axies" class:loading>
      {#each _axies as axie}
        <Axie type={mode} {axie} on:click={clickAxie(axie)} />
      {/each}
    </div>
  {/if}

</div>
