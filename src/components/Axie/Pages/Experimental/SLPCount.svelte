<script>
  import { onMount } from "svelte";
  import Plate from "../../../UI/Plate.svelte";
  import Text from "../../../UI/Text.svelte";
  import Button from "../../../Misc/Button.svelte";
  import Loader from "../../../UI/Loader.svelte";
  import { asyncForEach } from "../../../../utils/Utils";
  import { sleep } from "../../../../utils/Utils";
  

  // state
  let textinput = "";
  let item_counts = [];
  let loading = false;
  let current_index = 0;
  let max_index = 0;
  let item_total = 0;

  // on mount

  // data
  const loadItemData = async addresses => {
    let promises = [];
    let _item_counts = [];
    item_total = 0;

    let p = new Promise(async (resolve, reject) => {
      await asyncForEach(addresses, async (address,i) => {
        current_index = i+1;
        let data = await loadItem(address);
        _item_counts.push(data);
        item_counts = _item_counts;
        item_total += data;

        await sleep(500);
        if(item_counts % 10 == 0){
          await sleep(3000);
        }
        if(item_counts % 100 == 0) {
          await sleep(6000);
        }
      });

      resolve(_item_counts);
    });

    /*addresses.forEach(address => {
      let p = new Promise(async (resolve, reject) => {
        let data = await loadItem(address);
        resolve(data);
      });
      promises.push(p);
    });*/
    return p;
  };

  const loadItem = async address => {
    let url = `https://lunacia.skymavis.com/game-api/clients/${address}/items/1`;
    let data = await fetch(url).then(response => response.json());
    return data.total;
  };

  // events
  const getItems = async () => {
    loading = true;
    let addresses = textinput.split("\n");
    max_index = addresses.length;
    let _itemcounts = await loadItemData(addresses);
    item_counts = _itemcounts;
    loading = false;
  };
</script>

<style>
  .promotion-overview {
    width: 800px;
  }

  .flex {
    flex-flow: column;
    align-items: flex-start;
  }

  textarea {
    border: 1px solid #cacaca;
    margin-bottom: 10px;
    width: 450px;
    height: 100px;
    padding: 5px;
    background: rgb(var(--color-white));
    color: rgb(var(--color-black));
    font-size: 12px;
  }

  .block {
    margin-top: 20px;
  }

  .counts {
    margin-top: 5px;
    font-size: 12px;
    font-family: monospace;
    max-height: 280px;
    overflow-y: scroll;

    box-shadow: 0 2px 8px #0000002e;
    padding: 15px;
    border-radius: 10px;
    background: rgb(var(--color-white));
  }

  .index_counter {
    color: var(--color-dark-2);
    margin-bottom:5px;
  }

  .address_container :global(.button) {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .address_container :global(.loader) {
    width: 18px;
    height: 18px;
  }

  .promotion-overview :global(.text) {
    color: var(--color-dark-2);
    margin-bottom: 5px;
  }

  .numbers {
    width:40px; 
    opacity:0.4; 
  }

  .non-select {
    user-select: none;
    pointer-events: none;
  }
</style>

<div class="promotion-overview">

  <Text type="infobar" className="text-dark-2">SLP Count</Text>

  <Plate>
    <div class="flex address_container">
      <Text type="h3">Insert ETH Addresses</Text>
      <div class="index_counter">{current_index} / {max_index}</div>
      <textarea bind:value={textinput} />
      <Button on:click={getItems}>

        {#if loading}
          <Loader />
        {:else}Get Items{/if}
      </Button>
    </div>

    {#if item_counts.length}
      <div class="block">
        <Text type="h3">Count ({item_total} total)</Text>

        <div class="counts">
          {#each item_counts as count, i}
          <div style="display:flex;">
            <div data-non-select="" class="numbers non-select" style=" ">#{i+1}</div>
            <div>{count}</div>
          </div>
          {/each}
        </div>
      </div>
    {/if}
  </Plate>

</div>
