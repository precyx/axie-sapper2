<script>
  import Axie from "./Axie.svelte";
  import AxieParts from "./AxieParts.svelte";
  import AxieId from "./AxieId.svelte";

  export let axie;
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
  .image-cropper {
    width: 230px;
    height: 135px;
    overflow: hidden;
    position: relative;
  }

  img {
    width: 260px;
    height: auto;
    position: absolute;
    left: -11px;
    top: -31px;
    max-width: fit-content;
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
      <div class="image-cropper">
        <img src={axie.image} alt="axie image" class="img" />
      </div>
    </div>

    <div
      class="infoplate bg-light-1 rounded-lg relative p-2 text-base shadow -mt-3">
      <div
        class="name font-medium text-dark-1 text-center truncate whitespace-pre
        p-2">
        {axie.name}
      </div>
      <AxieParts parts={axie.parts} />
    </div>
  </div>

</div>
