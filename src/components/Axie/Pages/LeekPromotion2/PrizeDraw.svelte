<script>
  import { onMount } from "svelte";

  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";
  import Tabs from "../../../LeekPromotion/Tabs.svelte";
  import Button from "../../../Misc/Button.svelte";
  import BigButton from "../../../LeekPromotion/BigButton.svelte";
  import WinnerList from "../../../LeekPromotion/WinnerList.svelte";
  import Plate from "../../../UI/Plate.svelte";
  import Loader from "../../../UI/Loader.svelte";
  import AppBackground from "../../../Misc/AppBackground.svelte";
  import CloseIcon from "../../../Misc/Icons/general/close.svelte";

  import gsap, { Linear, Sine } from "gsap";

  let globalContainer;
  let particlePool = [];

  const generateParticles = () => {
    // generate particles
    let numParticles = 50;
    for (var i = 0; i < numParticles; i++) {
      let particle = document.createElement("div");
      particle.className = "particle";
      globalContainer.appendChild(particle);
      particlePool.push(particlePool);

      // animate
      let w = window.innerWidth;
      let h = window.innerHeight;

      gsap.set(particle, {
        x: Random(w),
        y: random(-100, 100),
        opacity: 1,
        scale: Random(0.5) + 0.5,
        backgroundColor: "hsl(" + random(0, 360) + ",50%,50%)"
      });

      gsap.to(particle, {
        duration: Random(5) + 1,
        y: h,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -5
      });
      gsap.to(particle, {
        duration: Random(5) + 1,
        x: "+=70",
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      gsap.to(particle, {
        duration: Random(5) + 1,
        rotationY: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      gsap.to(particle, {
        duration: Random(5) + 1,
        rotationX: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      gsap.to(particle, {
        duration: Random(5) + 1,
        rotationZ: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
    }
  };

  const destroyParticles = () => {
    for (var i = 0; i < particlePool.length; i++) {
      globalContainer.removeChild(particlePool[i]);
    }
  };

  const Random = max => Math.random() * max;
  const random = (min, max) => min + Math.floor(Math.random() * (max - min));

  onMount(() => {});

  let loading = false;

  // prettier-ignore
  let axies = [
    //mystics
    { id: "462", status: "a", type: "axie", color:"golden" },
    // spruce
    { id: "24272", status: "a", type: "axie", color:"golden" },
    // land
    { id: "-43/7", status: "a", type: "land-mystic", color:"grey" },
    { id: "-44/-112", status: "a", type: "land-arctic", color:"grey" },
    { id: "-103/-22", status: "a", type: "land-arctic", color:"grey" },
    { id: "-86/-111", status: "a", type: "land-forest", color:"grey" },
    { id: "-140/-11", status: "a", type: "land-forest", color:"grey" },
    { id: "-134/-39", status: "a", type: "land-forest", color:"grey" },
    { id: "-72/-94", status: "a", type: "land-forest", color:"grey" },
    // axies
    { id: "86285", status: "a", type: "axie", color:"green" },
    { id: "86264", status: "a", type: "axie", color:"white" },
    { id: "82769", status: "a", type: "axie", color:"white" },
    { id: "76815", status: "a", type: "axie", color:"green" },
    { id: "73007", status: "a", type: "axie", color:"green" },
    { id: "69564", status: "a", type: "axie", color:"green" },
    { id: "62815", status: "a", type: "axie", color:"green" },
    { id: "48272", status: "a", type: "axie", color:"green" },
    { id: "32018", status: "a", type: "axie", color:"green" },
    { id: "29780", status: "a", type: "axie", color:"green" },
    { id: "25899", status: "a", type: "axie", color:"green" },
    { id: "24939", status: "a", type: "axie", color:"green" },
    { id: "24877", status: "a", type: "axie", color:"green" },
    { id: "20407", status: "a", type: "axie", color:"black" },
    { id: "19671", status: "a", type: "axie", color:"green" },
    { id: "16519", status: "a", type: "axie", color:"white" },
    { id: "16255", status: "a", type: "axie", color:"green" },
    { id: "67259", status: "a", type: "axie", color:"green" },
    { id: "52071", status: "a", type: "axie", color:"green" },
    { id: "45196", status: "a", type: "axie", color:"green" },
    { id: "44818", status: "a", type: "axie", color:"green" },
    { id: "44809", status: "a", type: "axie", color:"white" },
    { id: "23814", status: "a", type: "axie", color:"green" },
    { id: "14240", status: "a", type: "axie", color:"green" },
    { id: "19203", status: "a", type: "axie", color:"green" },
    { id: "19176", status: "a", type: "axie", color:"green" },
    { id: "18954", status: "a", type: "axie", color:"green" },
    { id: "18950", status: "a", type: "axie", color:"green" },
    { id: "22308", status: "a", type: "axie", color:"green" },
    { id: "87150", status: "a", type: "axie", color:"purple" },
    { id: "87140", status: "a", type: "axie", color:"purple" },
    { id: "86592", status: "a", type: "axie", color:"purple" },
    { id: "84955", status: "a", type: "axie", color:"black" },
    { id: "54816", status: "a", type: "axie", color:"purple" },
    { id: "39273", status: "a", type: "axie", color:"purple" },
    { id: "22541", status: "a", type: "axie", color:"purple" },
    { id: "11703", status: "a", type: "axie", color:"purple" },
    { id: "91720", status: "a", type: "axie", color:"orange" },
    { id: "49254", status: "a", type: "axie", color:"orange" },
    { id: "32032", status: "a", type: "axie", color:"brown" },
    { id: "11998", status: "a", type: "axie", color:"yellow" },
    { id: "87152", status: "a", type: "axie", color:"yellow" },
    { id: "86607", status: "a", type: "axie", color:"yellow" },
    { id: "17669", status: "a", type: "axie", color:"orange" },
    { id: "10506", status: "a", type: "axie", color:"yellow" },
    { id: "80706", status: "a", type: "axie", color:"red" },
    { id: "77561", status: "a", type: "axie", color:"red" },
    { id: "72940", status: "a", type: "axie", color:"red" },
    { id: "45459", status: "a", type: "axie", color:"red" },
    { id: "39216", status: "a", type: "axie", color:"red" },
    { id: "16808", status: "a", type: "axie", color:"red" },
    { id: "15522", status: "a", type: "axie", color:"red" },
    { id: "82475", status: "a", type: "axie", color:"blue" },
    { id: "66891", status: "a", type: "axie", color:"cyan" },
    { id: "39071", status: "a", type: "axie", color:"black" },
    { id: "33295", status: "a", type: "axie", color:"cyan" },
    { id: "24361", status: "a", type: "axie", color:"blue" },
    { id: "20229", status: "a", type: "axie", color:"black" },
    { id: "18585", status: "a", type: "axie", color:"blue" },
    { id: "18584", status: "a", type: "axie", color:"white" },
    { id: "11688", status: "a", type: "axie", color:"blue" },
    { id: "138848", status: "a", type: "axie", color:"white" },
    { id: "83320", status: "a", type: "axie", color:"pink" },
    { id: "66997", status: "a", type: "axie", color:"white" },
    { id: "47830", status: "a", type: "axie", color:"white" },
    { id: "26602", status: "a", type: "axie", color:"pink" },
    { id: "21274", status: "a", type: "axie", color:"pink" },
    { id: "13886", status: "a", type: "axie", color:"white" },
    { id: "58711", status: "a", type: "axie", color:"green" },
    { id: "52008", status: "a", type: "axie", color:"green" },
    { id: "24950", status: "a", type: "axie", color:"green" }
  ];

  let axies2 = [];

  let activeAxies = axies.filter(axie => axie.status == "a");
  let readyForDistriAxies = axies.filter(axie => axie.status == "r");
  let distributedAxies = axies.filter(axie => axie.status == "d");

  // prettier-ignore
  let winners = [
    {
      "name": "Catdicatx",
      "tickets": 8,
      "axies": []
    },
    {
      "name": "ak",
      "tickets": 5,
      "axies": []
    },
    {
      "name": "tigre2001tigre",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "RCTech",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "enjoi",
      "tickets": 8,
      "axies": []
    },
    {
      "name": "wiceTroc1ty",
      "tickets": 3,
      "axies": []
    },
    {
      "name": "BinaryAssets",
      "tickets": 3,
      "axies": []
    },
    {
      "name": "paladinlll",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Big Crit Britt",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Siddartha",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "AutumnWyvern",
      "tickets": 2,
      "axies": []
    },
    {
      "name": "Enforcerj",
      "tickets": 5,
      "axies": []
    },
    {
      "name": "0x67243828e8c300355d2924611eeaabddfe1516dd",
      "tickets": 4,
      "axies": []
    },
    {
      "name": "b-e-e",
      "tickets": 6,
      "axies": []
    },
    {
      "name": "RunTheJewels",
      "tickets": 2,
      "axies": []
    },
    {
      "name": "Chaz",
      "tickets": 2,
      "axies": []
    },
    {
      "name": "Just1more",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Josh",
      "tickets": 4,
      "axies": []
    },
    {
      "name": "IamTroll",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Ouchie",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Wulfnite?",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Koilll",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "OhhShiny",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "milky cookies",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "krumrein.eth",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "flop - florycian",
      "tickets": 7,
      "axies": []
    },
    {
      "name": "veilvi",
      "tickets": 1,
      "axies": []
    },
    {
      "name": "Rhengar",
      "tickets": 7,
      "axies": []
    }
  ];

  let winnerPointer = 0;

  let lastPickedAxie = null;
  let lastPickedWinner = null;
  let showAxieAnimation = true;
  let fadeInGlobalContainer = false;

  let pickAxie = async () => {
    showAxieAnimation = false;
    fadeInGlobalContainer = false;

    // set loading
    loading = true;
    //await delay(500);
    loading = false;

    window.setTimeout(() => {
      fadeInGlobalContainer = true;
    }, 10);

    window.setTimeout(() => {
      showAxieAnimation = true;
    }, 10);

    // pick random axie
    const shuffled = axies.sort(() => 0.5 - Math.random());
    let selected = shuffled.splice(0, 1);
    let pickedAxie = selected[0];

    axies = shuffled;
    axies2 = [...axies2, pickedAxie];
    lastPickedAxie = pickedAxie;

    // pick random winner
    let newWinners = [...winners];
    let remainingWinners = newWinners.filter(r => r.tickets > 0);
    let currentWinner = randomPick(remainingWinners);
    newWinners = newWinners.map(w => {
      if (w.name == currentWinner.name) {
        return {
          ...w,
          tickets: --w.tickets,
          axies: [...w.axies, pickedAxie]
        };
      } else return w;
    });
    winners = newWinners;
    lastPickedWinner = currentWinner;

    // theme bg
    globalContainer.setAttribute("theme", lastPickedAxie.color);

    // start particle animation
    destroyParticles();
    generateParticles();
  };

  const closePickedAxie = () => {
    lastPickedAxie = false;
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const randomPick = arr => arr[Math.floor(Math.random() * arr.length)];
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

  .leek-pool-promotion :global(.particle) {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #00ff00;
    z-index: 2;
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
    display: flex;
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
    width: 320px;
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
  }
  .button-container.loading {
    pointer-events: none;
    opacity: 0.3;
    user-select: none;
  }

  .global-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: #000000e3;
    display: none;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.65, -0.1, 0.43, 0.99);
  }

  .leek-pool-promotion :global(.global-container[theme="golden"]) {
    background: rgb(249 210 68 / 76%);
    color: #735e22;
  }

  .leek-pool-promotion :global(.global-container[theme="grey"]) {
    background: #100400e3;
    color: white;
  }

  .leek-pool-promotion :global(.global-container[theme="blue"]) {
    background: rgb(217 243 255 / 88%);
    color: #0c2a3e;
  }

  .leek-pool-promotion :global(.global-container[theme="white"]) {
    background: #ffffffe3;
    color: #3a2121;
  }
  .leek-pool-promotion :global(.global-container[theme="black"]) {
    background: #100400e3;
    color: white;
  }

  .leek-pool-promotion :global(.global-container[theme="orange"]) {
    background: #fff3e4d9;
    color: #401f08;
  }
  .leek-pool-promotion :global(.global-container[theme="purple"]) {
    background: #f5e1ffde;
    color: #360c3e;
  }

  .leek-pool-promotion :global(.global-container[theme="cyan"]) {
    background: #abfff0de;
    color: #0d3533;
  }

  .leek-pool-promotion :global(.global-container[theme="green"]) {
    background: #f5ffe7e0;
    color: #162914;
  }

  .leek-pool-promotion :global(.global-container[theme="yellow"]) {
    background: #fff2cec7;
    color: #352a08;
  }

  .leek-pool-promotion :global(.global-container[theme="red"]) {
    background: #ffe0eee0;
    color: #310c09;
  }

  .leek-pool-promotion :global(.global-container[theme="pink"]) {
    background: #ffcff2cf;
    color: #3a0d15;
  }

  .leek-pool-promotion :global(.global-container[theme="brown"]) {
    background: #fff7e7d6;
    color: #44270d;
  }

  .global-container.active {
    display: block;
  }
  .global-container.visible {
    opacity: 1;
  }

  .revealed-axie {
    position: absolute;
    z-index: 100;
    top: 10px;
    transform-origin: center center;
    transition: all 0.5s cubic-bezier(0.65, -0.1, 0.43, 0.99);
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 650px;
  }

  .revealed-axie .scaler:hover {
    filter: brightness(0.4);
    filter: contrast(200%);
    filter: drop-shadow(0px 5px 25px rgba(150, 180, 240, 0.5));
  }

  .revealed-axie .scaler {
    transform-origin: center center;
    transition: all 0.5s cubic-bezier(0.65, -0.1, 0.43, 0.99);
    transform: scale(0.01) rotate(0);
  }

  .revealed-axie.show .scaler {
    transition: all 0.5s cubic-bezier(0.65, -0.1, 0.43, 0.99);
    transform: scale(1) translate(4px, 4px);
  }

  .revealed-axie :global(.id) {
    display: none;
  }

  .winner-reveal-text {
    font-size: 80px;
    /*color: white;*/
    text-align: center;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 2px;
    /*text-shadow: 0 2px 9px #ffffff70;*/
    margin-bottom: 10px;
    line-height: 160%;
    max-width: 100%;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: pre;
  }
  .tickets-left {
    font-size: 13px;
    opacity: 0, 5;
  }

  .closer {
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 20px;
    width: 100px;
    height: 100px;
    z-index: 150;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .closer :global(svg) {
    width: 50px;
    height: 60px;
    fill: white;
  }

  .finish-text {
    font-size: 16px;
    line-height: 130%;
    font-weight: bold;

    border: 2px solid;
    padding: 15px;
    border-radius: 15px;
    display: inline-flex;
    flex-flow: column;
  }
</style>

<div class="leek-pool-promotion">

  {#if loading}
    <div class="loader">
      <Loader />
    </div>
  {/if}

  <div
    class="global-container"
    bind:this={globalContainer}
    class:active={lastPickedAxie}
    class:visible={fadeInGlobalContainer}>

    {#if lastPickedAxie}
      <div class="closer" on:click={closePickedAxie}>
        <CloseIcon />
      </div>

      <div
        class={`revealed-axie ${showAxieAnimation ? 'show' : ''}`}
        on:click={e => {
          e.stopPropagation();
        }}>

        {#if lastPickedWinner}
          <div class="winner-reveal-text">{lastPickedWinner.name}</div>
        {/if}

        <div class="scaler">
          <AxieImage {...lastPickedAxie} />
        </div>
      </div>
    {/if}
  </div>

  <h1 class="infobar text-dark-2">Rising Leaf Promotion</h1>
  <h1 class="title text-dark-2">Prize Draw - Rising Leaf</h1>

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

          <BigButton>Pick Prize 1/{axies.length}</BigButton>
        </div>
      {:else}
        <div style="margin-top:15px;" class="finish-text">

          <p>All prizes picked!</p>

          <p>Please send the text below to the organizer.</p>
          <p>Please also send a screenshot of the axie list.</p>
          <textarea style="margin-top:5px;" rows="8" cols="50">
            {JSON.stringify(winners)}
          </textarea>

        </div>
      {/if}

      <div class="block">

        <div class="section">
          <div class="plate-text">Available {axies.length}</div>
          <div class="axielist">
            {#each axies as axie}
              <div class="axie">
                <AxieImage {...axie} />
              </div>
            {/each}
          </div>
        </div>

        <div class="section">
          <div class="plate-text">Ready for distribution {axies2.length}</div>
          <div class="axielist">
            {#each axies2 as axie2}
              <div class="axie">
                <AxieImage {...axie2} />
              </div>
            {/each}
          </div>
        </div>
      </div>

    </div>

    <div style="display:flex; flex-flow:column;" class="text-dark-2">

      <div class="plate-text">Winner list</div>
      <Plate>
        <div class="winnerlist">
          <WinnerList users={winners} />
        </div>
      </Plate>
    </div>
  </div>
</div>
