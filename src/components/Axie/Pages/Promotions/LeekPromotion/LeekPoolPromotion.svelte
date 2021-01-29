<script>
  import { onMount } from "svelte";

  import AxieImage from "../../../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../../../LeekPromotion/Tabs.svelte";
  import Button from "../../../../Misc/Button.svelte";

  let axies = [
    { id: "86258", status: "d" },
    { id: "80665", status: "d" },
    { id: "74760", status: "d" },
    { id: "74495", status: "d" },
    { id: "18951", status: "d" },
    { id: "74753", status: "d" },
    { id: "91256", status: "d" },
    { id: "18450", status: "d" },
    { id: "42910", status: "d" },
    { id: "84633", status: "d" },
    { id: "24294", status: "d" },
    { id: "86651", status: "d" },
    { id: "74472", status: "d" },
    { id: "28381", status: "d" },
    { id: "26592", status: "d" },
    { id: "24326", status: "d" },
    { id: "21291", status: "d" },
    { id: "16521", status: "d" },
    { id: "87514", status: "d" },
    { id: "84934", status: "d" },
    { id: "80561", status: "d" },
    { id: "44643", status: "d" },
    { id: "33774", status: "d" },
    { id: "16039", status: "d" },
    { id: "69295", status: "d" },
    { id: "66981", status: "d" },
    { id: "66967", status: "d" },
    { id: "39097", status: "d" },
    { id: "56345", status: "d" },
    { id: "31068", status: "d" },
    { id: "86647", status: "d" },
    { id: "82767", status: "d" },
    { id: "53315", status: "d" },
    { id: "59100", status: "d" },
    { id: "29763", status: "d" },
    { id: "24873", status: "d" },
    { id: "85945", status: "d" },
    { id: "66919", status: "d" },
    { id: "46742", status: "d" },
    { id: "43833", status: "d" },
    { id: "24286", status: "d" },
    { id: "67263", status: "d" },
    { id: "24657", status: "d" },
    { id: "24850", status: "d" },
    { id: "33349", status: "d" },
    { id: "25343", status: "d" },
    { id: "17579", status: "d" },
    { id: "16159", status: "d" },
    { id: "10366", status: "d" },
    { id: "12872", status: "d" }
  ];

  let activeAxies = axies.filter(axie => axie.status == "a");
  let readyForDistriAxies = axies.filter(axie => axie.status == "r");
  let distributedAxies = axies.filter(axie => axie.status == "d");

  let visibleAxies = distributedAxies;

  let tabdata = [
    { text: "Available" },
    { text: "Ready for Distribution" },
    { text: "Distributed", active: true }
  ];

  let activeTabText = "Distributed";
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
  <h1 class="title text-dark-2">Axie Raffle #1</h1>

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
    <a href="/Promotion/PromotionLeekPool/PrizeDraw">
      <Button>Go to prize draw page</Button>
    </a>
  </div>

  <div style="margin-top:40px" class="text-dark-2">

    <div class="bar">
      <div class="h3">Axie Pool {visibleAxies.length}</div>

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
