<script>
  import { onMount } from "svelte";

  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../../LeekPromotion/Tabs.svelte";
  import Button from "../../../Misc/Button.svelte";
  import DynamicAxie from "../../../Axie/DynamicAxie.svelte";
  import { getAxieDetail } from "../../../../services/AxieDataService";

  let axies = [
    //mystics
    { id: "462", status: "a", type: "axie" },
    // spruce
    { id: "24272", status: "a", type: "axie" },
    // land
    { id: "-43/7", status: "a", type: "land-mystic" },
    { id: "-44/-112", status: "a", type: "land-arctic" },
    { id: "-103/-22", status: "a", type: "land-arctic" },
    { id: "-86/-111", status: "a", type: "land-forest" },
    { id: "-140/-11", status: "a", type: "land-forest" },
    { id: "-134/-39", status: "a", type: "land-forest" },
    { id: "-72/-94", status: "a", type: "land-forest" },
    // axies
    { id: "86285", status: "a", type: "axie" },
    { id: "86264", status: "a", type: "axie" },
    { id: "82769", status: "a", type: "axie" },
    { id: "76815", status: "a", type: "axie" },
    { id: "73007", status: "a", type: "axie" },
    { id: "69564", status: "a", type: "axie" },
    { id: "62815", status: "a", type: "axie" },
    { id: "48272", status: "a", type: "axie" },
    { id: "32018", status: "a", type: "axie" },
    { id: "29780", status: "a", type: "axie" },
    { id: "25899", status: "a", type: "axie" },
    { id: "24939", status: "a", type: "axie" },
    { id: "24877", status: "a", type: "axie" },
    { id: "20407", status: "a", type: "axie" },
    { id: "19671", status: "a", type: "axie" },
    { id: "16519", status: "a", type: "axie" },
    { id: "16255", status: "a", type: "axie" },
    { id: "67259", status: "a", type: "axie" },
    { id: "52071", status: "a", type: "axie" },
    { id: "45196", status: "a", type: "axie" },
    { id: "44818", status: "a", type: "axie" },
    { id: "44809", status: "a", type: "axie" },
    { id: "23814", status: "a", type: "axie" },
    { id: "14240", status: "a", type: "axie" },
    { id: "19203", status: "a", type: "axie" },
    { id: "19176", status: "a", type: "axie" },
    { id: "18954", status: "a", type: "axie" },
    { id: "18950", status: "a", type: "axie" },
    { id: "22308", status: "a", type: "axie" },
    { id: "87150", status: "a", type: "axie" },
    { id: "87140", status: "a", type: "axie" },
    { id: "86592", status: "a", type: "axie" },
    { id: "84955", status: "a", type: "axie" },
    { id: "54816", status: "a", type: "axie" },
    { id: "39273", status: "a", type: "axie" },
    { id: "22541", status: "a", type: "axie" },
    { id: "11703", status: "a", type: "axie" },
    { id: "91720", status: "a", type: "axie" },
    { id: "49254", status: "a", type: "axie" },
    { id: "32032", status: "a", type: "axie" },
    { id: "11998", status: "a", type: "axie" },
    { id: "87152", status: "a", type: "axie" },
    { id: "86607", status: "a", type: "axie" },
    { id: "17669", status: "a", type: "axie" },
    { id: "10506", status: "a", type: "axie" },
    { id: "80706", status: "a", type: "axie" },
    { id: "77561", status: "a", type: "axie" },
    { id: "72940", status: "a", type: "axie" },
    { id: "45459", status: "a", type: "axie" },
    { id: "39216", status: "a", type: "axie" },
    { id: "16808", status: "a", type: "axie" },
    { id: "15522", status: "a", type: "axie" },
    { id: "82475", status: "a", type: "axie" },
    { id: "66891", status: "a", type: "axie" },
    { id: "39071", status: "a", type: "axie" },
    { id: "33295", status: "a", type: "axie" },
    { id: "24361", status: "a", type: "axie" },
    { id: "20229", status: "a", type: "axie" },
    { id: "18585", status: "a", type: "axie" },
    { id: "18584", status: "a", type: "axie" },
    { id: "11688", status: "a", type: "axie" },
    { id: "138848", status: "a", type: "axie" },
    { id: "83320", status: "a", type: "axie" },
    { id: "66997", status: "a", type: "axie" },
    { id: "47830", status: "a", type: "axie" },
    { id: "26602", status: "a", type: "axie" },
    { id: "21274", status: "a", type: "axie" },
    { id: "13886", status: "a", type: "axie" },
    { id: "58711", status: "a", type: "axie" },
    { id: "52008", status: "a", type: "axie" },
    { id: "24950", status: "a", type: "axie" }
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

  onMount(async () => {
    loadAxies();
  });

  let axie_1;
  let axie_2;

  const loadAxies = async () => {
    let data1 = await getAxieDetail({ axieId: 462 });
    let data2 = await getAxieDetail({ axieId: 24272 });

    console.log("axie2", data2.data.axie);

    axie_1 = data1.data.axie;
    axie_2 = data2.data.axie;
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
    width: 200px;
    height: auto;
    right: 25px;
    top: 25px;
  }

  .axie {
    width: 180px;
  }

  .mini-notice {
    font-size: 11px;
    font-weight: 600;
    opacity: 0.5;
    width: 270px;
    display: inline-flex;
    line-height: 120%;
    border: 1px solid;
    padding: 3px 6px;
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.2);
  }
</style>

<div class="leek-pool-promotion ">
  <h1 class="infobar text-dark-2">The Last Mystic</h1>
  <h1 class="title text-dark-2">Axie Raffle #2</h1>

  <div class="plate1 plate text-dark-2" style="margin-top:40px">

    <img
      class="bg-bloom-img"
      src="images/promotion/the_last_mystic.gif"
      alt="" />

    <div class="h3">Overview</div>

    <ul style="margin-top:20px;">
      <li style="display:none;">
        <a
          class="link"
          target="_blank"
          href="https://app.rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:13125:0xe293390d7651234c6dfb1f41a47358b9377c004f">
          Buy Tickets here
        </a>
      </li>
      <li>
        <span class="fat">80</span>
        Tickets available
      </li>
      <li>
        Each ticket will give you
        <span class="fat">1 Prize</span>
        randomly from the prize pool
      </li>
      <li>
        <span class="fat">0.1 ETH</span>
        per ticket
      </li>
      <li>
        Prizes are only sent out to the buyers when gas is at
        <span class="fat">100</span>
        or lower
      </li>

      <li>
        Max
        <span class="fat">8</span>
        Tickets are allowed per address
        <span class="mini-notice">
          If you buy more than 8 tickets the additional tickets will be
          distributed to the other ticket buyers!
        </span>
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

  <div style="margin-top:20px; display:none;">
    <a href="/PromotionLeekPool/PrizeDraw">
      <Button>Go to prize draw page</Button>
    </a>
  </div>

  <div style="margin-top:40px;" class="text-dark-2">
    <div class="h3" style="margin-bottom:10px;">Top Prizes</div>

    <div>
      {#if axie_1 && axie_2}
        <DynamicAxie type={'parts'} axie={axie_1} />
        <DynamicAxie type={'parts'} axie={axie_2} />
      {/if}
    </div>
  </div>

  <div style="margin-top:40px" class="text-dark-2">

    <div class="bar">
      <div class="h3">All Prizes {visibleAxies.length}</div>

      <Tabs tabs={tabdata} onChange={onChangeTab} />
    </div>

    <div class="axielist plate" style="margin-top:20px;">
      {#each visibleAxies as axie}
        <div class="axie">
          <AxieImage id={axie.id} type={axie.type} />
        </div>
      {/each}
    </div>
  </div>
</div>
