<script>
  import SideSpace from "../Misc/SideSpace.svelte";
  import Headbar from "../Misc/Headbar.svelte";
</script>

<div>
  <Headbar />
  <div class="flex justify-between">
    <SideSpace>
      <slot name="column-left" />
    </SideSpace>
    <slot name="column-center" />
    <SideSpace>
      <slot name="column-right" />
    </SideSpace>

  </div>
</div>
