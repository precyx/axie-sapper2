<script>
  import ThreeColumnsLayout from "../../../../components/Layouts/ThreeColumnsLayout.svelte";
  import PrizeDraw from "../../../../components/Axie/Pages/Promotions/LeekPromotion2/PrizeDraw.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <PrizeDraw />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
