<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import AxieTeams from "../../../components/Axie/Pages/Experimental/AxieTeams.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <AxieTeams />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
