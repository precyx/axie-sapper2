<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import SLPCount from "../../../components/Axie/Pages/Experimental/SLPCount.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <SLPCount />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
