<script>
  import AxiesMarketplace from "../../components/Axie/Pages/AxiesMarketplace.svelte";
  import Headbar from "../../components/Misc/Headbar.svelte";
  import SideSpace from "../../components/Misc/SideSpace.svelte";
  import FilterMaster from "../../components/Filter/FilterMaster.svelte";
  import SelectedAxie from "../../components/Axie/SelectedAxie.svelte";
  import ThreeColumnsLayout from "../../components/Layouts/ThreeColumnsLayout.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left">
    <FilterMaster />
  </div>
  <div slot="column-center">
    <AxiesMarketplace />
  </div>
  <div slot="column-right">
    <SelectedAxie />
  </div>

</ThreeColumnsLayout>
