<script>
  import ThreeColumnsLayout from "../../components/Layouts/ThreeColumnsLayout.svelte";
  import LeekPoolPromotion2 from "../../components/Axie/Pages/LeekPromotion2/LeekPoolPromotion2.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <LeekPoolPromotion2 />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
