<script>
  import ThemeController from "./ThemeController.svelte";
  import { onMount } from "svelte";

  export let className = "";
  export let tone = "cold"; // cold or warm

  let toneClasses = "";
  $: if (tone == "cold") {
    toneClasses = "bg-dark-shimmer-2";
  } else if (tone == "warm") {
    toneClasses = "bg-dark-shimmer-A-2";
  }

  let url = "";

  const isActive = () => {};

  onMount(() => {
    url = window.location.href;
  });
</script>

<style>
  .headbar {
    /*margin-bottom: 40px;*/
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    backdrop-filter: blur(20px);
  }

  .center {
    width: 1000px;
    margin: 0 auto;
  }

  .sidespace {
    display: flex;
    align-items: center;
    width: 200px;
  }

  .item {
    height: 100%;
    padding: 0 12px;
    margin: 0 4px;
    align-items: center;
  }

  .item img {
    height: 30px;
  }

  .item p {
    font-size: 14px;
    margin-left: 8px;
    font-weight: 500;
  }

  .item.active {
    border-bottom: 2px solid rgb(var(--color-primary-900));
    background: rgba(var(--color-primary-1000), 0.08);
  }
</style>

<div class="headbar flex {className} {toneClasses}">
  <div class="sidespace sidespace-left">
    <ThemeController />
  </div>

  <div class="center flex text-dark-1">

    <div class="navigation flex ml-auto items-center">
      <a
        href="Encyclopedia"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Encyclopedia') != -1}>
        <img src="images/navigation/encyclopedia.png" alt="navigation point" />
        <p>Encyclopedia</p>
      </a>
      <a
        href="Market"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Market') != -1}>
        <img src="images/navigation/market.png" alt="navigation point" />
        <p>Market</p>
      </a>
      <a
        href="Profile"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Profile') != -1}>
        <img src="images/navigation/puff.png" alt="navigation point" />
        <p>Profile</p>
      </a>
      <a
        href="Player"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Player') != -1}>
        <img src="images/navigation/puff.png" alt="navigation point" />
        <p>Player</p>
      </a>

      <a
        href="Teams"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Teams') != -1}>
        <img src="images/navigation/puff.png" alt="navigation point" />
        <p>Teams</p>
      </a>

      <a
        href="PromotionLeekPool"
        class="item flex cursor-pointer"
        class:active={url.indexOf('PromotionLeekPool') != -1}>
        <img src="images/navigation/leek.png" alt="navigation point" />
        <p>Promotion</p>
      </a>

    </div>
  </div>

  <div class="sidespace sidespace-right" />
</div>
