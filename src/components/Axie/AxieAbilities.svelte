<script>
  export let parts;
</script>

<style>
  .axie-abilities {
    display: flex;
    flex-flow: wrap;
  }
  .axie-ability {
    position: relative;
  }
  .card-img {
    width: 120px;
    height: auto;
    margin: 5px;
  }

  .description {
    position: absolute;
    z-index: 1;
    bottom: 5%;
    font-size: 10px;
    color: white;
    line-height: 108%;
    width: 80%;
    margin: 0 auto;
    left: 12%;
  }

  .name {
    font-family: "Noto Sans SC";
    font-weight: 900;
    position: absolute;
    font-size: 10px;
    color: white;
    left: 37px;
    top: 4.7%;
    text-shadow: rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 2px;
  }
  .energy {
    font-family: "Noto Sans SC";
    font-weight: 900;
    text-shadow: rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 2px,
      rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 2px;
    position: absolute;
    top: 6px;
    left: 16px;
    font-size: 17px;
    color: white;
  }
</style>

<div class="axie-abilities">

  {#if parts && parts.length}
    {#each parts as part}
      {#if part.abilities.length}
        <div class="axie-part-ability">
          {#each part.abilities as ability}
            <div class="axie-ability">
              <img
                class="card-img"
                src={null || ability.backgroundUrl}
                alt="Card Image" />

              <div class="name">{ability.name}</div>
              <div class="description">{ability.description}</div>
              <div class="energy">{ability.energy}</div>
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  {/if}

</div>
