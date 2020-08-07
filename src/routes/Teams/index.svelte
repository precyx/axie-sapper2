<script>
  import AxiesProfile from "../../components/Axie/Pages/AxiesProfile.svelte";
  import Headbar from "../../components/Misc/Headbar.svelte";
  import SideSpace from "../../components/Misc/SideSpace.svelte";
  import FilterMaster from "../../components/Filter/FilterMaster.svelte";
  import TeamsLayout from "../../components/Layouts/TeamsLayout.svelte";
  import TeamsOverview from "../../components/Teams/TeamsOverview.svelte";
</script>

<TeamsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">

      <TeamsOverview />

    </div>
  </div>

</TeamsLayout>
