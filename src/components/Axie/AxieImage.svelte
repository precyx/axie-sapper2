<script>
  export let image = "";
  export let type = "";

  $: _img = image;
  let altImg = "";

  let error = false;

  const onerror = () => {
    if (type == "larva") {
      if (
        image.indexOf("mech") != -1 ||
        image.indexOf("dusk") != -1 ||
        image.indexOf("dawn") != -1
      ) {
        altImg = "https://storage.googleapis.com/axie-cdn/avatars/larva/meo-larva-full-transparent.png"; // prettier-ignore
      }
    }
    error = true;
  };
</script>

<style>
  img {
    --axie-image-width: 230px;
    --axie-image-height: 220px;

    max-width: var(--axie-image-width);
    max-height: var(--axie-image-height);

    width: auto;
    height: auto;
  }

  .type-egg img {
    --axie-image-width: 260px;
    --axie-image-height: 240px;
    margin-left: -15px;
    margin-top: -5px;
  }
  .type-larva img {
    --axie-image-width: 230px;
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
      <img src={altImg} alt="axie" />
    {/if}
  {/if}
</div>
