<script>
  import Button from "../Misc/Button.svelte";
  import Axie from "./Axie.svelte";
  import AxieCard from "./AxieCard.svelte";
  import DynamicAxie from "./DynamicAxie.svelte";

  import Notice from "../Misc/Notice.svelte";
  import Loader from "../UI/Loader.svelte";
  import Title from "../Misc/Title.svelte";

  import { _selectedAxie } from "../../store/store.js";

  export let infobarTitle;
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
    //selectedAxie = axie;

    // trigger store
    _selectedAxie.update(t => {
      return axie;
    });
  };
</script>

<style>
  .axielist {
    width: 950px;
  }

  .infobar {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-dark-1);
    font-size: 12px;
    letter-spacing: 1px;
    opacity: 0.5;
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
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else if _axies && _axies.length}
    {#if loading}
      <div
        class="absolute"
        style="left:50%; margin-left:-30px; z-index:1000; top:50%;
        margin-top:-30px;">
        <Loader />
      </div>
    {/if}
    <div class="infobar">{infobarTitle}</div>
    <div class="titlebar flex items-center justify-between mt-2 mb-4">
      <Title>Axies {total}</Title>

      <div class="flex">

        {#if false}
          <input type="checkbox" bind:checked={viewMode} />
          <div class=" mr-8">
            <Button class="btn_secondary btn" type="secondary">Grid</Button>
            <Button class="btn_secondary btn" type="secondary">List</Button>
          </div>
        {/if}
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
