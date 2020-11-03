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
  let address = "0xE293390d7651234c6DFB1f41a47358B9377C004F";
  let sortProp = "";
  let sortDirection = 1;

  const loadParts = async () => {
    let id = 244;

    let params = {
      owner: address,
      querySelect: "minimal"
      /*parts: ["tail-yam"]*/
    };
    let criteria = {};
    let axies;

    try {
      bodyParts = await getBodyParts();
      sortBy("name");
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
        await sleep(1200);
      });
    } catch (err) {
      console.error("could not fetch axies", err);
    }

    axies = axies.data.axies;
    console.log("total", axies.total);
  };

  const sortBy = propName => {
    // set sorting direction
    let _sortDirection;
    if (sortProp != propName) _sortDirection = -1;
    else _sortDirection = sortDirection == 1 ? -1 : 1;
    sortDirection = _sortDirection;

    // sort items
    let _sorted = bodyParts.sort((a, b) => {
      let a_prop = a[propName] ? a[propName].toString() : "";
      let b_prop = b[propName] ? b[propName].toString() : "";
      return sortDirection == -1
        ? a_prop.localeCompare(b_prop, "en-US", { numeric: "true" })
        : b_prop.localeCompare(a_prop, "en-US", { numeric: "true" });
    });

    bodyParts = _sorted;
    sortProp = propName;
  };

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
    /*margin: 20px 0px;*/
    font-size: 12px;
    height: 30px;
  }

  .part img {
    max-width: 34px;
    max-height: 20px;
    height: auto;
  }

  .field {
    display: flex;
    flex: 1;
  }

  .name {
    width: 120px;
  }
  .special-genes {
    width: 100px;
  }
  .count {
    width: 50px;
    text-align: right;
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
    margin-bottom: 5px;
  }
  .header-cell {
    cursor: pointer;
    display: flex;
    flex: 1;
  }
  .header-cell:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>

<div class="part-encyclopedia text-dark-2">

  <Text type="h1" style="margin-bottom:25px;">Part Encylopedia</Text>

  <p>{address}</p>

  <Plate>

    <div class="header">
      <div class="header-cell img-wrap">Img</div>
      <div
        class="header-cell name"
        on:click={() => {
          sortBy('name');
        }}>
        Name
      </div>
      <div
        class="header-cell name"
        on:click={() => {
          sortBy('specialGenes');
        }}>
        Genes
      </div>
      <div
        class="header-cell name"
        on:click={() => {
          sortBy('class');
        }}>
        Class
      </div>
      <div
        class="header-cell name"
        on:click={() => {
          sortBy('type');
        }}>
        Type
      </div>
      <div
        class="header-cell count"
        on:click={() => {
          sortBy('count');
        }}>
        Count
      </div>
    </div>
    <div>
      {#each bodyParts as part}
        <div class="part">
          <div class="field img-wrap">
            <img
              class="img"
              src={`images/parts/full-color/${part.name}_${part.type}_${part.class}.png`}
              alt="a" />
          </div>
          <div class="field name">{part.name}</div>
          <div class="field special-genes">{part.specialGenes}</div>
          <div class="field class">{part.class}</div>
          <div class="field type">{part.type}</div>
          <div class="field count">
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
