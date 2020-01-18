<script>
  import AxiesProfileByAddress from "../components/Axie/AxiesProfileByAddress.svelte";
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
    <AxiesProfileByAddress />
    <SideSpace />
  </div>
</div>
