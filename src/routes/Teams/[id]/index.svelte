<script context="module">
  export async function preload(page, session) {
    let param = page.params.id;
    return { param };
  }
</script>

<script>
  import AxiesProfile from "../../../components/Axie/Pages/AxiesProfile.svelte";
  import Headbar from "../../../components/Misc/Headbar.svelte";
  import SideSpace from "../../../components/Misc/SideSpace.svelte";
  import FilterMaster from "../../../components/Filter/FilterMaster.svelte";
  import TeamsLayout from "../../../components/Layouts/TeamsLayout.svelte";
  import TeamsDetail from "../../../components/Teams/TeamsDetail.svelte";

  export let param;
</script>

<!-- src/routes/blog/[slug].svelte -->
<TeamsLayout>

  <div slot="column-left" />
  <div slot="column-center">

    <div style="margin-top:100px">
      <TeamsDetail />

      {#if param}
      {param}
      {/if}
    </div>
  </div>

</TeamsLayout>
