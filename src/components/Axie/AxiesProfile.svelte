<script>
  import { onMount } from "svelte";

  import { filters } from "../../store/store.js";

  import AxieHighlightLayout from "./AxieHighlightLayout.svelte";
  import AxieList from "./AxieList.svelte";
  import AxieCard from "./AxieCard.svelte";
  import Paginator from "../Misc/Paginator.svelte";

  import { getAxieBriefList } from "../../services/AxieDataService";

  let axies = [];
  let selectedAxie = null;

  let total = 0;
  let pagesize = 12;
  let currentpage = 1;

  let loading = false;

  $: if (currentpage || $filters) {
    run();
  }

  /*onMount(async () => {
    run();
  });*/

  function onSelectAxie(axie) {
    selectedAxie = axie;
  }

  function onPageChange(page) {
    currentpage = page;
  }

  let clickHideDetail = () => {
    selectedAxie = null;
  };

  async function run() {
    loading = true;

    let params = {
      from: currentpage * pagesize - pagesize,
      size: pagesize,
      sort: "IdDesc", //"PriceAsc",
      auctionType: "All",
      owner: "0xe293390d7651234c6dfb1f41a47358b9377c004f"
    };

    let criteria = {
      classes: $filters.classes ? Array.from($filters.classes) : null,
      numMystics: $filters.numMystic ? [parseInt([$filters.numMystic])] : null,
      stages: $filters.stages ? Array.from($filters.stages).map(Number) : null
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
  <AxieHighlightLayout {selectedAxie} onClickClose={clickHideDetail}>
    <div slot="list">
      <div>
        <AxieList mode="profile" {axies} {total} {onSelectAxie} {loading}>
          <div slot="pagination">
            <Paginator {total} {pagesize} {onPageChange} startpage={1} />
          </div>
        </AxieList>
      </div>
    </div>

  </AxieHighlightLayout>
</div>
