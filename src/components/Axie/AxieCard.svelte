<script>
  import { onMount } from "svelte";

  import Axie from "./Axie.svelte";
  import AxieCard from "./AxieCard.svelte";
  import AxieParts from "./AxieParts.svelte";
  import AxieStats from "./AxieStats.svelte";
  import AxieAuction from "./AxieAuction.svelte";
  import AxieId from "./AxieId.svelte";
  import AxieTag from "./AxieTag.svelte";
  import AxieOwner from "./AxieOwner.svelte";
  import AxieParents from "./AxieParents.svelte";
  import AxieModeSwitcher from "./AxieModeSwitcher.svelte";
  import AxiePartsMode from "./Modes/AxiePartsMode.svelte";
  import AxieAuctionMode from "./Modes/AxieAuctionMode.svelte";
  import AxieExpMode from "./Modes/AxieExpMode.svelte";
  import AxieStatsMode from "./Modes/AxieStatsMode.svelte";
  import AxieAbilitiesMode from "./Modes/AxieAbilitiesMode.svelte";

  import { getAxieDetail } from "../../services/AxieDataService.js";

  export let axie;
  export let onClickParent;
  let detailAxie = {};
  let selectedMode = "parts";

  function transformAdultImage(url) {
    let segments = url.split("/");
    segments.pop();
    segments.pop();
    let newUrl = segments.join("/") + "/axie/axie-full-transparent.png";
    return newUrl;
  }

  $: loadDetailInfo(axie);
  $: getAxieImage(axie.image);

  let axieimage;

  function getAxieImage() {
    axieimage = null;
    window.setTimeout(() => {
      if (axie.stage == 3) axieimage = transformAdultImage(axie.image);
      else axieimage = axie.image;
    }, 0);
  }

  async function loadDetailInfo(axie) {
    if (axie && axie.id) {
      let result = await getAxieDetail({ axieId: axie.id });
      if (result.data.axie) {
        detailAxie = result.data.axie;
      }
      console.log("Detail", detailAxie);
    }
  }

  const onChangeMode = evt => {
    selectedMode = evt.detail;
  };
</script>

<style>
  .axiecard {
    position: relative;
    margin-right: 15px;
  }
  .axie {
    position: relative;
    display: inline-flex;
    flex-flow: column;
    margin: 5px;
    width: 280px;
  }

  /*.axie-header {
  }*/

  .axie-dynamic-content > :global(*:first-child) {
    margin-top: 5px;
    border-top: 1px solid rgba(104, 134, 146, 0.17);
    padding-top: 5px;
  }

  .bg {
    position: relative;
    padding: 0;

    border-radius: var(--border-radius-8);

    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 250px;
    height: auto;
  }

  :global(.axiecard .axietopbar) {
    position: absolute;
    display: flex;
    z-index: 10;
    top: 10px;
    left: 10px;
  }

  :global(.axiecard .axietitle) {
    margin-left: 5px;
  }

  :global(.axiecard .axie-mode-switcher) {
    position: absolute;
    z-index: 10;
    right: 8px;
    top: 8px;
  }
</style>

<div class="axiecard">

  <div class="axie" on:click>
    <AxieModeSwitcher on:change={onChangeMode} {axie} {detailAxie} />

    <div class="bg bg-dark-shimmer-1">
      <div class="axietopbar">
        <AxieId axieId={axie.id} axieClass={axie.class} />
        <AxieTag axieTitle={axie.title} axieClass={axie.class} />
      </div>

      {#if axieimage}
        <img src={axieimage} alt="axie image" class="img" />
      {/if}
    </div>

    <div
      class="infoplate bg-light-1 rounded-lg relative p-2 text-base shadow -mt-3">

      <div class="axie-header">
        <div
          class="name font-medium text-dark-1 text-center truncate
          whitespace-pre">
          {axie.name}
        </div>
        {#if detailAxie.ownerProfile}
          <div class="text-center">
            <AxieOwner ownerProfile={detailAxie.ownerProfile} />
          </div>
        {/if}
      </div>

      <div class="axie-dynamic-content">

        {#if selectedMode == 'parts'}
          <AxiePartsMode {axie} />
        {:else if selectedMode == 'auction'}
          <AxieAuctionMode {axie} />
        {:else if selectedMode == 'xp'}
          <AxieExpMode {axie} />
        {:else if selectedMode == 'stats'}
          <AxieStatsMode {axie} />
        {:else if selectedMode == 'abilities'}
          <AxieAbilitiesMode {axie} />
        {:else if selectedMode == 'parents'}
          <AxieParents axie={detailAxie} {onClickParent} />
        {:else}
          <h1>Unknown Mode</h1>
        {/if}
      </div>

    </div>
  </div>

</div>
