<script>
  import ThreeColumnsLayout from "../../components/Layouts/ThreeColumnsLayout.svelte";
  import TestOverview from "../../components/Axie/Pages/Experimental/TestOverview.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <TestOverview />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
