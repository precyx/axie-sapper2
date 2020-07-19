<script>
  import CloseIcon from "../../Misc/Icons/general/close.svelte";
  import AxieCard from "../AxieCard.svelte";

  export let selectedAxie = null;
  export let onClickClose;
  export let onClickAxie;

  let _onClickAxie = axie => {
    //if (onClickAxie) onClickAxie(axie);
    selectedAxie = axie;
  };

  let clickHideDetail = () => {
    //if (onClickClose) onClickClose();
    selectedAxie = null;
  };
</script>

<style>
  .axieview {
    max-width: var(--axie-view-width);
    margin: 0 auto;
    display: flex;
    margin-top: 90px;
  }
  .axieview.expanded {
    max-width: calc(var(--axie-view-width) + 320px);
  }

  .closer {
    display: inline-flex;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;

    position: absolute;
    z-index: 100;
    top: 42px;
    left: 16px;
  }

  .axiehighlightlayout .closer :global(svg) {
    width: 18px;
    height: 18px;
    fill: rgb(var(--color-black));
  }

  @media only screen and (max-width: 90000px) {
    :root {
      --axie-view-width: 980px;
    }
  }

  @media only screen and (max-width: 1850px) {
    .axieview {
      --axie-view-width: 710px;
    }
  }
</style>

<div class="axiehighlightlayout">

  <div class="axieview" class:expanded={selectedAxie != null}>

    {#if selectedAxie}
      <div class="flex flex-col mr-3 relative">

        <div class="closer bg-light-1 text-dark-1" on:click={clickHideDetail}>
          <CloseIcon />
        </div>

        <AxieCard axie={selectedAxie} onClickParent={_onClickAxie} />
      </div>
    {/if}

    <slot name="list" />
    <slot name="pagination" />
  </div>

</div>
