<script>
  import AxieId from "./AxieId.svelte";
  import AxieAuction from "./Plates/AxieAuction.svelte";
  import AxieImage from "./AxieImage.svelte";
  import AxieParts from "./AxieParts.svelte";

  export let axie;
  export let type;

  $: entitiyType = getEntitiyType(axie);

  function getEntitiyType() {
    if (axie.stage) {
      if (axie.stage == 1) return "egg";
      if (axie.stage == 2) return "larva";
      if (axie.stage == 3) return "petite";
      if (axie.stage == 4) return "axie";
    } else return "other";
  }
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
    font-size: 16px;
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

    <AxieImage image={axie.image} type={entitiyType} />

  </div>

  <div class="infoplate text-dark-1">

    {#if type == 'auction'}
      {#if axie.auction}
        <AxieAuction auction={axie.auction} />
      {/if}
      <div class="name-secondary font-normal hidden">{axie.name}</div>
    {:else}
      <div class="name">{axie.name}</div>
    {/if}
  </div>
</div>
