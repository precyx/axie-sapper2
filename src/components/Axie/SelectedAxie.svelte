<script>
  import DynamicAxie from "../Axie/DynamicAxie.svelte";
  import AxieCard from "../Axie/AxieCard.svelte";

  import { onMount } from "svelte";
  import { _selectedAxie } from "../../store/store.js";

  // lifecycle
  let HAS_MOUNTED = false;

  // axie
  let selectedAxie;

  // loading
  let loading = false;

  $: if (HAS_MOUNTED && $_selectedAxie) {
    run();
  }

  const _unsubscribeFilters = _selectedAxie.subscribe(v => {
    console.log("update", v);
    selectedAxie = v;
  });

  onMount(() => {
    window.setTimeout(() => {
      HAS_MOUNTED = true;
    }, 0);
  });

  async function run() {
    loading = true;

    /*let params = {
      from: currentpage * pagesize - pagesize,
      size: pagesize,
      sort: "IdDesc", //"PriceAsc",
      auctionType: "All",
      owner: null,
      region: $filters.region ? $filters.region[0] : null
    };
    let criteria = {
      classes: $filters.classes ? Array.from($filters.classes) : null,
      numMystics: $filters.numMystic ? [parseInt([$filters.numMystic])] : null,
      pureness: $filters.pureness ? [parseInt([$filters.pureness])] : null,
      stages: $filters.stages ? Array.from($filters.stages).map(Number) : null,
      title: $filters.title ? Array.from($filters.title) : null
    };

    console.log("$filters", $filters);
    console.log("criteria", criteria);

    getAxieBriefList(params, criteria)
      .then(function(res) {
        resetImages();
        // use timeout to let images deload
        setTimeout(() => {
          axies = res.data.axies.results;
          total = res.data.axies.total;
        }, 0);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(x => {
        loading = false;
      });*/
  }
</script>

<style>
  .selectedAxie {
    height: calc(100vh - 80px);
    position: fixed;
    bottom: 0;
    width: 300px;
    overflow-y: auto;
  }
</style>

<div class="selectedAxie">
  {#if selectedAxie && selectedAxie.id}
    <div>
      <AxieCard axie={selectedAxie} />
    </div>
  {/if}
</div>
