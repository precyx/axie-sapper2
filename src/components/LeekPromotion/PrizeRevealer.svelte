<script>
  import gsap, { Linear, Sine } from "gsap";

  import CloseIcon from "../Misc/Icons/general/close.svelte";
  import AxieImage from "./AxieImage.svelte";

  export let themeColor; // color theme of the reveal background
  export let showFadeInAnimation = false;
  export let showRevealAnimation = false;
  export let lastPickedAxie = null;
  export let lastPickedWinner = null;

  let themeMap = {
    default: {
      numParticles: 100,
      particleColors: [
        "rgb(169, 40, 249)",
        "rgb(64, 16, 140)",
        "rgb(231, 58, 153)",
        "rgb(234, 184, 66)"
      ]
    },
    golden: {
      numParticles: 250,
      particleColors: [
        "rgb(248, 183, 63)",
        "rgb(196, 132, 6)",
        "rgb(242, 39, 124)"
      ]
    },
    grey: {
      particleColors: [
        "rgb(169, 40, 249)",
        "rgb(64, 16, 140)",
        "rgb(231, 58, 153)",
        "rgb(234, 184, 66)"
      ]
    },
    green: {
      particleColors: [
        "rgb(169, 204, 42)",
        "rgb(68, 145, 24)",
        "rgb(238, 206, 47)"
      ]
    },
    white: {
      particleColors: [
        "rgb(169, 40, 249)",
        "rgb(64, 16, 140)",
        "rgb(231, 58, 153)",
        "rgb(234, 184, 66)"
      ]
    },
    black: {
      particleColors: [
        "rgb(169, 40, 249)",
        "rgb(64, 16, 140)",
        "rgb(231, 58, 153)",
        "rgb(234, 184, 66)"
      ]
    },
    purple: {
      particleColors: [
        "rgb(169, 40, 249)",
        "rgb(64, 16, 140)",
        "rgb(189, 37, 194)",
        "rgb(193, 32, 225)"
      ]
    }
  };

  let globalContainer;
  let particlePool = [];
  let tweens = [];

  $: if ((showRevealAnimation, lastPickedAxie)) {
    if (showRevealAnimation == true && lastPickedAxie) {
      console.log(particlePool);
      window.setTimeout(() => {
        generateParticles();
      }, 0);
    }
  }

  const getThemeVars = () => {
    if (!lastPickedAxie) return themeMap.default;
    return themeMap[lastPickedAxie.color || ""] || themeMap.default;
  };

  const generateParticles = () => {
    // generate particles
    console.log("theme", lastPickedAxie.color, getThemeVars());
    let numParticles = getThemeVars().numParticles || 50;

    for (var i = 0; i < numParticles; i++) {
      let particle = document.createElement("div");
      particle.className = "particle";
      globalContainer.appendChild(particle);
      particlePool.push(particle);

      // animate
      let w = window.innerWidth;
      let h = window.innerHeight;
      let bgcolor = getThemeVars().particleColors
        ? randomPick(getThemeVars().particleColors)
        : "hsl(" + random(0, 360) + ",50%,50%)";

      gsap.set(particle, {
        x: Random(w),
        y: random(-100, 100),
        opacity: 1,
        scale: Random(0.5) + 0.5,
        backgroundColor: bgcolor
      });

      let t1 = gsap.to(particle, {
        duration: Random(5) + 1,
        y: h,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -5
      });
      let t2 = gsap.to(particle, {
        duration: Random(5) + 1,
        x: "+=70",
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      let t3 = gsap.to(particle, {
        duration: Random(5) + 1,
        rotationY: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      let t4 = gsap.to(particle, {
        duration: Random(5) + 1,
        rotationX: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      let t5 = gsap.to(particle, {
        duration: Random(5) + 1,
        rotationZ: Random(360),
        rotation: Random(360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      tweens.push(t1, t2, t3, t4, t5);
    }
  };

  const destroyParticles = () => {
    for (var i = 0; i < tweens.length; i++) {
      let tween = tweens[i];
      tween.kill();
    }
    tweens = [];

    for (var i = 0; i < particlePool.length; i++) {
      let particle = particlePool[i];
      globalContainer.removeChild(particle);
    }
    particlePool = [];
  };

  const closePickedAxie = () => {
    destroyParticles();
    lastPickedAxie = false;
  };

  const Random = max => Math.random() * max;
  const random = (min, max) => min + Math.floor(Math.random() * (max - min));
  const randomPick = arr => arr[Math.floor(Math.random() * arr.length)];
</script>

<style>
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

  .global-container[theme="golden"] {
    background: rgb(249 210 68 / 76%);
    color: #735e22;
  }

  .global-container[theme="grey"] {
    background: #100400e3;
    color: white;
  }

  .global-container[theme="blue"] {
    background: rgb(217 243 255 / 88%);
    color: #0c2a3e;
  }

  .global-container[theme="white"] {
    background: #ffffffe3;
    color: #3a2121;
  }
  .global-container[theme="black"] {
    background: #100400e3;
    color: white;
  }

  .global-container[theme="orange"] {
    background: #fff3e4d9;
    color: #401f08;
  }
  .global-container[theme="purple"] {
    background: #f5e1ffde;
    color: #360c3e;
  }

  .global-container[theme="cyan"] {
    background: #abfff0de;
    color: #0d3533;
  }

  .global-container[theme="green"] {
    background: #f5ffe7e0;
    color: #162914;
  }

  .global-container[theme="yellow"] {
    background: #fff2cec7;
    color: #352a08;
  }

  .global-container[theme="red"] {
    background: #ffe0eee0;
    color: #310c09;
  }

  .global-container[theme="pink"] {
    background: #ffcff2cf;
    color: #3a0d15;
  }

  .global-container[theme="brown"] {
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

  .global-container :global(.particle) {
    width: 18px;
    height: 18px;
    position: absolute;
    background-color: #00ff00;
    z-index: 2;
  }
</style>

<div
  class="global-container"
  bind:this={globalContainer}
  class:active={lastPickedAxie}
  class:visible={showFadeInAnimation}
  theme={themeColor}>

  {#if lastPickedAxie}
    <div class="closer" on:click={closePickedAxie}>
      <CloseIcon />
    </div>

    <div
      class={`revealed-axie ${showRevealAnimation ? 'show' : ''}`}
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
