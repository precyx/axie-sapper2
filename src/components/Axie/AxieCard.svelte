<script>
  import { onMount } from "svelte";

  import Axie from "./Axie.svelte";
  import AxieParts from "./AxieParts.svelte";
  import AxieAuction from "./Plates/AxieAuction.svelte";
  import AxieId from "./AxieId.svelte";
  import AxieOwner from "./AxieOwner.svelte";

  import { getAxieDetail } from "../../services/AxieDataService.js";

  export let axie;
  let detailAxie = {};

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
</script>

<style>
  .axiecard {
    margin-right: 15px;
  }
  .axie {
    display: inline-flex;
    flex-flow: column;
    margin: 5px;
    width: 250px;
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

  .field-exp {
    font-size: 12px;
    color: #93abab;
  }

  :global(.axiecard .axieid) {
    position: absolute;
    z-index: 10;
    top: 10px;
    left: 10px;
  }
</style>

<div class="axiecard">

  <div class="axie" on:click>

    <div class="bg bg-dark-shimmer-1">
      <AxieId axieId={axie.id} axieClass={axie.class} />

      {#if axieimage}
        <img src={axieimage} alt="axie image" class="img" />
      {/if}

    </div>

    <div
      class="infoplate bg-light-1 rounded-lg relative p-2 text-base shadow -mt-3">
      <div
        class="name font-medium text-dark-1 text-center truncate whitespace-pre">
        {axie.name}
      </div>
      {#if axie.exp}
        <div class="field-exp text-center">{axie.exp} EXP</div>
      {/if}
      {#if axie.parts}
        <AxieParts parts={axie.parts} />
      {/if}

      {#if axie.auction}
        <div class="text-center p-2">
          <AxieAuction auction={axie.auction} />
        </div>
      {/if}

      {#if detailAxie.ownerProfile}
        <div class="text-center">
          <AxieOwner
            ownerName={detailAxie.ownerProfile.name}
            ownerAddress={detailAxie.owner} />
        </div>
      {/if}

    </div>
  </div>

</div>
