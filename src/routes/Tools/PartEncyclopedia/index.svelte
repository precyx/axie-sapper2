<script>
  import ThreeColumnsLayout from "../../../components/Layouts/ThreeColumnsLayout.svelte";
  import PartEncyclopedia from "../../../components/Axie/Pages/Tools/PartEncyclopedia.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <PartEncyclopedia />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
