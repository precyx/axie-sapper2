<script>
  import AxiesEncyclopedia from "../components/Axie/Pages/AxiesEncyclopedia.svelte";
  import Headbar from "../components/Misc/Headbar.svelte";
  import SideSpace from "../components/Misc/SideSpace.svelte";
  import FilterMaster from "../components/Filter/FilterMaster.svelte";
  import ThreeColumnsLayout from "../components/Layouts/ThreeColumnsLayout.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left">
    <FilterMaster />
  </div>
  <div slot="column-center">
    <AxiesEncyclopedia />
  </div>

</ThreeColumnsLayout>
