<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import PromotionOverview from "../../../components/Axie/Pages/Promotions/PromotionOverview.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <PromotionOverview />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
