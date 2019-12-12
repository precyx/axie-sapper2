<script>
  import ThemeController from "./ThemeController.svelte";
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
    width: 200px;
  }

  .item {
    height: 100%;
    padding: 0 8px;
    margin: 0 8px;
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
</style>

<div class="headbar bg-dark-shimmer-2 flex">
  <div class="sidespace">
    <ThemeController />
  </div>

  <div class="center flex text-dark-1">

    <div class="navigation flex ml-auto items-center">
      <div class="item flex cursor-pointer ">
        <img src="images/navigation/market.png" />
        <p>Market</p>
      </div>
      <div class="item flex cursor-pointer">
        <img src="images/navigation/my_axies.png" />
        <p>Profile</p>
      </div>

    </div>
  </div>

  <div class="sidespace" />
</div>
