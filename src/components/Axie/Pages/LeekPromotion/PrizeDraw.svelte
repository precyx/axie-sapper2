<script>
  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../../LeekPromotion/Tabs.svelte";
  import Button from "../../../Misc/Button.svelte";
  import BigButton from "../../../LeekPromotion/BigButton.svelte";
  import WinnerList from "../../../LeekPromotion/WinnerList.svelte";

  import Loader from "../../../UI/Loader.svelte";

  let loading = false;

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

  let axies2 = [];

  let activeAxies = axies.filter(axie => axie.status == "a");
  let readyForDistriAxies = axies.filter(axie => axie.status == "r");
  let distributedAxies = axies.filter(axie => axie.status == "d");

  let winners = [
    {
      name: "RCTech",
      tickets: 3,
      axies: []
    },
    {
      name: "Reillz",
      tickets: 3,
      axies: []
    },
    {
      name: "catdicax",
      tickets: 1,
      axies: []
    },
    {
      name: "tigre2001tigre",
      tickets: 2,
      axies: []
    },
    {
      name: "AutumnWyvern",
      tickets: 1,
      axies: []
    },
    {
      name: "Jihoz",
      tickets: 5,
      axies: []
    },
    {
      name: "ak",
      tickets: 5,
      axies: []
    },
    {
      name: "Baronar",
      tickets: 8,
      axies: []
    },
    {
      name: "Artic",
      tickets: 8,
      axies: []
    },
    {
      name: "BinaryAssets",
      tickets: 5,
      axies: []
    },
    {
      name: "Jayem",
      tickets: 1,
      axies: []
    },
    {
      name: "Veilvi",
      tickets: 2,
      axies: []
    },
    {
      name: "Milky Cookies",
      tickets: 1,
      axies: []
    },
    {
      name: "Udinujang",
      tickets: 1,
      axies: []
    },
    {
      name: "JAMA | Pemus",
      tickets: 1,
      axies: []
    },
    {
      name: "sun jae",
      tickets: 1,
      axies: []
    },
    {
      name: "Dhamenz",
      tickets: 1,
      axies: []
    },
    {
      name: "Onani",
      tickets: 1,
      axies: []
    }
  ];

  let winnerPointer = 0;

  let lastPickedAxie = null;
  let showAxieAnimation = true;

  let pickAxie = async () => {
    showAxieAnimation = false;
    // set loading
    loading = true;
    await delay(1000);
    loading = false;
    await delay(100);
    showAxieAnimation = true;

    // pick random axie
    const shuffled = axies.sort(() => 0.5 - Math.random());
    let selected = shuffled.splice(0, 1);
    let pickedAxie = selected[0];

    axies = shuffled;
    axies2 = [...axies2, pickedAxie];
    lastPickedAxie = pickedAxie;

    // pick winner
    let newWinners = [...winners];
    let currentWinner = newWinners[winnerPointer];
    currentWinner.tickets--;

    // increase pointer if no tickets left
    if (currentWinner.tickets <= 0) winnerPointer++;

    // assign axie to winner
    currentWinner.axies.push(pickedAxie);
    winners = newWinners;

    await delay(3000);
    lastPickedAxie = false;
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));
</script>

<style>
  .title {
    font-size: 32px;
    font-weight: 600;
  }

  .leek-pool-promotion {
    width: 800px;
    position: relative;
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

  .region {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .axielist {
    background-color: var(--color-light-1);
    border-radius: 20px;
    padding: 25px;

    width: 500px;
  }
  .axie {
    width: 90px;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: -15px;
    margin-bottom: -15px;
  }
  .axie :global(.id) {
    display: none;
  }

  .winnerlist {
    width: 300px;
  }

  .plate-text {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .block {
    margin-top: 20px;
    margin-right: 20px;
  }

  .section {
    display: flex;
    flex-flow: column;
    margin-top: 20px;
  }

  .input-random {
    padding: 10px;
    box-shadow: 0 2px 2px rgb(0 0 0 / 17%);
    border-radius: 5px;
  }

  .loader {
    position: absolute;
    top: 75px;
    left: 310px;
  }

  .button-container {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    width: 210px;
  }
  .button-container.loading {
    pointer-events: none;
    opacity: 0.3;
    user-select: none;
  }

  .revealed-axie {
    position: absolute;
    z-index: 100;
    top: 10px;
    transform-origin: center center;
    transition: all 0.5s ease-in-out;
    transform: scale(0.01);
  }

  .revealed-axie.show {
    transition: all 0.5s ease-in-out;
    transform: scale(1);
  }

  .revealed-axie :global(.id) {
    display: none;
  }
</style>

<div class="leek-pool-promotion ">

  {#if loading}
    <div class="loader">
      <Loader />
    </div>
  {/if}

  {#if lastPickedAxie}
    <div class="revealed-axie" class:show={showAxieAnimation}>
      <AxieImage id={lastPickedAxie.id} />
    </div>
  {/if}

  <h1 class="infobar text-dark-2">Make Leeks Bloom Again</h1>
  <h1 class="title text-dark-2">Prize Draw</h1>

  <div class="region" style="margin-top:40px">
    <div class="text-dark-2" style="display:flex;flex-flow:column">

      <div style="display:none;">
        <div class="plate-text">Input Seed for RNG</div>
        <input
          type="text"
          placeholder="Enter text for RNG"
          class="input-random" />
      </div>
      {#if axies.length > 0}
        <div on:click={pickAxie} class="button-container" class:loading>

          <BigButton>Pick Axie (1/{axies.length})</BigButton>
        </div>
      {:else}
        <p style="margin-top:15px;">No axies left!</p>
      {/if}

      <div class="block">

        <div class="section">
          <div class="plate-text">Available {axies.length}</div>
          <div class="axielist">
            {#each axies as axie}
              <div class="axie">
                <AxieImage id={axie.id} />
              </div>
            {/each}
          </div>
        </div>

        <div class="section">
          <div class="plate-text">Ready for distribution {axies2.length}</div>
          <div class="axielist">
            {#each axies2 as axie2}
              <div class="axie">
                <AxieImage id={axie2.id} />
              </div>
            {/each}
          </div>
        </div>
      </div>

    </div>
    <div class="winnerlist">
      <WinnerList users={winners} />
    </div>
  </div>
</div>
