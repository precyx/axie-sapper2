<script>
  import ThreeColumnsLayout from "../../components/Layouts/ThreeColumnsLayout.svelte";
  import Overview from "../../components/Axie/Pages/Experimental/Overview.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <Overview />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
