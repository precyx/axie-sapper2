<script>
  import AxiesMarketplace from "../components/Axie/Pages/AxiesMarketplace.svelte";
  import Headbar from "../components/Misc/Headbar.svelte";
  import SideSpace from "../components/Misc/SideSpace.svelte";
  import FilterMaster from "../components/Filter/FilterMaster.svelte";
</script>

<div>
  <Headbar />

  <div class="flex justify-between">
    <SideSpace>

      <FilterMaster />

    </SideSpace>
    <AxiesMarketplace />
    <SideSpace />
  </div>
</div>
