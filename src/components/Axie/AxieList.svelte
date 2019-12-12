<script>
  import Axie from "./Axie.svelte";

  import Notice from "../Misc/Notice.svelte";
  import Title from "../Misc/Title.svelte";

  export let axies;
  export let total;
  export let onSelectAxie;
  export let loading = false;
  export let mode = "simple";

  $: _axies = axies;

  $: console.log("axies", axies);

  const clickAxie = axie => x => {
    if (onSelectAxie) onSelectAxie(axie);
  };
</script>

<style>
  .axielist {
    width: 850px;
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
    <Title>Axies {total}</Title>
    <div class="axies" class:loading>
      {#each _axies as axie}
        <Axie type={mode} {axie} on:click={clickAxie(axie)} />
      {/each}
    </div>
  {/if}

</div>
