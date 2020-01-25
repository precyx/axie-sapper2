<script>
  import AxieId from "./AxieId.svelte";
  import AxieAuction from "./AxieAuction.svelte";
  import AxieImage from "./AxieImage.svelte";
  import AxieParts from "./AxieParts.svelte";
  import AxieStats from "./AxieStats.svelte";
  import AxieOwner from "./AxieOwner.svelte";

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
    cursor: pointer;
    display: inline-flex;
    flex-flow: column;
    margin: 5px;
    width: 230px;
  }
  /*
  .axie:hover .bg {
    background: rgba(39, 82, 93, 0.09);
  }

  .axie:hover .infoplate {
    background: var(--color-dark-1);
    color: var(--color-light-1);
    background: #e4ffff;
  }
*/
  .bg {
    position: relative;
    padding: 0;
    padding-bottom: 0;

    border-radius: var(--border-radius-8);
    border: 3px solid transparent;

    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infoplate {
    position: relative;

    background: var(--color-light-1);
    border-radius: var(--border-radius-8);
    box-sizing: border-box;

    transition: all 90ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      all 90ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    margin-top: -15px;
    padding: 8px;
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

  .field-exp {
    font-size: 12px;
    color: var(--color-grey-1);
  }

  .field-breedcount {
    font-size: 12px;
    color: var(--color-grey-1);
    font-weight: normal;
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
      <div class="field-breedcount">Breed count: {axie.breedCount}</div>
      <div class="name-secondary font-normal hidden">{axie.name}</div>
    {:else if type == 'experience'}
      <div class="name">{axie.name}</div>

      {#if axie.exp}
        <div class="field-exp font-normal">

          <span>Exp:</span>
          <span>{axie.exp}</span>
        </div>
      {/if}
    {:else if type == 'encylopedia'}
      <div>
        <div class="name">{axie.name}</div>

        <AxieOwner ownerProfile={axie.ownerProfile} />
      </div>
    {:else if type == 'profile'}
      <div class="name">{axie.name}</div>
      <div class="field-breedcount">Breed count: {axie.breedCount}</div>
    {:else}
      <div class="name">{axie.name}</div>
    {/if}
  </div>
</div>
