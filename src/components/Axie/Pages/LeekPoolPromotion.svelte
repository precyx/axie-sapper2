<script>
  import { onMount } from "svelte";
  import { filters } from "../../../store/store.js";
  import AxieHighlightLayout from "../Layouts/AxieHighlightLayout.svelte";
  import AxieList from "../AxieList.svelte";
  import AxieCard from "../AxieCard.svelte";
  import Paginator from "../../Misc/Paginator.svelte";

  import AxieImage from "../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../LeekPromotion/Tabs.svelte";
  import Button from "../../Misc/Button.svelte";

  let axies = [
    { id: "86258", status: "r" },
    { id: "80665", status: "r" },
    { id: "74760", status: "r" },
    { id: "74495", status: "r" },
    { id: "18951", status: "r" },
    { id: "74753", status: "r" },
    { id: "91256", status: "r" },
    { id: "18450", status: "r" },
    { id: "42910", status: "r" },
    { id: "84633", status: "r" },
    { id: "24294", status: "r" },
    { id: "86651", status: "r" },
    { id: "74472", status: "r" },
    { id: "28381", status: "r" },
    { id: "26592", status: "r" },
    { id: "24326", status: "r" },
    { id: "21291", status: "r" },
    { id: "16521", status: "r" },
    { id: "87514", status: "r" },
    { id: "84934", status: "r" },
    { id: "80561", status: "r" },
    { id: "44643", status: "r" },
    { id: "33774", status: "r" },
    { id: "16039", status: "r" },
    { id: "69295", status: "r" },
    { id: "66981", status: "r" },
    { id: "66967", status: "r" },
    { id: "39097", status: "r" },
    { id: "56345", status: "r" },
    { id: "31068", status: "r" },
    { id: "86647", status: "r" },
    { id: "82767", status: "r" },
    { id: "53315", status: "r" },
    { id: "59100", status: "r" },
    { id: "29763", status: "r" },
    { id: "24873", status: "r" },
    { id: "85945", status: "r" },
    { id: "66919", status: "r" },
    { id: "46742", status: "r" },
    { id: "43833", status: "r" },
    { id: "24286", status: "r" },
    { id: "67263", status: "r" },
    { id: "24657", status: "r" },
    { id: "24850", status: "r" },
    { id: "33349", status: "r" },
    { id: "25343", status: "r" },
    { id: "17579", status: "r" },
    { id: "16159", status: "r" },
    { id: "10366", status: "r" },
    { id: "12872", status: "r" }
  ];

  let activeAxies = axies.filter(axie => axie.status == "a");
  let readyForDistriAxies = axies.filter(axie => axie.status == "r");
  let distributedAxies = axies.filter(axie => axie.status == "d");

  let visibleAxies = readyForDistriAxies;

  let tabdata = [
    { text: "Available" },
    { text: "Ready for Distribution", active: true },
    { text: "Distributed" }
  ];

  let activeTabText = "Ready for Distribution";
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

  .stronk {
    border: 1px solid rgb(var(--palette-teal-900));
    padding: 3px 15px;
    border-radius: 5px;
    color: rgb(var(--palette-teal-900));
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

  .axie {
    width: 180px;
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
      <li style="display:none">
        <a
          class="link"
          target="_blank"
          href="https://app.rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:13125:0xe293390d7651234c6dfb1f41a47358b9377c004f">
          Buy Blooming Leeks here
        </a>
      </li>
      <li>
        <span class="fat stronk">Blooming Leeks edition #1 are sold out</span>
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
      <li>
        Axies are only sent out to the buyers when gas is at
        <span class="fat">100</span>
        or lower
      </li>
    </ul>
  </div>

  <div class="text-dark-2" style="display:none; margin-top:40px">
    <div class="h3">Distribution</div>

    <ul style="margin-top:20px;">
      <li style="display:none;">
        After every
        <span class="fat">25</span>
        blooming leeks are sold, Axies will be picked from the pool and
        distributed
      </li>

    </ul>
  </div>

  <div style="margin-top:20px;">
    <a href="/PromotionLeekPool/PrizeDraw">
      <Button>Go to prize draw page</Button>
    </a>
  </div>

  <div style="margin-top:40px" class="text-dark-2">

    <div class="bar">
      <div class="h3">Axie Pool {activeAxies.length}</div>

      <Tabs tabs={tabdata} onChange={onChangeTab} />
    </div>

    <div class="axielist plate" style="margin-top:20px;">
      {#each visibleAxies as axie}
        <div class="axie">
          <AxieImage id={axie.id} />
        </div>
      {/each}
    </div>
  </div>
</div>
