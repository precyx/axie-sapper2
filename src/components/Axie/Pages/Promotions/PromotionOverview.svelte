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
    background-color: var(--color-light-1);
    border-radius: 8px;
    padding: 10px 25px;
    margin-bottom: 10px;
    box-shadow: 0 2px 2px rgb(0 0 1 / 18%);
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
    <a href="/Promotion/PromotionLeekPool">#1 - Blooming Leek</a>
    <a href="/Promotion/PromotionLeekPool2">#2 - Rising Leaf</a>
    <a href="/Promotion/PromotionLeekPool3/PrizeDraw">#3 - Hype & Hair</a>
    <a href="/Promotion/PromotionLeekPool4/PrizeDraw">#4 - Whaxie 3.0 (Saturday) </a>
    <a href="/Promotion/PromotionLeekPool5/PrizeDraw">#5 - Whaxie 3.0 (Sunday) </a>
  </div>
</div>
