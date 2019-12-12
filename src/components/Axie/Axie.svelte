<script>
  import AxieId from "./AxieId.svelte";
  export let axie;
  export let type;
</script>

<style>
  .axie {
    display: inline-flex;
    flex-flow: column;
    margin: 5px;
    width: 200px;
  }
  .bg {
    position: relative;
    padding: 0;
    padding-bottom: 0;

    border-radius: var(--border-radius-8);

    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-cropper {
    width: 160px;
    height: 120px;
    overflow: hidden;
    position: relative;
  }

  img {
    width: 200px;
    height: auto;
    position: absolute;
    left: -18px;
    top: -15px;
  }

  .infoplate {
    position: relative;

    background: var(--color-light-1);
    border-radius: var(--border-radius-8);

    margin-top: -15px;
    padding: var(--spacing-8);
    color: var(--color-dark-1);
    font-size: var(--font-size-14);
    text-align: center;
    font-weight: 500;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    font-size: 12px;
  }

  :global(.axie_001 .axieid) {
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 8px;
  }
</style>

<div class="axie axie_001" on:click>

  <div class="bg bg-dark-shimmer-1">

    <AxieId axieId={axie.id} axieClass={axie.class} class="axieid" />
    <div class="image-cropper">
      <img src={axie.image} alt="axie image" />
    </div>
  </div>

  <div class="infoplate text-dark-1">

    {#if type == 'auction'}
      <div class="price text-lg font-medium">
        {axie.auction.currentPriceUSD} $
      </div>
      <div class="name font-normal hidden">{axie.name}</div>
    {:else}
      <div class="name">{axie.name}</div>
    {/if}
  </div>
</div>
