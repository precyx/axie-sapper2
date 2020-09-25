<script>
  import { onMount } from "svelte";

  import { getAxieDetail } from "../../../../services/AxieDataService.js";
  import {
    getAxieBriefList,
    getBodyParts
  } from "../../../../services/AxieDataService";
  import Plate from "../../../UI/Plate.svelte";
  import Loader from "../../../UI/Loader.svelte";
  import Text from "../../../UI/Text.svelte";
  import { asyncForEach, sleep } from "../../../../utils/Utils";

  let bodyParts = [];
  let bodyParts_all = [];

  const loadParts = async () => {
    let id = 244;

    let params = {
      owner: "0xE293390d7651234c6DFB1f41a47358B9377C004F",
      querySelect: "minimal"
      /*parts: ["tail-yam"]*/
    };
    let criteria = {};
    let axies;

    try {
      bodyParts = await getBodyParts();
      bodyParts_all = bodyParts;
    } catch (err) {
      console.error("could not fetch body parts", err);
      return;
    }
    console.log("bodyparts", bodyParts);

    try {
      let promises = [];

      await asyncForEach(bodyParts_all, async part => {
        let promise = new Promise(async (resolve, reject) => {
          let axies = await getAxieBriefList(
            { ...params, parts: [part.partId] },
            criteria
          );
          console.log(part.partId, axies.data.axies.total);
          let count = axies.data.axies.total;
          let _newBodyParts = bodyParts.map(elem => {
            if (elem.partId == part.partId) return { ...elem, count: count };
            return elem;
          });
          bodyParts = _newBodyParts;
        });
        promises.push(promise);
        await sleep(8000);
      });
    } catch (err) {
      console.error("could not fetch axies", err);
    }

    axies = axies.data.axies;
    console.log("total", axies.total);
  };

  const sortBy = propName => {};

  //parts = [{ img: "Balloon_back_bird" }];

  // lifecycle
  let HAS_MOUNTED = false;

  onMount(() => {
    window.setTimeout(() => {
      HAS_MOUNTED = true;
    }, 0);
  });

  $: if (HAS_MOUNTED) {
    loadParts();
  }
</script>

<style>
  .part-encyclopedia {
    width: 800px;
    width: auto;
  }

  .part {
    /*width: 50px;*/
    align-items: center;
    display: flex;
    margin: 20px 0px;
    font-size: 12px;
  }

  .part img {
    max-width: 44px;
    max-height: 30px;
    height: auto;
  }

  .name {
    width: 200px;
  }
  .img-wrap {
    width: 100px;
  }

  .part .loader {
    width: 20px;
    filter: drop-shadow(0px 0px 0px rgba(50, 100, 250, 0.5));
  }

  .header {
    display: flex;
    font-size: 14px;
    font-weight: 500;
  }
</style>

<div class="part-encyclopedia text-dark-2">

  <Text type="h1" style="margin-bottom:25px;">Part Encylopedia</Text>
  <Plate>

    <div class="header">
      <div class="img-wrap">Img</div>
      <div class="name">Name</div>
      <div class="count" on:click={sortBy('count')}>Count</div>
    </div>
    <div>
      {#each bodyParts as part}
        <div class="part">
          <div class="img-wrap">
            <img
              class="img"
              src={`images/parts/full-color/${part.name}_${part.type}_${part.class}.png`}
              alt="a" />
          </div>
          <div class="name">{part.name}</div>
          <div class="count">
            {#if part.count >= 0}
              {part.count}
            {:else}
              <div class="loader">
                <Loader />
              </div>
            {/if}

          </div>

        </div>
      {/each}
    </div>
  </Plate>

</div>
