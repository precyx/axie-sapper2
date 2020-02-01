<script>
  import { onMount } from "svelte";
  import { filters } from "../../../store/store.js";
  import AxieHighlightLayout from "../AxieHighlightLayout.svelte";
  import AxieList from "../AxieList.svelte";
  import AxieCard from "../AxieCard.svelte";
  import Paginator from "../../Misc/Paginator.svelte";

  import { getAxieBriefList } from "../../../services/AxieDataService";

  // lifecycle
  let HAS_MOUNTED = false;

  // axie
  let axies = [];
  let selectedAxie = null;

  // paging
  let total = 0;
  let pagesize = 12;
  let currentpage = 1;

  // loading
  let loading = false;

  $: if (HAS_MOUNTED && (currentpage || $filters)) {
    run();
  }

  onMount(async () => {
    window.setTimeout(() => {
      HAS_MOUNTED = true;
    }, 0);
  });

  let clickHideDetail = () => {
    selectedAxie = null;
  };

  let clickHighlightLayoutAxie = axie => {
    selectedAxie = axie;
  };

  async function run() {
    loading = true;

    let params = {
      from: currentpage * pagesize - pagesize,
      size: pagesize,
      sort: "IdDesc", //"PriceAsc",
      auctionType: "All",
      owner: "0xe293390d7651234c6dfb1f41a47358b9377c004f",
      region: $filters.region ? $filters.region[0] : null
    };

    let criteria = {
      classes: $filters.classes ? Array.from($filters.classes) : null,
      numMystics: $filters.numMystic ? [parseInt([$filters.numMystic])] : null,
      pureness: $filters.pureness ? [parseInt([$filters.pureness])] : null,
      stages: $filters.stages ? Array.from($filters.stages).map(Number) : null,
      title: $filters.title ? Array.from($filters.title) : null
    };

    getAxieBriefList(params, criteria)
      .then(function(res) {
        console.log(res);

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
      });
  }

  function resetImages() {
    axies = axies.map(axie => {
      // @todo handle different entities
      return { ...axie, image: "" };
    });
  }
</script>

<div class="axies">
  <AxieHighlightLayout
    {selectedAxie}
    onClickClose={clickHideDetail}
    onClickAxie={clickHighlightLayoutAxie}>
    <div slot="list">
      <div>
        <AxieList mode="profile" {axies} {total} bind:selectedAxie {loading}>
          <div slot="pagination">
            <Paginator {total} {pagesize} bind:currentpage />
          </div>
        </AxieList>
      </div>
    </div>

  </AxieHighlightLayout>
</div>
