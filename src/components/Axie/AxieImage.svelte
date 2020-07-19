<script>
  export let image = "";
  export let type = "";

  $: _img = image;

  let error = false;

  const onerror = () => {
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
      <div class="error_image" />
    {/if}
  {/if}
</div>
