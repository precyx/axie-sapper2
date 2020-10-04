<script>
  export let id;
  export let type;

  let img_url = "";
  let link_url = "";

  $: if (id || type) setUrl();

  const setUrl = () => {
    if (type == "axie" || !type) {
      img_url = `https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`;
      link_url = `https://marketplace.axieinfinity.com/axie/${id}`;
    } else if (type == "land-forest") {
      img_url =
        "https://marketplace.axieinfinity.com/static/image/land/forest.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } else if (type == "land-mystic") {
      img_url =
        "https://marketplace.axieinfinity.com/static/image/land/mystic.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
    } else if (type == "land-arctic") {
      img_url =
        "https://marketplace.axieinfinity.com/static/image/land/arctic.png";
      link_url = `https://marketplace.axieinfinity.com/land/${id}`;
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
</a>
