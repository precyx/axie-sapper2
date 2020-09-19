<script>
  import AxiesProfileByAddress from "../../components/Axie/Pages/AxiesProfileByAddress.svelte";
  import Headbar from "../../components/Misc/Headbar.svelte";
  import SideSpace from "../../components/Misc/SideSpace.svelte";
  import FilterMaster from "../../components/Filter/FilterMaster.svelte";
  import SelectedAxie from "../../components/Axie/SelectedAxie.svelte";
  import ThreeColumnsLayout from "../../components/Layouts/ThreeColumnsLayout.svelte";
  import LeekPoolPromotion from "../../components/Axie/Pages/LeekPoolPromotion.svelte";
</script>

<ThreeColumnsLayout>

  <div slot="column-left" />
  <div slot="column-center">
    <div style="margin-top:100px">
      <LeekPoolPromotion />
    </div>
  </div>
  <div slot="column-right" />

</ThreeColumnsLayout>
