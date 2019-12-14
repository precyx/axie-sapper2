<script>
  import AxiesProfile from "../components/Axie/AxiesProfile.svelte";
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
    <AxiesProfile />
    <SideSpace />
  </div>
</div>
