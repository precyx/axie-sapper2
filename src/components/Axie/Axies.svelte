<script>
  import { onMount } from "svelte";
  //import axios from "axios";

  import AxieList from "./AxieList.svelte";
  import AxieCard from "./AxieCard.svelte";
  import Paginator from "../Misc/Paginator.svelte";

  let axies = [];
  let total = 0;
  let selectedAxie = null;

  let pagesize = 12;
  let currentpage = 1;

  let loading = false;

  onMount(async () => {
    run();
  });

  function getData() {
    run();
  }

  function onSelectAxie(axie) {
    console.log("select axie", axie);
    selectedAxie = axie;
  }

  function onNext() {
    currentpage++;
    console.log("next");
    run();
  }

  function onPrev() {
    currentpage--;
    console.log("prev");
    run();
  }

  let clickHideDetail = () => {
    console.log("click uuu");
    selectedAxie = null;
  };

  function getQuery() {
    let query = {
      operationName: "GetAxieBriefList",
      variables: {
        from: currentpage * pagesize - pagesize,
        size: pagesize,
        sort: "PriceAsc",
        auctionType: "Sale",
        owner: null,
        region: null,
        criteria: {
          parts: null,
          bodyShapes: null,
          classes: null,
          stages: null,
          numMystic: null,
          pureness: null,
          title: null,
          breedable: null,
          breedCount: null
        }
      },
      query:
        "query GetAxieBriefList($auctionType: AxieAuctionType, $region: String, $criteria: AxieCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, region: $region, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n  class\n  exp\n  image\n  title\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  mystic\n  bionic\n  xmas\n  stage\n  moves {\n    ...AxieMove\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMove on AxieMove {\n  id\n  name\n  type\n  attack\n  defense\n  accuracy\n  stage\n  effects {\n    ...AxieMoveEffect\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMoveEffect on AxieMoveEffect {\n  name\n  type\n  description\n  __typename\n}\n"
    };
    return query;
  }

  async function run() {
    let url = "https://axieinfinity.com/graphql-server/graphql";

    loading = true;
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(getQuery())
    })
      .then(response => response.json())
      .then(function(res) {
        console.log(res);

        axies = [];
        axies = res.data.axies.results;
        total = res.data.axies.total;
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(x => {
        loading = false;
      });
  }
</script>

<style>
  .axieview {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
  }
  .axieview.expanded {
    max-width: 1300px;
  }

  .axiecard {
    position: relative;
    left: -40px;
  }
  .closer {
    display: inline-flex;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
  }
</style>

<div class="axies">

  <button class="hidden" on:click={getData}>Get Data</button>

  <div class="axieview" class:expanded={selectedAxie != null}>

    {#if selectedAxie}
      <div class="flex flex-col">
        <div style="margin:0 5px; height:35px;">
          <div class="closer bg-light-1 text-dark-1" on:click={clickHideDetail}>
            X
          </div>
        </div>
        <AxieCard axie={selectedAxie} />
      </div>
    {/if}
    <div>
      <AxieList mode="auction" {axies} {total} {onSelectAxie} {loading} />

      <div class="mt-4 mb-8">
        <Paginator {total} {pagesize} {currentpage} {onNext} {onPrev} />
      </div>
    </div>

  </div>

</div>
