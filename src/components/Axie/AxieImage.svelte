<script>
  export let image = "";
  export let type = "";

  $: _img = image;
  let altImg = "";

  let error = false;

  const onerror = () => {
    altImg = "/images/axie/preview_axie2.svg"; // prettier-ignore

    /*if (type == "larva") {
      if (
        image.indexOf("mech") != -1 ||
        image.indexOf("dusk") != -1 ||
        image.indexOf("dawn") != -1
      ) {
        altImg = "https://storage.googleapis.com/axie-cdn/avatars/larva/meo-larva-full-transparent.png"; // prettier-ignore
      }
    }*/
    error = true;
  };
</script>

<style>
  img {
    --axie-image-width: 210px;
    --axie-image-height: 220px;

    max-width: var(--axie-image-width);
    max-height: var(--axie-image-height);

    width: auto;
    height: auto;
  }

  .error_img {
    width: 80px;
  }

  .type-egg img {
    --axie-image-width: 240px;
    --axie-image-height: 240px;
    margin-left: -5px;
    margin-top: -5px;
  }
  .type-larva img {
    --axie-image-width: 210px;
    --axie-image-height: 220px;
  }

  .image-cropper {
    overflow: hidden;
    position: relative;
  }
</style>

<div class="image-cropper type-{type}">
  {#if _img}
    {#if !error}
      <img src={_img} alt="axie" on:error={onerror} />
    {:else if error}
      <img class="error_img" src={altImg} alt="axie" width="100" />
    {/if}
  {/if}
</div>
