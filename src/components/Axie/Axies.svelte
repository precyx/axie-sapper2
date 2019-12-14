<script>
  import { onMount } from "svelte";
  //import axios from "axios";

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

  $: if (currentpage) {
    console.log("currentpage", currentpage);
    run();
  }

  onMount(async () => {
    run();
  });

  function onPageChange(page) {
    currentpage = page;
  }

  function onSelectAxie(axie) {
    console.log("select axie", axie);
    selectedAxie = axie;
  }

  let clickHideDetail = () => {
    console.log("click uuu");
    selectedAxie = null;
  };

  async function run() {
    loading = true;

    let params = {
      from: currentpage * pagesize - pagesize,
      size: pagesize,
      sort: "PriceAsc",
      auctionType: "Sale",
      owner: null
    };

    getAxieBriefList(params)
      .then(function(res) {
        console.log("Axies...", res);

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

<style>

</style>

<div class="axies">
  <AxieHighlightLayout {selectedAxie} onClickClose={clickHideDetail}>
    <div slot="list">
      <div>
        <AxieList mode="auction" {axies} {total} {onSelectAxie} {loading} />
      </div>
    </div>

    <div slot="pagination">
      <div class="mt-4 mb-8">
        <Paginator {total} {pagesize} {onPageChange} startpage={1} />
      </div>
    </div>
  </AxieHighlightLayout>
</div>
