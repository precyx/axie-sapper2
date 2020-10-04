<script>
  import { onMount } from "svelte";
  import Text from "../../../UI/Text.svelte";
</script>

<style>
  .promotion-overview {
    width: 800px;
  }

  .group {
    display: flex;
    flex-flow: column;
  }

  .group a {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid;
    margin-bottom: 10px;
  }
</style>

<div class="promotion-overview">

  <Text type="infobar" className="text-dark-2">Leek Overview</Text>
  <Text
    type="h1"
    style="margin-bottom:25px; margin-top:10px;"
    className="text-dark-2">
    Promotions
  </Text>

  <div class="text-dark-2 group">
    <a href="/PromotionLeekPool">Leek Promotion #1</a>
    <a href="/PromotionLeekPool2">Leek Promotion #2</a>
    <a href="/PromotionLeekPool3">Leek Promotion #3</a>
  </div>
</div>
