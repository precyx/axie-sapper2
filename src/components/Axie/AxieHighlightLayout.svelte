<script>
  import AxieCard from "./AxieCard.svelte";

  export let selectedAxie = null;
  export let onClickClose;

  function onSelectAxie(axie) {
    selectedAxie = axie;
  }

  let clickHideDetail = () => {
    if (onClickClose) onClickClose();
  };
</script>

<style>
  .axieview {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
  }
  .axieview.expanded {
    max-width: 1300px;
  }

  .axiecard {
    position: relative;
    left: -40px;
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
  }
</style>

<div class="axiehighlightlayout">

  <div class="axieview" class:expanded={selectedAxie != null}>

    {#if selectedAxie}
      <div class="flex flex-col">
        <div style="margin:0 5px; height:35px;">
          <div class="closer bg-light-1 text-dark-1" on:click={clickHideDetail}>
            X
          </div>
        </div>
        <AxieCard axie={selectedAxie} />
      </div>
    {/if}

    <slot name="list" />
    <slot name="pagination" />
  </div>

</div>
