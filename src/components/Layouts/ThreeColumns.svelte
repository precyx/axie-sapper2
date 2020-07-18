<script>
  import SideSpace from "../Misc/SideSpace.svelte";
  import Headbar from "../Misc/Headbar.svelte";
</script>

<style>
  .three-columns :global(.sidespace-left) {
    --sidespace-width: 300px;
  }

  .three-columns :global(.sidespace-right) {
    --sidespace-width: 300px;
  }

  @media only screen and (max-width: 1850px) {
    .three-columns :global(.sidespace-right) {
      --sidespace-width: 0;
    }

    .three-columns :global(.sidespace-left) {
      --sidespace-width: 0;
    }
  }
</style>

<div>
  <Headbar />
  <div class="flex justify-between three-columns">
    <SideSpace className="sidespace-left">
      <slot name="column-left" class="column-left" />
    </SideSpace>
    <slot name="column-center" />
    <SideSpace className="sidespace-right">
      <slot name="column-right" class="column-right" />
    </SideSpace>

  </div>
</div>
