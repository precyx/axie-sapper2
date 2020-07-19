<script>
  import Button from "../Misc/Button.svelte";
  import Axie from "./Axie.svelte";
  import AxieCard from "./AxieCard.svelte";
  import DynamicAxie from "./DynamicAxie.svelte";

  import Notice from "../Misc/Notice.svelte";
  import Title from "../Misc/Title.svelte";

  export let axies;
  export let total;
  export let onSelectAxie;
  export let loading = false;
  export let mode = "simple";

  let viewMode = true;

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

  .btn {
    display: inline-block;
  }

  @media only screen and (max-width: 1850px) {
    .axielist {
      width: 710px;
    }
  }
</style>

<div class="axielist">
  {#if !_axies || !_axies.length}
    <Notice>No Axies around...</Notice>
  {:else if _axies && _axies.length}
    <div class="titlebar flex items-center justify-between mt-2 mb-4">
      <Title>Axies {total}</Title>

      <div class="flex">

        <input type="checkbox" bind:checked={viewMode} />
        <div class=" mr-8">
          <Button class="btn_secondary btn" type="secondary">Grid</Button>
          <Button class="btn_secondary btn" type="secondary">List</Button>
        </div>
        <slot name="pagination" />
      </div>
    </div>

    {#if viewMode}
      <div class="axies" class:loading>
        {#each _axies as axie}
          <Axie type={mode} {axie} on:click={clickAxie(axie)} />
        {/each}
      </div>
    {:else}
      <div class="axies" class:loading>
        {#each _axies as axie}
          <DynamicAxie type={'parts'} {axie} />
        {/each}
      </div>
    {/if}

    <div class="mt-4 mb-4">
      <slot name="pagination" />
    </div>
  {/if}

</div>
