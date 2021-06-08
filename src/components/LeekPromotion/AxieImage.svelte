<script>
  export let id = "";
  export let type = "";
  export let count = "";
  export let img_url = "";
  export let link_url = "";

  $: if (id || type) setUrl();

  const setUrl = () => {
    // axie
    if (type == "axie" || !type) {
      img_url = `https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`;
      link_url = `https://marketplace.axieinfinity.com/axie/${id}`;
    }
    // land - forest 
    else if (type == "land-forest") {
      img_url = "/images/promotion/land-forest.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } 
    // land - mystic
    else if (type == "land-mystic") {
      img_url = "/images/promotion/land-mystic.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } 
    // land - arctic
    else if (type == "land-arctic") {
      img_url = "/images/promotion/land-arctic.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } 
    // land - savannah
    else if (type == "land-savannah") {
      img_url = "/images/promotion/land-savannah.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } 
    // rarible art
    else if (type == "rarible-art") {
      link_url = `https://app.rarible.com/token/${id}`;
    } 
    // rarible art
    else if (type == "opensea-art") {
      link_url = `https://opensea.io/assets/${id}`;
    } 
    // currency - whale
    else if (type == "currency-whale") {
      link_url = `https://www.coingecko.com/en/coins/whale`;
      img_url = "/images/promotion/whale.png";
    } 
    // currency - 1337
    else if (type == "currency-1337") {
      link_url = `https://www.coingecko.com/en/coins/e1337`;
      img_url = "/images/promotion/1337.png";
    }
    // currency - slp
    else if (type == "currency-slp") {
      link_url = `https://www.coingecko.com/en/coins/small-love-potion`;
      img_url = "/images/promotion/slp.png";
    } 
    // currency - eth
    else if (type == "currency-eth") {
      link_url = `https://www.coingecko.com/en/coins/ethereum`;
      img_url = "/images/promotion/ethereum.png";
    }
  };
</script>

<style>
  .item {
    position: relative;
    /*width: 170px;*/
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 10px;
    margin-bottom: 10px;
  }

  .id {
    font-size: 11px;
    position: absolute;
    left: 0;
    top: 5px;
    font-weight: bold;
    font-family: monospace;
    background: rgb(var(--color-primary-900));
    color: rgba(var(--color-on-primary-900), 0.9);
    border-radius: 500px;
    padding: 0px 10px;
    line-height: 155%;
  }

  .count {
    font-size: 11px;
    position: absolute;
    right: 0;
    top: 5px;
    font-weight: bold;
    font-family: monospace;
    background: rgb(var(--color-primary-900));
    color: rgba(var(--color-on-primary-900), 0.9);
    border-radius: 500px;
    padding: 0px 10px;
    line-height: 155%;
  }

  .item.land-mystic img,
  .item.land-forest img,
  .item.land-savannah img,
  .item.land-arctic img {
    max-width: 50%;
  }
</style>

<a class="item {type}" target="_blank" href={link_url}>
  <img src={img_url} alt="" />
  <div class="text-dark-2 id">#{id}</div>

  {#if count}
    <div class="text-dark-2 count">{count}</div>
  {/if}
</a>
