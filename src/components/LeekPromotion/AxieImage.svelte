<script>
  export let id;
</script>

<style>
  .item {
    position: relative;
    /*width: 170px;*/
    display: flex;

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
  }
</style>

<a
  class="item"
  target="_blank"
  href={`https://marketplace.axieinfinity.com/axie/${id}`}>
  <img
    src={`https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`} />
  <div class="text-dark-2 id">#{id}</div>
</a>
