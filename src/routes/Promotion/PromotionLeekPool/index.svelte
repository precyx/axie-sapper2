<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import LeekPoolPromotion from "../../../components/Axie/Pages/Promotions/LeekPromotion/LeekPoolPromotion.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <LeekPoolPromotion />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
