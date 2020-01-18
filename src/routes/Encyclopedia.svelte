<script>
  import AxiesEncyclopedia from "../components/Axie/AxiesEncyclopedia.svelte";
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
    <AxiesEncyclopedia />
    <SideSpace />
  </div>
</div>
