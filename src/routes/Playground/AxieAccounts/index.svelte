<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import AxieAccounts from "../../../components/Axie/Pages/Experimental/AxieAccounts.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <AxieAccounts />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
