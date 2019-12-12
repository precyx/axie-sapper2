<script>
  import Horn from "../Misc/Icons/parts/Horn.svelte";
  import Eye from "../Misc/Icons/parts/Eye.svelte";
  import Ears from "../Misc/Icons/parts/Ears.svelte";
  import Mouth from "../Misc/Icons/parts/Mouth.svelte";
  import Back from "../Misc/Icons/parts/Back.svelte";
  import Tail from "../Misc/Icons/parts/Tail.svelte";

  export let part = {};

  $: partType = part.type.toLowerCase();
</script>

<style>
  .axiepart {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 35px;
    height: 25px;
  }

  :global(.icon svg) {
    width: 25px;
    height: 25px;
  }
</style>

<div class="axiepart">

  <div class="icon">

    {#if partType == 'eyes'}
      <Eye axieClass={part.class} />
    {:else if partType == 'horn'}
      <Horn axieClass={part.class} />
    {:else if partType == 'ears'}
      <Ears axieClass={part.class} />
    {:else if partType == 'mouth'}
      <Mouth axieClass={part.class} />
    {:else if partType == 'back'}
      <Back axieClass={part.class} />
    {:else if partType == 'tail'}
      <Tail axieClass={part.class} />
    {/if}

  </div>
  <div class="name">{part.name}</div>
</div>
