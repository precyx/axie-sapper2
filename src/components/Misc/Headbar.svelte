<script>
  import ThemeController from "./ThemeController.svelte";

  let url = window.location.href;
</script>

<style>
  .headbar {
    margin-bottom: 40px;
    height: 60px;
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

<div class="headbar bg-dark-shimmer-2 flex">
  <div class="sidespace">
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
        <img src="images/navigation/my_axies.png" alt="navigation point" />
        <p>Profile</p>
      </a>
      <a
        href="Player"
        class="item flex cursor-pointer"
        class:active={url.indexOf('Player') != -1}>
        <img src="images/navigation/my_axies.png" alt="navigation point" />
        <p>Player</p>
      </a>

    </div>
  </div>

  <div class="sidespace" />
</div>
