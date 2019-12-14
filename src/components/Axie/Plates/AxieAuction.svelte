<script>
  export let auction;

  const WEI = 1000000000000000000;

  $: priceEth = auction.currentPrice
    ? round3prec(parseInt(auction.currentPrice) / WEI)
    : 0;

  function round3prec(num) {
    return Math.round(num * 1000) / 1000;
  }
</script>

<style>
  .dollar {
    font-size: 12px;
    color: var(--color-grey-1);
    font-weight: normal;
  }
</style>

<div class="price text-lg font-medium">
  Ξ {priceEth}
  <span class="dollar ml-1">$ {auction.currentPriceUSD}</span>
</div>
