<script>
  import Axies from "../components/Axie/Axies.svelte";
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
    <Axies />
    <SideSpace />
  </div>
</div>
