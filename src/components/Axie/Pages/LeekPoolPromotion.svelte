<script>
  import { onMount } from "svelte";
  import { filters } from "../../../store/store.js";
  import AxieHighlightLayout from "../Layouts/AxieHighlightLayout.svelte";
  import AxieList from "../AxieList.svelte";
  import AxieCard from "../AxieCard.svelte";
  import Paginator from "../../Misc/Paginator.svelte";

  import AxieImage from "../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../LeekPromotion/Tabs.svelte";

  let axies = [
    { id: "86258", status: "a" },
    { id: "80665", status: "a" },
    { id: "74760", status: "a" },
    { id: "74495", status: "a" },
    { id: "18951", status: "a" },
    { id: "74753", status: "a" },
    { id: "91256", status: "a" },
    { id: "18450", status: "a" },
    { id: "42910", status: "a" },
    { id: "84633", status: "a" },
    { id: "24294", status: "a" },
    { id: "86651", status: "a" },
    { id: "74472", status: "a" },
    { id: "28381", status: "a" },
    { id: "26592", status: "a" },
    { id: "24326", status: "a" },
    { id: "21291", status: "a" },
    { id: "16521", status: "a" },
    { id: "87514", status: "a" },
    { id: "84934", status: "a" },
    { id: "80561", status: "a" },
    { id: "44643", status: "a" },
    { id: "33774", status: "a" },
    { id: "16039", status: "a" },
    { id: "69295", status: "a" },
    { id: "66981", status: "a" },
    { id: "66967", status: "a" },
    { id: "39097", status: "a" },
    { id: "56345", status: "a" },
    { id: "31068", status: "a" },
    { id: "86647", status: "a" },
    { id: "82767", status: "a" },
    { id: "53315", status: "a" },
    { id: "59100", status: "a" },
    { id: "29763", status: "a" },
    { id: "24873", status: "a" },
    { id: "85945", status: "a" },
    { id: "66919", status: "a" },
    { id: "46742", status: "a" },
    { id: "43833", status: "a" },
    { id: "24286", status: "a" },
    { id: "67263", status: "a" },
    { id: "24657", status: "a" },
    { id: "24850", status: "a" },
    { id: "33349", status: "a" },
    { id: "25343", status: "a" },
    { id: "17579", status: "a" },
    { id: "16159", status: "a" },
    { id: "10366", status: "a" },
    { id: "12872", status: "a" }
  ];

  let activeAxies = axies.filter(axie => axie.status == "a");
  let readyForDistriAxies = axies.filter(axie => axie.status == "r");
  let distributedAxies = axies.filter(axie => axie.status == "d");

  let visibleAxies = activeAxies;

  let tabdata = [
    { text: "Available", active: true },
    { text: "Ready for Distribution" },
    { text: "Distributed" }
  ];

  let activeTabText = "Available";
  let onChangeTab = text => {
    activeTabText = text.toLowerCase();

    if (activeTabText == "available") visibleAxies = activeAxies;
    else if (activeTabText == "ready for distribution")
      visibleAxies = readyForDistriAxies;
    else if (activeTabText == "distributed") visibleAxies = distributedAxies;
  };
</script>

<style>
  .title {
    font-size: 32px;
    font-weight: 600;
  }

  .leek-pool-promotion {
    width: 800px;
  }

  .infobar {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-dark-1);
    font-size: 12px;
    letter-spacing: 1px;
    opacity: 0.5;
    margin-bottom: 15px;
  }

  .h3 {
    font-size: 18px;
    font-weight: 500;
  }

  ul {
    list-style-type: disc;
    line-height: 200%;
  }

  ul li {
    margin-left: 20px;
  }

  .plate {
    margin-top: 40px;
    background-color: var(--color-light-1);
    border-radius: 20px;
    padding: 25px;
  }

  .fat {
    font-family: monospace;
    font-size: 18px;
    font-weight: bold;
    margin-right: 4px;
  }

  .axielist {
    display: flex;
    flex-flow: wrap;
  }

  .link {
    color: rgb(var(--palette-teal-800));
  }

  .link:hover {
    text-decoration: underline;
  }

  .bar {
    display: flex;
    justify-content: space-between;
  }

  .plate1 {
    position: relative;
  }

  .bg-bloom-img {
    position: absolute;
    width: 100px;
    height: auto;
    right: 50px;
    top: 50px;
  }
</style>

<div class="leek-pool-promotion ">
  <h1 class="infobar text-dark-2">Make Leeks Bloom Again</h1>
  <h1 class="title text-dark-2">Axie Promotion on Rarible</h1>

  <div class="plate1 plate text-dark-2" style="margin-top:40px">

    <img
      class="bg-bloom-img"
      src="images/promotion/axie-blooming-leek.png"
      alt="" />

    <div class="h3">Overview</div>

    <ul style="margin-top:20px;">
      <li>
        <a
          class="link"
          target="_blank"
          href="https://app.rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:13125:0xe293390d7651234c6dfb1f41a47358b9377c004f">
          Buy Blooming Leeks here
        </a>
      </li>
      <li>
        <span class="fat">50</span>
        Blooming Leeks available
      </li>
      <li>
        Each Blooming Leek will give you
        <span class="fat">1 Axie</span>
        randomly from the pool
      </li>
      <li>
        <span class="fat">0.06 ETH</span>
        per item
      </li>
    </ul>
  </div>

  <div class="text-dark-2" style="margin-top:40px">
    <div class="h3">Distribution</div>

    <ul style="margin-top:20px;">
      <li>
        After every
        <span class="fat">25</span>
        blooming leeks are sold, Axies will be picked from the pool and
        distributed
      </li>
      <li>
        Axies are only sent out to the buyers when gas is at
        <span class="fat">100</span>
        or lower
      </li>
    </ul>
  </div>

  <div style="margin-top:40px" class="text-dark-2">

    <div class="bar">
      <div class="h3">Axie Pool {activeAxies.length}</div>

      <Tabs tabs={tabdata} onChange={onChangeTab} />
    </div>

    <div class="axielist plate" style="margin-top:20px;">
      {#each visibleAxies as axie}
        <AxieImage id={axie.id} />
      {/each}
    </div>
  </div>
</div>
